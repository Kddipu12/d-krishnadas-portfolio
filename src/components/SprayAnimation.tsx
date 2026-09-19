import { useRef, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Vertex shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader recreating the Cloudflare particle/dispersion effect
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseActive;

  varying vec2 vUv;

  // Custom noise function
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  void main() {
    vec2 uv = vUv;

    // Normalize coordinates
    vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);

    // Base animated noise field (the "cloud/spray")
    float time = uTime * 0.2;

    // Multiple layers of noise to create the particle/dispersion look
    float n1 = noise(p * 3.0 + time);
    float n2 = noise(p * 8.0 - time * 1.5);
    float n3 = noise(p * 15.0 + vec2(time * 2.0, -time));

    float mask = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);

    // Mouse interaction - scatter effect
    float mouseDist = length(uv - uMouse);
    float scatter = 0.0;

    if (uMouseActive > 0.0) {
      // Create a localized distortion/dispersion field around the mouse
      scatter = smoothstep(0.2, 0.0, mouseDist) * uMouseActive;

      // Jitter UVs near the mouse to create the "scatter" effect
      vec2 jitter = vec2(
        hash(floor(uv * 100.0 + time)) - 0.5,
        hash(floor(uv * 100.0 - time)) - 0.5
      ) * scatter * 0.5;

      uv += jitter;
      p += jitter * 2.0;

      // Re-evaluate noise with scattered UVs
      n1 = noise(p * 3.0 + time);
      n2 = noise(p * 8.0 - time * 1.5);
      mask = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);

      // Add intense localized highlights near mouse
      mask += smoothstep(0.1, 0.0, mouseDist) * noise(p * 50.0) * 0.5 * uMouseActive;
    }

    // Color palette matching the dark theme + neon cyan/blue
    vec3 color1 = vec3(0.0, 0.85, 1.0); // Cyan
    vec3 color2 = vec3(0.1, 0.3, 0.9); // Deep blue
    vec3 bg = vec3(0.05, 0.06, 0.08); // Dark background

    // Shape the noise into discrete "particles" or chunks
    // This creates the pixelated/halftone feel of the reference
    float threshold = 0.45 - (scatter * 0.1);
    float particles = smoothstep(threshold, threshold + 0.05, mask);

    // Mix colors based on density
    vec3 finalColor = mix(bg, mix(color2, color1, mask + scatter), particles);

    // Add glowing haze
    finalColor += color1 * mask * 0.3;
    finalColor += color2 * scatter * 0.4;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseActive: { value: 0 },
    }),
    [size]
  );

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [size]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

      // Update mouse position (normalized 0-1 range)
      // state.pointer is -1 to 1, we need 0 to 1 with flipped Y for UV coordinates
      const targetMouseX = (state.pointer.x + 1) / 2;
      const targetMouseY = (state.pointer.y + 1) / 2;

      materialRef.current.uniforms.uMouse.value.set(targetMouseX, targetMouseY);

      // Fade in interaction when mouse moves
      const isActive = Math.abs(state.pointer.x) > 0.01 || Math.abs(state.pointer.y) > 0.01;
      const currentActive = materialRef.current.uniforms.uMouseActive.value;

      materialRef.current.uniforms.uMouseActive.value = THREE.MathUtils.lerp(
        currentActive,
        isActive ? 1.0 : 0.0,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export default function SprayAnimation() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
      >
        <Suspense fallback={null}>
          <ShaderPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}

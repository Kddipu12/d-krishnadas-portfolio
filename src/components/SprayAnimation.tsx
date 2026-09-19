import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleSystem = () => {
  const count = 500; // Number of particles
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Particle properties arrays
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Random starting angles and initial velocities for a fountain/spray effect
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.5;
      const velocityX = Math.cos(angle) * (Math.random() * 0.05 + 0.01);
      const velocityY = Math.random() * 0.1 + 0.05; // Upward initial velocity
      const velocityZ = Math.sin(angle) * (Math.random() * 0.05 + 0.01);

      // Start near the center
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 0.5;
      const z = Math.sin(angle) * radius;

      const timeOffset = Math.random() * 100; // Offset animation phase
      const scale = Math.random() * 0.5 + 0.2; // Particle sizes

      temp.push({
        x, y, z, velocityX, velocityY, velocityZ, timeOffset, scale
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Use a predefined set of colors for the particles to match the neon aesthetic
  const colors = useMemo(() => [
    new THREE.Color("#00D9FF"), // Cyan
    new THREE.Color("#4A90E2"), // Blue
    new THREE.Color("#00FFC2"), // Neon Green
    new THREE.Color("#B537F2"), // Purple
  ], []);

  const colorArray = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      color.toArray(arr, i * 3);
    }
    return arr;
  }, [count, colors]);

  useFrame((state) => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      // Update position with velocity
      particle.y += particle.velocityY;
      particle.x += particle.velocityX;
      particle.z += particle.velocityZ;

      // Gravity effect
      particle.velocityY -= 0.002;

      // Swirling effect based on time
      const time = state.clock.elapsedTime + particle.timeOffset;
      particle.x += Math.sin(time) * 0.01;
      particle.z += Math.cos(time) * 0.01;

      // Reset particles when they fall too far down
      if (particle.y < -5) {
        particle.y = (Math.random() - 0.5) * 0.5; // Reset to near center
        particle.x = (Math.random() - 0.5) * 0.5;
        particle.z = (Math.random() - 0.5) * 0.5;
        particle.velocityY = Math.random() * 0.1 + 0.05; // Reset velocity
      }

      // Update the dummy object position
      dummy.position.set(particle.x, particle.y, particle.z);

      // Pulse scale
      const currentScale = particle.scale * (1 + Math.sin(time * 3) * 0.2);
      dummy.scale.set(currentScale, currentScale, currentScale);

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;

    // Slowly rotate the entire particle system
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.08, 16, 16]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </sphereGeometry>
      <meshStandardMaterial vertexColors transparent opacity={0.8} />
    </instancedMesh>
  );
};

const CentralSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#1E1E1E"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        emissive="#000000"
      />
    </mesh>
  );
};

export default function SprayAnimation() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 50 }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00D9FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4A90E2" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#00FFC2" />

        <CentralSphere />
        <ParticleSystem />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  );
}

import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3, Euler } from 'three';
import { KeyboardControls, useKeyboardControls } from '@react-three/drei';

const SPEED = 15;
const ROTATION_SPEED = 2.5;

function Car() {
  const group = useRef<THREE.Group>(null);
  const [, get] = useKeyboardControls();
  const { camera } = useThree();

  // Physics state
  const velocity = useMemo(() => new Vector3(), []);
  const position = useMemo(() => new Vector3(0, 0.5, 0), []);
  const rotation = useMemo(() => new Euler(0, 0, 0), []);

  useFrame((state, delta) => {
    if (!group.current) return;

    const { forward, backward, left, right } = get();

    // Movement logic
    let moveSpeed = 0;
    if (forward) moveSpeed = SPEED;
    if (backward) moveSpeed = -SPEED / 2;

    if (left && (forward || backward)) {
      rotation.y += ROTATION_SPEED * delta * (backward ? -1 : 1);
    }
    if (right && (forward || backward)) {
      rotation.y -= ROTATION_SPEED * delta * (backward ? -1 : 1);
    }

    // Apply rotation
    group.current.rotation.copy(rotation);

    // Calculate forward vector based on rotation
    const direction = new Vector3(0, 0, -1).applyEuler(rotation);

    // Update velocity and position
    velocity.copy(direction).multiplyScalar(moveSpeed * delta);
    position.add(velocity);

    // Keep car in bounds for a cool looping effect (optional, or just let it drive)
    if (position.x > 50) position.x = -50;
    if (position.x < -50) position.x = 50;
    if (position.z > 50) position.z = -50;
    if (position.z < -50) position.z = 50;

    group.current.position.copy(position);

    // Camera follow
    const cameraOffset = new Vector3(0, 5, 10);
    cameraOffset.applyEuler(rotation);
    camera.position.lerp(position.clone().add(cameraOffset), 0.1);
    camera.lookAt(position);
  });

  return (
    <group ref={group}>
      {/* Car Body */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color="#00ff00" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Cockpit */}
      <mesh castShadow receiveShadow position={[0, 1.25, -0.5]}>
        <boxGeometry args={[1.8, 0.6, 1.8]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Wheels */}
      <mesh castShadow position={[-1.1, 0.4, 1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh castShadow position={[1.1, 0.4, 1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh castShadow position={[-1.1, 0.4, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh castShadow position={[1.1, 0.4, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

function Ground() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#0a0a0a" />
      {/* Add a grid to make movement obvious */}
      <gridHelper args={[200, 200, '#00ff00', '#222222']} position={[0, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </mesh>
  );
}

export default function CarGame() {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
      ]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <Car />
      <Ground />
    </KeyboardControls>
  );
}

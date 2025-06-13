import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export type FloatingCubeProps = {
  index: number;
};

const FloatingCube: React.FC<FloatingCubeProps> = ({ index }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime + index) * 1.2 + index - 3;
      mesh.current.rotation.x += 0.01 + index * 0.003;
      mesh.current.rotation.y += 0.01 + index * 0.002;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={[Math.sin(index) * 4, index - 3, Math.cos(index) * 4]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={index % 2 === 0 ? 'teal' : '#a2d5f2'}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

export default FloatingCube;

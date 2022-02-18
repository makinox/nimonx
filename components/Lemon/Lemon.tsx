import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Base() {
  const meshRef = useRef<any>();
  const {
    nodes: {
      Icosphere: { geometry, material },
    },
  }: any = useGLTF('/limon.glb');

  useFrame(() => (meshRef.current.rotation.y += 0.002));

  return (
    <>
      <mesh ref={meshRef} geometry={geometry} scale={1} position={[-0.05, 0.04, -0.04]}>
        <meshStandardMaterial {...material} color="white" metalness={5} />
      </mesh>
    </>
  );
}

useGLTF.preload('/limon.glb');

function Planet() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <pointLight position={[-10, 9, 10]} color="rgb(243, 199, 83)" intensity={0.5} />
        <pointLight position={[10, -9, -5]} color="rgb(18,235,207)" intensity={1} />
        <OrbitControls />
        <Base />
      </Suspense>
    </Canvas>
  );
}

export default Planet;

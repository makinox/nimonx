import { memo, Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Base({ color = 'white', scale = 1 }: { color?: string; scale?: number }) {
  const meshRef = useRef<any>();
  const {
    nodes: {
      Icosphere: { geometry, material },
    },
  }: any = useGLTF('/limon.glb');

  useFrame(() => (meshRef.current.rotation.y += 0.002));

  return (
    <>
      <mesh ref={meshRef} geometry={geometry} scale={scale} position={[-0.05, 0.04, -0.04]}>
        <meshStandardMaterial {...material} color={color} metalness={5} />
      </mesh>
    </>
  );
}

useGLTF.preload('/limon.glb');

function Planet({ type, color = 'white', scale = 1 }: { type: 'base' | 'solid'; color?: string; scale?: number }) {
  const RenderType = useMemo(() => {
    switch (type) {
      case 'base':
        return (
          <>
            <pointLight position={[-10, 9, 10]} color="rgb(243, 199, 83)" intensity={0.5} />
            <pointLight position={[10, -9, -5]} color="rgb(18,235,207)" intensity={1} />
            <OrbitControls enableZoom={false} />
            <Base />
          </>
        );
      case 'solid':
        return (
          <>
            <ambientLight color={color} />
            <pointLight color={color} position={[-10, 9, 10]} />
            <Base color={color} scale={scale} />
          </>
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <Canvas>
      <Suspense fallback={null}>{RenderType}</Suspense>
    </Canvas>
  );
}

export default memo(Planet);

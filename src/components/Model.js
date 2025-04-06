import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelContent = () => {
  const gltf = useGLTF('/model.glb', true); // Make sure model is in /static or /public folder
  return <primitive object={gltf.scene} scale={0.2} />;
};

const Model = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={null}>
          <ModelContent />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Model;

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';


const ThreeFiberScene = () => {
  return (
    <>
        <Canvas>
            <OrbitControls autoRotate={true}/>
            <mesh>
                <ambientLight intensity={1}/>
                <directionalLight position={[-1,0,1]} intensity={0.5}/>
                <boxGeometry args = {[1,1,1]}/>
                <meshStandardMaterial attach="material" color = {0xa3b18a}/>
            </mesh>
        </Canvas>
    </>
    
  );
};

export default ThreeFiberScene;
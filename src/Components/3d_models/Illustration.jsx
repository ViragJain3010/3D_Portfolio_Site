import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Atomicmodel from "./Atomic_model";

const Illustration = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <Atomicmodel />
      </Stage>
    </Canvas>
  );
};

export default Illustration;

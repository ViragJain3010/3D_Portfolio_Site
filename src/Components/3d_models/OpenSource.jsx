import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import GitHub from "./GitHub";

const OpenSource = () => {
  return (
    <Canvas >
      <Stage environment={"night"} intensity={0.8}>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <GitHub />
      </Stage>
    </Canvas>
  );
};

export default OpenSource;

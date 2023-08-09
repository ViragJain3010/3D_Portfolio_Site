import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoes from "./Shoes";

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <Shoes />
      </Stage>
    </Canvas>
  );
};

export default ProductDesign;

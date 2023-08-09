import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import styled from "styled-components";
import Cube from "./Cube_3dModel";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const SqBox = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[7,5,3]} />
        <Cube />
      </Canvas>
    </Container>
  );
};

export default SqBox;

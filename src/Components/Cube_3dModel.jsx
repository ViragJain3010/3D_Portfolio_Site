import React, { useRef } from "react";
import { RenderTexture, PerspectiveCamera, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  // animation
  const textRef = useRef();
  useFrame((state) => {
    textRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.8;
    textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.8; 
  });

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#c866f5"]} />
          <Text ref={textRef} fontSize={1.5} color="white" >
            Think
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;

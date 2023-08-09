import React,{Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,

} from "@react-three/drei";

const Sphere_3d = () => {
  return (
    <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 4, 3]} />
              <Sphere args={[6, 100, 200]} scale={0.35}>
                <MeshDistortMaterial
                  color="#b479df"
                  attach="material"
                  distort={0.15}
                />
              </Sphere>
            </Suspense>
          </Canvas>
  );
};

export default Sphere_3d;

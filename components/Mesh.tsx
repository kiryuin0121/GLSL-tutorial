import { CustomShaderMaterial } from "@/shaders/customShaderMaterial/shaderMaterial";
import { extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
extend({ CustomShaderMaterial });
const Mesh = () => {
  const materialRef = useRef<InstanceType<typeof CustomShaderMaterial>>(null!)
  useFrame(({clock}) => {
    materialRef.current.uTime = clock.getElapsedTime();
  })
  return (
    <mesh>
      <icosahedronGeometry args={[1, 5]} />
      <customShaderMaterial
        key={CustomShaderMaterial.key}
        ref={materialRef}
        uColor={"lightblue"}
      />
    </mesh>
  );
};

export default Mesh;

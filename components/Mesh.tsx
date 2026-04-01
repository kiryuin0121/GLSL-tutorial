import { CustomShaderMaterial } from "@/shaders/customShaderMaterial/shaderMaterial";
import { extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { randFloat } from "three/src/math/MathUtils.js";
extend({ CustomShaderMaterial });
const widthSegment=10;
const heightSegment=10;
const itemSize =1;
const vertexCount = (widthSegment+1)*(heightSegment+1);//0始まりなので+1
const Mesh = () => {
  const materialRef = useRef<InstanceType<typeof CustomShaderMaterial>>(null!);
  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.getElapsedTime();
  });
  return (
    <mesh>
      {/* <icosahedronGeometry args={[1, 5]} /> */}
      <planeGeometry args={[1, 1,widthSegment,heightSegment]}>
        <bufferAttribute
          attach={"attributes-aSpeed"}
          args={[
            new Float32Array(itemSize*vertexCount).map(() => randFloat(1, 5)),
            itemSize,
          ]}
        />
      </planeGeometry>
      <customShaderMaterial
        key={CustomShaderMaterial.key}
        ref={materialRef}
        wireframe={true}
        uColor={"lightblue"}
      />
    </mesh>
  );
};

export default Mesh;

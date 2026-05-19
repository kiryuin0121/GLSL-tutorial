import { CustomShaderMaterial } from "@/shaders/customShaderMaterial/shaderMaterial";
import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Vector2 } from "three";
import { randFloat } from "three/src/math/MathUtils.js";
extend({ CustomShaderMaterial });
const widthSegment=10;
const heightSegment=10;
const itemSize =1;
const vertexCount = (widthSegment+1)*(heightSegment+1);//0始まりなので+1
const mouse = new Vector2();
const Mesh = () => {
  const materialRef = useRef<InstanceType<typeof CustomShaderMaterial>>(null!);
  useFrame(({ clock ,pointer}) => {
    materialRef.current.uTime = clock.getElapsedTime();
    mouse.x = (pointer.x + 1) * 0.5;
    mouse.y = (pointer.y + 1) * 0.5;
    materialRef.current.uMouse = [mouse.x,mouse.y];
  });
  const {viewport} = useThree();
  return (
    <mesh position={[0,0,0]}>
      {/* <icosahedronGeometry args={[1, 5]} /> */}
      <planeGeometry args={[viewport.width, viewport.height,widthSegment,heightSegment]}>
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
        wireframe={false}
        uColor={"lightblue"}
      />
    </mesh>
  );
};

export default Mesh;

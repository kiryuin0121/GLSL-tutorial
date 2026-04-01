"use client";

import { SpikyShaderMaterial } from "@/shaders/spikyShader/shaderMaterial";
import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { randFloat } from "three/src/math/MathUtils.js";

extend({SpikyShaderMaterial});
// IcosahedronGeometry の頂点バッファ数の計算式:
// 面の数 = 20 × 4^detail、各面は三角形(3頂点) → 20 × 4² × 3 = 960
const detail = 7;
const vertexCount = 20 * Math.pow(4, detail) * 3;

const SpikyBall = () => {
  const materialRef = useRef<InstanceType<typeof SpikyShaderMaterial>>(null!);

  const array = useMemo(
    () => new Float32Array(vertexCount).map(() => randFloat(1, 2)),
    []
  );
  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.getElapsedTime();
  });
  return (
    <mesh position-y={1.2}>
      <icosahedronGeometry args={[0.5, detail]}>
        <bufferAttribute
          attach={"attributes-aSpeed"}
          args={[array, 1]}
        />
      </icosahedronGeometry>
      <spikyShaderMaterial
        key={SpikyShaderMaterial.key}
        ref={materialRef}
        wireframe={true}
        uColor={"lime"}
      />
    </mesh>
  )
}

export default SpikyBall
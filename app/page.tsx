"use client";

import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Canvas, extend, ThreeElement } from "@react-three/fiber";
import vertexShader from "@/shaders/vertex.glsl";
import fragmentShader from "@/shaders/fragment.glsl";
const CustomShaderMaterial = shaderMaterial(
  {},
  vertexShader,
  fragmentShader
);
extend({CustomShaderMaterial});
declare module "@react-three/fiber" {
  interface ThreeElements {
    customShaderMaterial: ThreeElement<typeof CustomShaderMaterial>;
  }
}
const App = () => {
  return (
    <main className={`w-screen h-screen bg-black text-white`}>
      <Canvas
        camera={{position:[0,0,5]}}
      >
        <directionalLight
          color={"#ffffff"}
          intensity={0.75}
          position={[5,5,5]}
        />
        <ambientLight
        color={"#ffffff"}
        intensity={0.2}
        />
        <OrbitControls/>

        <mesh>
          <icosahedronGeometry args={[1,5]}/>
          <customShaderMaterial key={CustomShaderMaterial.key}/>
        </mesh>
      </Canvas>
    </main>
  )
}

export default App;
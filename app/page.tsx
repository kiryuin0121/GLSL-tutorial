"use client";

import { OrbitControls} from "@react-three/drei";
import { Canvas, extend} from "@react-three/fiber";
import { CustomShaderMaterial } from "@/shaders/customShaderMaterial/shaderMaterial";

extend({CustomShaderMaterial});

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
          <customShaderMaterial 
          key={CustomShaderMaterial.key}
          uColor={"lightblue"}
          />
        </mesh>
      </Canvas>
    </main>
  )
}

export default App;
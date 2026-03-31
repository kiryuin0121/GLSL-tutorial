"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
          <meshStandardMaterial/>
        </mesh>
      </Canvas>
    </main>
  )
}

export default App;
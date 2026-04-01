"use client";

import { OrbitControls} from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import Mesh from "@/components/Mesh";



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

       <Mesh/>
      </Canvas>
    </main>
  )
}

export default App;
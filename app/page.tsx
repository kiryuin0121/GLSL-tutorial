"use client";

import { Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SpikyBall from "@/components/SpikyBall";
import { degToRad} from "three/src/math/MathUtils.js";
import Mesh from "@/components/Mesh";

const App = () => {
  return (
    <main className={`w-screen h-screen bg-neutral-900 text-white `}>
      <Canvas orthographic camera={{ position: [0,0,1] }}>
        {/* <ambientLight intensity={0.3} />
        <directionalLight position={[3, 5, 2]} intensity={1} /> */}

        {/* <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={degToRad(25)}
        /> */}

        {/* <Grid
          position={[0, 0, 0]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor={"#262626"}
          sectionSize={1}
          sectionThickness={1.5}
          sectionColor={"black"}
           fadeDistance={60}
  fadeStrength={3}
  fadeFrom={1}
          infiniteGrid
        /> */}
        {/* <SpikyBall /> */}
        <Mesh/>
      </Canvas>
    </main>
  );
};

export default App;

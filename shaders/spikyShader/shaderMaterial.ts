import { shaderMaterial } from "@react-three/drei";
import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import { ThreeElement } from "@react-three/fiber";
import { Color } from "three";

export const SpikyShaderMaterial = shaderMaterial({
  uColor:new Color("hotpink"),
  uTime:0
}, vertexShader, fragmentShader);
declare module "@react-three/fiber" {
  interface ThreeElements {
    spikyShaderMaterial: ThreeElement<typeof SpikyShaderMaterial>;
  }
}

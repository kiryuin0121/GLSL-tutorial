import { shaderMaterial } from "@react-three/drei";
import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import { ThreeElement } from "@react-three/fiber";
import { Color } from "three";

export const CustomShaderMaterial = shaderMaterial({
  uColor:new Color("pink"),
  uTime:0
}, vertexShader, fragmentShader);
declare module "@react-three/fiber" {
  interface ThreeElements {
    customShaderMaterial: ThreeElement<typeof CustomShaderMaterial>;
  }
}

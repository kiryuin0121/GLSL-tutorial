import { shaderMaterial } from "@react-three/drei";
import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import { ThreeElement } from "@react-three/fiber";

export const CustomShaderMaterial = shaderMaterial({}, vertexShader, fragmentShader);
declare module "@react-three/fiber" {
  interface ThreeElements {
    customShaderMaterial: ThreeElement<typeof CustomShaderMaterial>;
  }
}

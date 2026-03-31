import { shaderMaterial } from "@react-three/drei";
import vertexShader from "@/shaders/vertex.glsl";
import fragmentShader from "@/shaders/fragment.glsl";
import { ThreeElement } from "@react-three/fiber";

export const CustomShaderMaterial = shaderMaterial({}, vertexShader, fragmentShader);
declare module "@react-three/fiber" {
  interface ThreeElements {
    customShaderMaterial: ThreeElement<typeof CustomShaderMaterial>;
  }
}

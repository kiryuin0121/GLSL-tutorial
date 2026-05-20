varying vec3 vPosition;
varying vec2 vUv;
uniform float uTime; //in
attribute float aSpeed; //in
void main() {
  // vPosition = position; //out
  vUv = uv;
  // vec3 pos = position;
  // pos.y += sin(uTime*aSpeed);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

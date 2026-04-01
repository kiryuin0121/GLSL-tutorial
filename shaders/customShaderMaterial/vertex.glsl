varying vec3 vPosition;
uniform float uTime; //in
attribute float aSpeed; //in
void main() {
  vPosition = position; //out

  vec3 pos = position;
  pos.y += sin(uTime*aSpeed);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

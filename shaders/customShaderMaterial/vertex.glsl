varying vec3 vPosition;
void main() {
  vPosition = position; //out
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

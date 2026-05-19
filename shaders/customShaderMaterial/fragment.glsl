varying vec3 vPosition; //in
uniform vec3 uColor; //in
uniform vec2 uMouse; //in
void main() {
  vec3 color = vec3(uMouse.x,0,uMouse.y);
  gl_FragColor = vec4(color, 1.0);
}

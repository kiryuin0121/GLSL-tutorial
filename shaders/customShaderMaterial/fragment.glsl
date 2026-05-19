varying vec3 vPosition; //in
uniform vec3 uColor; //in
uniform vec2 uMouse; //in
uniform float uTime; //in
void main() {
  // vec3 color = vec3(uMouse.x,0,uMouse.y);
  vec3 color = vec3(0,abs(sin(uTime)),abs(cos(uTime)));
  gl_FragColor = vec4(color, 1.0);
}

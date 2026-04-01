varying vec3 vPosition; //in
uniform vec3 uColor; //in
void main() {
  gl_FragColor = vec4(uColor, 1.0);
}

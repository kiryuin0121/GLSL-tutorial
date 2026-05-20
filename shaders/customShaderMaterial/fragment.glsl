varying vec3 vPosition; //in
uniform vec3 uColor; //in
uniform vec2 uMouse; //in
uniform float uTime; //in
uniform vec2 uResolution; //in
varying vec2 vUv; 
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  // vec3 color = vec3(uMouse.x,0,uMouse.y);
  // vec3 color = vec3(0,abs(sin(uTime)),abs(cos(uTime)));
  // vec3 red = vec3(1.,0.,0.);
  // vec3 blue = vec3(0.,0.,1.);
  // vec3 color = vec3(mix(blue,red,uv.y));
  vec3 color = vec3(vUv.x,0.,vUv.y);
  gl_FragColor = vec4(color, 1.0);
}

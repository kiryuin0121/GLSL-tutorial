varying vec3 vPosition; //in
uniform vec3 uColor; //in
uniform vec2 uMouse; //in
uniform float uTime; //in
uniform vec2 uResolution; //in
varying vec2 vUv;

void main() {
  vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);

  // vec3 color = vec3(uMouse.x,0,uMouse.y);
  // vec3 color = vec3(0,abs(sin(uTime)),abs(cos(uTime)));
  // vec3 red = vec3(1.,0.,0.);
  // vec3 blue = vec3(0.,0.,1.);
  // vec3 color = vec3(mix(blue,red,uv.y));

  float inCircle = 1.0 - step(0.5, length(uv));
  vec3 color = vec3(1.0,1.0,0.0) * inCircle;

  gl_FragColor = vec4(color, 1.0);
}
varying vec3 vPosition;
varying float vSpike;

void main() {
  vec3 colorBase  = vec3(0.05, 0.12, 0.0);  
  vec3 colorMid   = vec3(0.22, 1.0,  0.08); 
  vec3 colorTip   = vec3(0.8,  1.0,  0.0); 
  
  vec3 color = mix(colorBase, colorMid, vSpike * 2.0);
  color = mix(color, colorTip, max(0.0, vSpike * 2.0 - 1.0));

  float yLight = normalize(vPosition).y * 0.05 + 0.05;
  color += yLight;

  gl_FragColor = vec4(color, 1.0);
}
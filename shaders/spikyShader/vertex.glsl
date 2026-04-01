uniform float uTime;
attribute float aSpeed;

varying vec3 vPosition;
varying float vSpike;

void main() {
  vPosition = position;

  float phase = position.x * 10.0
              + position.y * 10.0
              + position.z * 10.0;

  float t = max(0.0, sin(uTime * aSpeed + phase));
  float spike = pow(t, 10.0) * 0.9;

  vSpike = spike;

  vec3 pos = position + normal * spike;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
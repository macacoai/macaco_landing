"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;

float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5453); }

float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

vec3 aurora(float t){
  vec3 a0 = vec3(0.000, 0.074, 0.161);
  vec3 a  = vec3(0.000, 0.078, 0.169);
  vec3 b  = vec3(0.000, 0.125, 0.220);
  vec3 c  = vec3(0.078, 0.204, 0.298);
  vec3 d  = vec3(0.157, 0.286, 0.380);
  vec3 e  = vec3(0.550, 0.650, 0.720);
  vec3 f  = vec3(0.605, 0.715, 0.792);
  vec3 col = mix(a0, a, smoothstep(0.0, 0.17, t));
  col = mix(col, b, smoothstep(0.17, 0.33, t));
  col = mix(col, c, smoothstep(0.33, 0.50, t));
  col = mix(col, d, smoothstep(0.50, 0.67, t));
  col = mix(col, e, smoothstep(0.67, 0.83, t));
  col = mix(col, f, smoothstep(0.83, 1.00, t));
  return col;
}

void main(){
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes.xy) / uRes.y;

  float t = uTime * 0.18;
  vec2 q = p;
  q.x += 0.35 * sin(q.y * 1.3 + t + fbm(q * 1.1 + t * 0.3) * 2.0);
  q.y += 0.25 * fbm(q * 1.6 + vec2(t * 0.45, -t * 0.55));

  float bands = fbm(q * 1.2 + vec2(0.0, t * 0.4));
  bands = pow(bands, 1.4);

  vec3 col = aurora(clamp(bands, 0.0, 1.0));

  vec2 dir1 = vec2(-t * 0.32, t * 0.22);
  vec2 dir2 = vec2(t * 0.25, t * 0.28);
  float s1 = fbm(p * 2.4 + dir1);
  float s2 = fbm(p * 2.8 + dir2);
  float splash = max(s1, s2);
  float splashMask = smoothstep(0.58, 0.78, splash) * smoothstep(0.15, 0.55, bands);
  col = mix(col, vec3(0.157, 0.286, 0.380), splashMask * 0.38);

  vec2 sp = floor(gl_FragCoord.xy / 3.0);
  float starHash = hash(sp);
  float twinkle = 0.55 + 0.45 * sin(uTime * 1.8 + starHash * 6.283);
  float st = step(0.9992, starHash) * twinkle;
  col += vec3(1.000, 0.804, 0.071) * st * 0.85;

  col *= smoothstep(-0.7, 0.5, p.y + 0.5);

  gl_FragColor = vec4(col, 1.0);
}
`;

// Cap the longest drawing-buffer side. Shader is fragment-heavy (5-tap fbm)
// and some integrated GPUs throttle or lose context past ~2K per side.
const MAX_BUFFER_SIDE = 2048;

export default function HeroAuroraScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getSize = () => ({
      width: container.clientWidth || window.innerWidth,
      height: container.clientHeight || window.innerHeight,
    });

    const computeEffectiveDpr = (width: number, height: number) => {
      const rawDpr = Math.min(window.devicePixelRatio || 1, 2);
      const longest = Math.max(width, height);
      if (longest * rawDpr <= MAX_BUFFER_SIDE) return rawDpr;
      return Math.max(1, MAX_BUFFER_SIDE / longest);
    };

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
      });
    } catch (err) {
      console.warn("HeroAuroraScene: WebGL context creation failed", err);
      return;
    }

    const initialSize = getSize();
    const initialDpr = computeEffectiveDpr(initialSize.width, initialSize.height);

    renderer.setPixelRatio(initialDpr);
    renderer.setSize(initialSize.width, initialSize.height);

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uRes: {
        value: new THREE.Vector2(
          Math.max(1, initialSize.width * initialDpr),
          Math.max(1, initialSize.height * initialDpr),
        ),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const clock = new THREE.Clock(false);
    let elapsed = 0;
    let frameId = 0;
    let running = false;

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      elapsed += clock.getDelta();
      uniforms.uTime.value = elapsed;
      try {
        renderer!.render(scene, camera);
      } catch (err) {
        console.warn("HeroAuroraScene: render error", err);
        stop();
      }
    };

    const start = () => {
      if (running || !renderer) return;
      const gl = renderer.getContext();
      if (gl.isContextLost()) return;
      running = true;
      clock.start();
      animate();
    };

    const stop = () => {
      if (!running) return;
      running = false;
      window.cancelAnimationFrame(frameId);
      clock.stop();
    };

    const applySize = () => {
      const { width, height } = getSize();
      if (width <= 0 || height <= 0 || !renderer) return;
      const dpr = computeEffectiveDpr(width, height);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      uniforms.uRes.value.set(
        Math.max(1, width * dpr),
        Math.max(1, height * dpr),
      );
    };

    const onContextLost = (e: Event) => {
      e.preventDefault();
      stop();
    };

    const onContextRestored = () => {
      applySize();
      if (isIntersectingRef.current) start();
    };

    const isIntersectingRef = { current: false };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        isIntersectingRef.current = visible;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    observer.observe(container);

    canvas.addEventListener("webglcontextlost", onContextLost, false);
    canvas.addEventListener("webglcontextrestored", onContextRestored, false);
    window.addEventListener("resize", applySize);

    return () => {
      observer.disconnect();
      stop();
      window.removeEventListener("resize", applySize);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}

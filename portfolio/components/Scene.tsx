"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const g = useRef<THREE.Group>(null);
  useFrame((s, d) => {
    if (!g.current) return;
    g.current.rotation.y += d * 0.3;
    g.current.rotation.x += (s.pointer.y * 0.6 - g.current.rotation.x) * 0.04;
    g.current.position.x += (s.pointer.x * 0.5 - g.current.position.x) * 0.04;
  });
  return (
    <Float speed={1.4} floatIntensity={1.1}>
      <group ref={g}>
        <mesh>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial color="#22d3ee" wireframe emissive="#22d3ee" emissiveIntensity={0.7} />
        </mesh>
        <mesh>
          <octahedronGeometry args={[0.75, 0]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.2} emissive="#7c3aed" emissiveIntensity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function Stars({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * 14;
    return a;
  }, [count]);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#94a3b8" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

export default function Scene({ count }: { count: number }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 55 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={30} color="#a78bfa" />
      <Core />
      <Stars count={count} />
    </Canvas>
  );
}

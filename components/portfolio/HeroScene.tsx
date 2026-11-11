
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function MainSculpture() {
  const group = useRef<THREE.Group>(null)
  const knot = useRef<THREE.Mesh>(null)
  const ring = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    if (group.current) {
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        state.pointer.y * 0.12,
        0.025
      )
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -state.pointer.x * 0.12,
        0.025
      )
    }

    if (knot.current) {
      knot.current.rotation.x += delta * 0.08
      knot.current.rotation.y += delta * 0.1
      knot.current.position.y = Math.sin(t * 0.5) * 0.12
    }

    if (ring.current) {
      ring.current.rotation.x = Math.sin(t * 0.3) * 0.4
      ring.current.rotation.y += delta * 0.12
    }
  })

  return (
    <group ref={group}>
      {/* Main chrome sculpture */}
      <mesh ref={knot}>
        <torusKnotGeometry args={[1.35, 0.36, 220, 32, 2, 3]} />

        <meshPhysicalMaterial
          color="#c3c9ff"
          metalness={0.95}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive="#252c80"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Outer orbital structure */}
      <mesh ref={ring} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[2.1, 0.018, 16, 160]} />
        <meshBasicMaterial
          color="#6c8cff"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Secondary orbital ring */}
      <mesh rotation={[0.5, 0.8, 0.5]}>
        <torusGeometry args={[2.4, 0.008, 12, 160]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Small floating geometric objects */}
      <mesh position={[-2.1, 1.5, -0.5]}>
        <icosahedronGeometry args={[0.25, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          emissive="#4f46e5"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[2.2, -1.3, -0.8]}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          emissive="#0891b2"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  )
}

function Particles() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 1400
    const data = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      data[i * 3] = (Math.random() - 0.5) * 14
      data[i * 3 + 1] = (Math.random() - 0.5) * 10
      data[i * 3 + 2] = (Math.random() - 0.5) * 9
    }

    return data
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return

    ref.current.rotation.y += delta * 0.008
    ref.current.rotation.x = Math.sin(
      state.clock.elapsedTime * 0.15
    ) * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#8295ff"
        size={0.018}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <pointLight
        position={[3, 3, 4]}
        color="#4169ff"
        intensity={100}
        distance={12}
      />

      <pointLight
        position={[-4, -2, 2]}
        color="#8b5cf6"
        intensity={100}
        distance={12}
      />

      <pointLight
        position={[0, 4, -3]}
        color="#ffffff"
        intensity={40}
      />

      <MainSculpture />
      <Particles />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      fallback={null}
    >
      <Scene />
    </Canvas>
  )
}

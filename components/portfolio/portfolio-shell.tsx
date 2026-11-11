'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { Loader } from './loader'
import { Navbar } from './navbar'
import { Hero } from './hero'
import { About } from './about'
import { Skills } from './skills'
import { ExperienceSection } from './experience'
import { Projects } from './projects'
import { Resume } from './resume'
import { Services } from './services'
import { Contact } from './contact'
import { Footer } from './footer'


function CursorGlow() {
  const reduce = useReducedMotion()
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)

  const sx = useSpring(x, { stiffness: 120, damping: 25 })
  const sy = useSpring(y, { stiffness: 120, damping: 25 })

  const background = useTransform(
    [sx, sy] as never,
    ([a, b]: number[]) =>
      `radial-gradient(500px circle at ${a}px ${b}px, rgb(255 255 255 / 0.07), transparent 60%)`,
  )

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{ background }}
    />
  )
}


export function PortfolioShell() {
  const [ready, setReady] = useState(false)
  const handleDone = useCallback(() => setReady(true), [])

  return (
    <>
      <Loader onDone={handleDone} />
      <CursorGlow />
      <Navbar ready={ready} />
      <main className="relative overflow-x-clip">
        <Hero ready={ready} />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Resume />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

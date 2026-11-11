
'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAME = 'SANAL K.'
const SESSION_KEY = 'sanal-intro-seen'

export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || sessionStorage.getItem(SESSION_KEY)) {
      setVisible(false)
      onDone()
      return
    }

    const duration = 1900
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        sessionStorage.setItem(SESSION_KEY, '1')
        setTimeout(() => setVisible(false), 250)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          style={{ clipPath: 'inset(0 0 0% 0)' }}
        >
          <div
            aria-hidden="true"
            className="absolute size-[420px] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.12),rgb(255_255_255/0.05)_45%,transparent_70%)] blur-3xl"
          />

          <motion.div
            aria-hidden="true"
            className="relative mb-10 size-12 rounded-full border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -top-px left-1/2 size-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
          </motion.div>

          <h1 className="relative flex overflow-hidden text-5xl font-semibold tracking-[0.2em] text-white md:text-7xl" aria-label={NAME}>
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="inline-block text-white"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative mt-4 font-mono text-xs uppercase tracking-[0.4em] text-white/50"
          >
            Full Stack Developer
          </motion.p>

          <div className="relative mt-12 flex w-56 flex-col gap-3">
            <div className="h-px w-full overflow-hidden bg-white/15">
              <div
                className="h-full bg-white transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="self-end font-mono text-xs tabular-nums text-white/50">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

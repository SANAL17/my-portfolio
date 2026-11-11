'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { cn } from '@/lib/utils'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={cn('mb-14 flex max-w-3xl flex-col gap-4 md:mb-20', align === 'center' && 'mx-auto items-center text-center')}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a9b8ff]"
      >
        <span className="size-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--brand)]" aria-hidden="true" />
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp} className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, (v) => `${v * 100}%`)
  const glowY = useTransform(y, (v) => `${v * 100}%`)

  return (
    <motion.div
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse') return
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width)
        y.set((e.clientY - rect.top) / rect.height)
      }}
      onPointerLeave={() => {
        x.set(0.5)
        y.set(0.5)
      }}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={cn('group relative will-change-transform', className)}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY] as never,
            ([gx, gy]: string[]) => `radial-gradient(400px circle at ${gx} ${gy}, rgb(91 124 255 / 0.14), transparent 60%)`,
          ),
        }}
      />
      {children}
    </motion.div>
  )
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const x = useSpring(0, { stiffness: 250, damping: 18 })
  const y = useSpring(0, { stiffness: 250, damping: 18 })
  return (
    <motion.div
      className={cn('inline-flex', className)}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse') return
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}

'use client'

import { useState } from 'react'
import { Anton } from 'next/font/google'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { skills, type SkillCategory } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

const display = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const categories: ('All' | SkillCategory)[] = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
]

const EASE = [0.76, 0, 0.24, 1] as const

/* Letter-by-letter masked reveal */
function AnimatedWord({
  text,
  baseDelay = 0,
  outline = false,
  reduceMotion,
}: {
  text: string
  baseDelay?: number
  outline?: boolean
  reduceMotion: boolean | null
}) {
  return (
    <span className="inline-flex" aria-hidden="true">
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="inline-block overflow-hidden py-[0.04em] pr-[0.015em]"
        >
          <motion.span
            initial={reduceMotion ? false : { y: '115%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.1,
              delay: baseDelay + i * 0.07,
              ease: EASE,
            }}
            whileHover={outline ? { color: '#ffffff' } : { color: '#a3a3a3' }}
            style={
              outline
                ? {
                  color: 'rgba(255,255,255,0)',
                  WebkitTextStroke: '2px #ffffff',
                }
                : { color: '#ffffff' }
            }
            className="inline-block cursor-default transition-colors duration-300"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function Skills() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')
  const reduceMotion = useReducedMotion()

  const filtered =
    active === 'All'
      ? skills
      : skills.filter((skill) => skill.category === active)

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-10 text-white "
    >


      {/* RIGHT EDGE — SCULPTURAL SHELL */}
      <div
        aria-hidden="true"
        className="about-shell absolute -right-[380px] top-[12%] h-[1100px] w-[700px]"
      />

      {/* SUBTLE GRAIN */}
      <div
        aria-hidden="true"
        className="about-shell-grain absolute inset-0"
      />



      <div className="mx-auto max-w-[1500px]">
        {/* TOP INFORMATION */}
        <div className="relative mb-16 md:mb-24">



          <div className="">

            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(3.5rem,12vw,12rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]"
            >
              BEYOND THE
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3"
            >
              <h2 className="text-[clamp(3.5rem,12vw,12rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white/20">
                INTERFACE.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3"
            >
              <h2 className="text-[clamp(3rem,9vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.07em]">
                INTO THE LOGIC.
              </h2>
            </motion.div>

          </div>
        </div>


        {/* SKILLS DIRECTORY HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight md:text-4xl">
              Tools of the trade<span className="text-white/30">.</span>
            </h3>
          </div>

          <motion.span
            key={filtered.length}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] tracking-widest text-white/40"
          >
            {String(filtered.length).padStart(2, '0')} TECHNOLOGIES
          </motion.span>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-wrap gap-x-7 gap-y-4 border-b border-white/15 pb-5"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={cn(
                'group relative pb-2 text-xs uppercase tracking-[0.12em] transition-colors duration-300',
                active === category
                  ? 'text-white'
                  : 'text-white/35 hover:text-white/80'
              )}
            >
              <span className="mr-2 font-mono text-[9px] opacity-40">
                0{index + 1}
              </span>

              {category}

              <motion.span
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-white"
                initial={false}
                animate={{
                  scaleX: active === category ? 1 : 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* ANIMATED TECHNOLOGY COLLECTION */}

        {/* ANIMATED TECHNOLOGY COLLECTION */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => (
              <motion.div
                layout
                key={`${active}-${skill.name}`}
                initial={{
                  opacity: 0,
                  y: 35,
                  filter: 'blur(8px)',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: 'blur(5px)',
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  layout: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: { duration: 0.65 },
                  y: {
                    duration: 0.75,
                    delay: index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  filter: { duration: 0.6 },
                }}
                className="group relative flex items-center gap-5 border-b border-white/[0.13] py-7 transition-colors duration-300 hover:border-white/50 md:py-9"
              >
                {/* INDEX */}
                <span className="font-mono text-[10px] text-white/25">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* TECHNOLOGY ICON */}
                <motion.div
                  className="flex size-12 shrink-0 items-center justify-center"
                  whileHover={{ y: -5, scale: 1.12, rotate: -5 }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 15,
                  }}
                >
                  <skill.icon
                    className="size-9 transition-all duration-500"
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* NAME AND CATEGORY */}
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xl font-semibold tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:text-2xl">
                    {skill.name}
                  </h4>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.17em] text-white/35">
                    {skill.category}
                    {skill.level ? ` / ${skill.level}` : ''}
                  </p>
                </div>

                {/* HOVER ARROW */}
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  className="shrink-0"
                >
                  <ArrowUpRight
                    size={19}
                    className="text-white/20 transition-colors duration-300 group-hover:text-white"
                  />
                </motion.div>

                {/* BOTTOM HOVER LINE */}
                <motion.div
                  className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  )
}
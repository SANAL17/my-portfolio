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
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-28 text-white md:py-40"
    >
      {/* EDITORIAL BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:5px_5px]" />

        <div className="absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1500px]">
        {/* TOP INFORMATION */}
        <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 md:mb-16">
          <span>( 03 ) — Technical Expertise</span>
          <span>Development / 2026</span>
        </div>

        {/* GIANT TECH ARSENAL HEADING */}
        <div className="relative mb-16 md:mb-24">



        
<div className="w-full overflow-visible">
  <h2
    className={cn(
      display.className,
      'w-full whitespace-nowrap',
      'text-[17vw] uppercase leading-[1.15]',
      'tracking-[-0.04em]',
      'origin-left [transform:skewX(-8deg)_scaleX(1.2)_scaleY(1.4)]'
    )}
  >
    TECH ARSENAL.
  </h2>
</div>





          {/* DESCRIPTION */}
          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 md:mt-12 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="max-w-xl text-sm leading-7 text-white/50 md:text-base"
            >
              The technologies, tools and frameworks behind
              every digital experience I build.
            </motion.p>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="font-mono text-[10px] tracking-[0.2em] text-white/40"
            >
              BUILD / CREATE / INNOVATE
            </motion.span>
          </div>

          {/* BOTTOM LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 1.2 }}
            className="mt-10 h-px origin-left bg-white/25"
          />
        </div>

        {/* TECHNOLOGY MARQUEE */}
        <div className="mb-16 overflow-hidden border-y border-white/10 py-5 md:mb-24">
          <motion.div
            animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex w-max items-center gap-8 whitespace-nowrap"
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8">
                {skills.map((skill) => (
                  <div
                    key={`${copy}-${skill.name}`}
                    className="flex items-center gap-8"
                  >
                    <span className="font-serif text-xl italic text-white/65 md:text-2xl">
                      {skill.name}
                    </span>

                    <span className="size-1 rounded-full bg-white/35" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* SKILLS DIRECTORY HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              ( 01 ) — My technical collection
            </p>

            <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight md:text-4xl">
              Tools of the trade<span className="text-white/30">.</span>
            </h3>
          </div>

          <span className="font-mono text-[10px] tracking-widest text-white/40">
            {String(filtered.length).padStart(2, '0')} TECHNOLOGIES
          </span>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-10 flex flex-wrap gap-x-7 gap-y-4 border-b border-white/15 pb-5">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
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

              <span
                className={cn(
                  'absolute bottom-0 left-0 h-px w-full origin-left bg-white transition-transform duration-300',
                  active === category
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                )}
              />
            </button>
          ))}
        </div>

        {/* ANIMATED TECHNOLOGY COLLECTION */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex items-center gap-5 border-b border-white/[0.13] py-7 transition-colors duration-300 hover:border-white/50 md:py-9"
              >
                {/* INDEX */}
                <span className="font-mono text-[10px] text-white/25">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* TECHNOLOGY ICON */}
                <div className="flex size-12 shrink-0 items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
                  <skill.icon
                    className="size-9 transition-all duration-500"
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  />
                </div>

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
                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />

                {/* BOTTOM HOVER LINE */}
                <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* END SECTION */}
        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 md:flex-row md:items-center">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
            END OF TECHNICAL INDEX
          </span>

          <p className="font-serif text-xl italic text-white/55 md:text-2xl">
            Always learning. Always building.
          </p>

          <span className="font-mono text-[10px] text-white/35">
            SANAL K. / DEVELOPER
          </span>
        </div>
      </div>
    </section>
  )
}
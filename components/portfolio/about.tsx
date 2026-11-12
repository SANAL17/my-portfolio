
'use client'


import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Code,
  Sparkle,
} from '@phosphor-icons/react'

import { profile, skills, strengths } from '@/lib/portfolio-data'

import {
  Counter,
  Reveal,
  fadeUp,
  stagger,
} from './motion-primitives'
import Image from 'next/image'
import { useRef } from 'react'
import { Download } from 'lucide-react'

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Client Businesses' },
  { value: 3, suffix: '+', label: 'Business Applications' },
  { text: 'MERN', label: 'Stack Development' },
]



export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001,
  })

  // Background movement
  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['-8%', '8%']
  )

  const backgroundScale = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.08, 1]
  )

  // Portrait parallax
  const portraitY = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['8%', '-8%']
  )

  const portraitRotate = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [1.5, -1.5]
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-x-clip bg-black text-white"
    >



      {/* INTRODUCTION CONTENT */}

      <div className="relative isolate overflow-hidden border-t border-white/15 bg-[#080808]">
        {/* ANIMATED SVG BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">


          <motion.div
            className="about-background absolute inset-[-10%]"
            style={{
              y: backgroundY,
              scale: backgroundScale,
            }}
          >
            <Image
              src="/images/about-flow.svg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-100"
            />
          </motion.div>


          {/* Subtle overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

        </div>




        <div className="relative z-10 mx-auto max-w-[1800px] px-[5%] py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT — PROFESSIONAL INTRODUCTION */}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 70, filter: 'blur(12px)' }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >




              <motion.h3
                initial={reduceMotion ? false : { opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: 0.9,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl font-black uppercase leading-[0.9] md:text-7xl"
              >
                WHO I AM<span className="text-white/25">.</span>
              </motion.h3>



              <p className="mt-8 max-w-xl text-base leading-[1.9] text-white/65 md:text-lg">
                I'm Sanal , a Full Stack Developer with 3 years of
                professional experience building scalable web applications,
                enterprise solutions, and high-performance digital
                experiences. I specialize in creating intuitive user
                interfaces and robust backend systems that deliver
                meaningful business value.
              </p>


           

              {/* WHAT I BRING */}

              <div className="mt-10 border-t border-white/15 pt-6">

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  CORE STRENGTHS
                </p>

                <div className="mt-6 grid grid-cols-2 gap-6">

                  <div>
                    <p className="text-4xl font-black tracking-tight md:text-5xl">
                      3+
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-white/45">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-black tracking-tight md:text-5xl">
                      100+
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-white/45">
                      Client Businesses
                    </p>
                  </div>

                </div>

              </div>

              {/* TECHNOLOGY EXPERTISE */}


              {/* DOWNLOAD RESUME */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/15 pt-7"
              >
                <a
                  href="https://drive.google.com/file/d/11_MFTWzPRQkGp5N9H95A--V8zUHWDWDQ/view?usp=drive_link"
                  download="Sanal-K-Resume.pdf"
                  className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full bg-white px-7 py-4 text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_35px_-12px_rgba(255,255,255,0.4)]"
                >
                  {/* HOVER BACKGROUND */}
                  <span className="absolute inset-0 origin-left scale-x-0 bg-[#d4d4d4] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* BUTTON CONTENT */}
                  <span className="relative z-10 flex items-center gap-3">
                    <Download
                      size={18}
                      strokeWidth={2}
                      className="transition-transform duration-500 group-hover:translate-y-1"
                    />

                    <span className="font-mono text-[11px] font-bold tracking-[0.15em]">
                      DOWNLOAD RESUME
                    </span>
                  </span>

                  <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </a>

                {/* DOCUMENT INFO */}
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/55">
                    CURRICULUM VITAE
                  </span>

                  <span className="font-mono text-[9px] tracking-wider text-white/30">
                    PDF DOCUMENT / LATEST VERSION
                  </span>
                </div>
              </motion.div>


            </motion.div>


            {/* RIGHT — PREMIUM PORTRAIT */}


            <motion.div
              className="relative"
              initial={reduceMotion ? false : { opacity: 0, y: 90, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="group relative mx-auto w-full max-w-[480px]"
                style={{
                  y: portraitY,
                  rotate: portraitRotate,
                }}
              >
                {/* IMAGE FRAME */}

                <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#111111]">

                  <Image
                    src="/images/about-portrait.png"
                    alt="Sanal K. - Full Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-contain object-center grayscale transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  {/* IMAGE GRADIENT */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* TOP LABEL */}

                  <div className="absolute left-5 right-5 top-5 flex justify-between">

                    <span className="font-mono text-[9px] tracking-[0.2em] text-white/70">
                      PROFILE / 001
                    </span>

                    <span className="size-2 rounded-full bg-white" />

                  </div>

                  {/* BOTTOM IMAGE CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/55">
                      THE DEVELOPER
                    </p>

                    <h4 className="mt-2 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                      SANAL K.
                    </h4>

                    <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-4">

                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/65">
                        FULL STACK DEVELOPER
                      </span>

                      <span className="font-mono text-[9px] text-white/65">
                        DUBAI, UAE
                      </span>

                    </div>

                  </div>

                </div>

                {/* IMAGE CAPTION */}

                <div className="mt-4 flex items-center justify-between">

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                    ENGINEERING WITH PURPOSE.
                  </p>

                  <p className="font-mono text-[9px] text-white/35">
                    02 / 05
                  </p>

                </div>

              </motion.div>
            </motion.div>

          </div>


          <div className="my-24 h-px bg-white/15" />

          {/* STATISTICS */}

          <div>

            <div className="mb-12 flex items-center justify-between">

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                EXPERIENCE IN NUMBERS
              </p>

              <Sparkle size={19} />

            </div>


            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.16,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="grid grid-cols-2 gap-y-12 md:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 55,
                      filter: 'blur(8px)',
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="group border-l border-white/20 pl-5 md:pl-8"
                >
                  <motion.dd
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className="text-4xl font-black tracking-[-0.06em] transition-colors duration-500 group-hover:text-white/70 md:text-6xl lg:text-7xl"
                  >
                    {'text' in stat
                      ? stat.text
                      : <Counter to={stat.value!} suffix={stat.suffix} />}
                  </motion.dd>

                  <dt className="mt-4 font-mono text-[9px] uppercase tracking-widest text-white/45 sm:text-[10px]">
                    {stat.label}
                  </dt>
                </motion.div>
              ))}
            </motion.dl>


          </div>

          <div className="my-24 h-px bg-white/15" />

          {/* STRENGTHS */}

          <Reveal>

            <div className="mb-10 flex items-center justify-between">

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                WHAT I BRING
              </p>

              <ArrowUpRight size={19} />

            </div>


            <motion.div
              className="flex flex-wrap gap-3"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {strengths.map((item) => (
                <motion.span
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 25, scale: 0.95 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -5, scale: 1.04 }
                  }
                  className="cursor-default border border-white/20 px-5 py-3 text-xs font-medium text-white/65 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>


          </Reveal>

          {/* TECHNOLOGIES */}





        </div>

      </div>

    </section>
  )
}

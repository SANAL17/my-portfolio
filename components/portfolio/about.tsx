
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
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

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Client Businesses' },
  { value: 3, suffix: '+', label: 'Business Applications' },
  { text: 'MERN', label: 'Stack Development' },
]

function TechMarquee() {
  const row = [...skills, ...skills]

  return (
    <div
      className="relative mt-16 overflow-hidden border-y border-white/15 py-6
      [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
        {row.map((skill, i) => {
          const Icon = skill.icon

          return (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-3 border border-white/15
              bg-white/[0.03] px-6 py-3 text-sm text-white/60
              transition-all duration-300 hover:border-white
              hover:bg-white hover:text-black"
            >
              <Icon
                className="size-4"
                style={{ color: skill.color }}
              />

              <span className="font-mono text-xs tracking-wider">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function About() {

  const sequenceRef = useRef<HTMLDivElement>(null)

  // Track scroll progress through the pinned section
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ['start start', 'end end'],
  })

  // BEYOND THE
  const beyondOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.26, 0.36],
    [0, 1, 1, 0]
  )

  const beyondY = useTransform(
    scrollYProgress,
    [0, 0.08, 0.26, 0.36],
    [50, 0, 0, -40]
  )

  const beyondScale = useTransform(
    scrollYProgress,
    [0, 0.08, 0.26, 0.36],
    [0.96, 1, 1, 1.03]
  )

  // INTERFACE.
  const interfaceOpacity = useTransform(
    scrollYProgress,
    [0.27, 0.39, 0.57, 0.68],
    [0, 1, 1, 0]
  )

  const interfaceY = useTransform(
    scrollYProgress,
    [0.27, 0.39, 0.57, 0.68],
    [50, 0, 0, -40]
  )

  const interfaceScale = useTransform(
    scrollYProgress,
    [0.27, 0.39, 0.57, 0.68],
    [0.96, 1, 1, 1.03]
  )

  // INTO THE LOGIC.
  const logicOpacity = useTransform(
    scrollYProgress,
    [0.60, 0.73, 0.90, 1],
    [0, 1, 1, 1]
  )

  const logicY = useTransform(
    scrollYProgress,
    [0.60, 0.73, 0.90, 1],
    [50, 0, 0, 0]
  )

  const logicScale = useTransform(
    scrollYProgress,
    [0.60, 0.73, 0.90, 1],
    [0.96, 1, 1, 1]
  )

  const headingClass =
    'absolute inset-0 flex items-center justify-center px-4 ' +
    'whitespace-nowrap text-center text-[clamp(2rem,12vw,14rem)] ' +
    'font-black uppercase leading-none tracking-[-0.075em]'
  return (
    <section
      id="about"
      className="relative overflow-x-clip bg-black text-white"
    >

      {/* EDITORIAL INTRO */}


      {/* EDITORIAL SCROLL SEQUENCE */}

      <div
        ref={sequenceRef}
        className="relative h-[300vh]"
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">

          {/* TOP INFORMATION */}

      

          {/* CENTER ANIMATION */}

          <div className="absolute inset-0">

            {/* HEADING 01 */}

            <motion.h2
              style={{
                opacity: beyondOpacity,
                y: beyondY,
              }}
              className={`${headingClass} [transform:scaleY(1.15)]`}
            >
              BEYOND THE
            </motion.h2>

            {/* HEADING 02 */}

            <motion.h2
              style={{
                opacity: interfaceOpacity,
                y: interfaceY,
              }}
              className={`${headingClass} text-white/30`}
            >
              INTERFACE.
            </motion.h2>

            {/* HEADING 03 */}

            <motion.h2
              style={{
                opacity: logicOpacity,
                y: logicY,
              }}
              className={headingClass}
            >
              INTO THE LOGIC.
            </motion.h2>

          </div>

          {/* BOTTOM INFORMATION */}

          <div className="absolute bottom-0 left-[5%] right-[5%] z-20 flex items-center justify-between border-t border-white/20 py-5 md:py-7">

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 md:text-[10px]">
              SANAL K. — FULL STACK DEVELOPER
            </p>

            <motion.div
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.08, 0.9, 1],
                  [0.5, 1, 1, 0.5]
                ),
              }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                SCROLL TO EXPLORE
              </span>

              <ArrowDown size={15} className="text-white/60" />
            </motion.div>

          </div>

        </div>
      </div>



      {/* INTRODUCTION CONTENT */}

      <div className="relative isolate overflow-hidden border-t border-white/15 bg-[#080808]">
        {/* ANIMATED SVG BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

          <div className="about-background absolute inset-[-10%]">
            <Image
              src="/images/about-flow.svg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-100"
            />
          </div>

          {/* Subtle overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

        </div>




        <div className="relative z-10 mx-auto max-w-[1800px] px-[5%] py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT — PROFESSIONAL INTRODUCTION */}
            <Reveal>



              <h3 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                WHO
                {" "}
                I AM<span className="text-white/25">.</span>
              </h3>

              <p className="mt-8 max-w-xl text-base leading-[1.9] text-white/65 md:text-lg">
                I'm Sanal K., a Full Stack Developer with 3+ years
                of professional experience creating scalable web
                applications, enterprise solutions and meaningful
                digital experiences.
              </p>

              {/* WHAT I BUILD */}

              <div className="mt-10 border-t border-white/15 pt-6">

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  WHAT I BUILD
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    'ERP SYSTEMS',
                    'SAAS PLATFORMS',
                    'BUSINESS APPLICATIONS',
                    'WEB APPLICATIONS',
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-white/15 px-4 py-2.5 text-[10px] tracking-wider text-white/75 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>

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

              <div className="mt-10 border-t border-white/15 pt-6">

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  CORE TECHNOLOGIES
                </p>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  React.js · Next.js · TypeScript · Node.js ·
                  Express.js · MongoDB
                </p>

              </div>

            </Reveal>


            {/* RIGHT — PREMIUM PORTRAIT */}

            <Reveal className="relative">

              <div className="group relative mx-auto w-full max-w-[480px]">

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

              </div>

            </Reveal>

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
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-y-12 md:grid-cols-4"
            >

              {stats.map((stat) => (

                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="border-l border-white/20 pl-5 md:pl-8"
                >

                  <dd className="text-4xl font-black tracking-[-0.06em] md:text-6xl lg:text-7xl">

                    {'text' in stat
                      ? stat.text
                      : <Counter to={stat.value!} suffix={stat.suffix} />
                    }

                  </dd>

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

            <div className="flex flex-wrap gap-3">

              {strengths.map((item) => (

                <span
                  key={item}
                  className="border border-white/20 px-5 py-3 text-xs font-medium text-white/65 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  {item}
                </span>

              ))}

            </div>

          </Reveal>

          {/* TECHNOLOGIES */}





        </div>

      </div>

    </section>
  )
}

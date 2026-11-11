'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, CalendarDays, ChevronDown, MapPin } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './motion-primitives'
import Image from 'next/image'
import RibbonGlow from './RibbonGlow'

export function ExperienceSection() {
  const [expandedProjectSections, setExpandedProjectSections] = useState<string[]>([]);
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-28 text-white md:py-36"
    >
      {/* ABSTRACT LINE BACKGROUND */}
      {/* ANIMATED RIBBON BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <RibbonGlow
          background="#000000"
          color1="#FFFFFF"
          color2="#000000"
          speed={35}
          size={100}
          angle={-180}
          hover={70}
          reach={240}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />

        {/* DARK OVERLAY FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* BOTTOM FADE */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="mb-20 md:mb-28">

          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.35em] text-white/45">
            02 / CAREER JOURNEY
          </p>


          <h2 className="bg-gradient-to-r from-white via-[#bdbdbd] to-[#555555] bg-clip-text text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-transparent">
            THE JOURNEY.
          </h2>


          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 md:flex-row md:items-end">

            <p className="max-w-xl text-sm uppercase leading-7 tracking-wider text-white/55 md:text-base">
              Building products. Solving problems.
              Shipping solutions that make a difference.
            </p>

            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              03+ YEARS / DEVELOPMENT
            </span>

          </div>

        </div>




        <ol
          ref={ref}
          className="relative flex flex-col gap-16 pl-8 md:pl-16"
        >
          {/* TIMELINE LINE */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[11px] top-4 w-px bg-white/10 md:left-[19px]"
          >
            <motion.div
              style={{ scaleY }}
              className="h-full w-full origin-top bg-gradient-to-b from-white/80 via-white/30 to-transparent"
            />
          </div>

          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* TIMELINE MARKER */}
              <span
                aria-hidden="true"
                className="absolute -left-8 top-8 flex size-6 items-center justify-center rounded-full border border-white/30 bg-black shadow-[0_0_20px_rgba(255,255,255,0.08)] md:-left-16 md:size-10"
              >
                <span className="size-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              </span>

              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080808]/75 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-500 hover:border-white/25 md:p-9">

                {/* SUBTLE CARD LIGHT */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-32 -top-40 size-96 rounded-full bg-white/[0.035] blur-[100px] transition-opacity duration-700 group-hover:bg-white/[0.07]"
                />

                <div className="relative z-10">

                  {/* COMPANY HEADER */}
                  <header className="flex flex-col justify-between gap-6 border-b border-white/10 pb-7 md:flex-row md:items-start">

                    <div className="flex items-start gap-4">

                      {/* COMPANY INITIAL */}
                      <div className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white p-2 md:size-16">

                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          sizes="64px"
                          className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                        />

                      </div>

                      <div>
                        <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                          EXPERIENCE / 0{idx + 1}
                        </p>

                        <h3 className="text-xl font-bold tracking-tight md:text-3xl">
                          {exp.role}
                        </h3>

                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                        >
                          {exp.company}
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* META INFORMATION */}
                    <div className="flex flex-wrap gap-2 md:flex-col md:items-end">

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-white/65">
                        <CalendarDays className="size-3.5" />
                        {exp.duration}
                      </span>

                      <span className="inline-flex items-center gap-2 px-2 py-1 text-xs text-white/40">
                        <MapPin className="size-3.5" />
                        {exp.location}
                      </span>

                    </div>
                  </header>

                  {/* RESPONSIBILITIES */}
                  <section className="mt-8">

                    <div className="mb-5 flex items-center justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                        ROLE & CONTRIBUTIONS
                      </p>

                      <span className="font-mono text-[10px] text-white/25">
                        0{exp.responsibilities.length} POINTS
                      </span>
                    </div>

                    <ul className="grid gap-4">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={item}
                          className="flex gap-4 text-sm leading-7 text-white/55"
                        >
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-white/70" />
                          {item}
                        </li>
                      ))}
                    </ul>

                  </section>

                  {/* PROJECTS SHOWCASE */}
                  <section className="mt-10 border-t border-white/10 pt-8">

                    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">

                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                          SELECTED WORK
                        </p>

                        <h4 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
                          Projects & Contributions<span className="text-white/30">.</span>
                        </h4>
                      </div>

                      <span className="font-mono text-[10px] text-white/35">
                        {String(exp.projects.length).padStart(2, '0')} PROJECTS
                      </span>

                    </div>


                    <div className="flex flex-col gap-10 md:gap-14">


                      {exp.projects && exp.projects.length > 0 && (() => {
                        const experienceKey = exp.company;
                        const isExpanded = expandedProjectSections.includes(experienceKey);

                        const visibleProjects = isExpanded
                          ? exp.projects
                          : exp.projects.slice(0, 1);

                        const toggleProjects:any = () => {
                          setExpandedProjectSections((prev) =>
                            prev.includes(experienceKey)
                              ? prev.filter((key) => key !== experienceKey)
                              : [...prev, experienceKey]
                          );
                        };

                        return (
                          <div className="mt-10">

                            {/* PROJECT LIST */}
                            <div className="flex flex-col gap-10 md:gap-14">

                              {visibleProjects.map((project, projectIdx) => {
                                const imageLeft = projectIdx % 2 === 0;

                                return (
                                  <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                      duration: 0.7,
                                      delay: 0.1,
                                      ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group/project grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.035] md:grid-cols-2"
                                  >

                                    {/* PROJECT IMAGE */}
                                    <div
                                      className={`relative min-h-[240px] overflow-hidden bg-[#0a0a0a] md:min-h-[340px] ${imageLeft ? "md:order-1" : "md:order-2"
                                        }`}
                                    >
                                      <Image
                                        src={project.image}
                                        alt={`${project.name} project preview`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover/project:scale-105"
                                      />

                                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                                      <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-white/80 backdrop-blur-md">
                                        PROJECT / 0{projectIdx + 1}
                                      </span>
                                    </div>

                                    {/* PROJECT CONTENT */}
                                    <div
                                      className={`flex flex-col justify-center p-6 md:p-9 lg:p-12 ${imageLeft ? "md:order-2" : "md:order-1"
                                        }`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <span className="h-px w-8 bg-white/40" />

                                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                                          {project.category}
                                        </p>
                                      </div>

                                      <h5 className="mt-5 max-w-md text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
                                        {project.name}
                                      </h5>

                                      <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 md:text-base">
                                        {project.description}
                                      </p>

                                      {/* TECHNOLOGIES */}
                                      <div className="mt-7 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                          <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] text-white/60 transition-colors duration-300 hover:border-white/30 hover:text-white"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>

                                      <div className="mt-8 flex items-center border-t border-white/10 pt-5">
                                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                                          Selected Work
                                        </span>
                                      </div>
                                    </div>

                                  </motion.div>
                                );
                              })}

                            </div>

                            {/* VIEW ALL / SHOW LESS */}
                            {exp.projects.length > 1 && (
                              <div className="mt-10 flex justify-center">
                                <button
                                  type="button"
                                  onClick={toggleProjects}
                                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-xs font-medium text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white cursor-pointer"
                                >
                                  {isExpanded ? "Show Less" : "View All Projects"}

                                  <ChevronDown
                                    className={`size-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-y-1"
                                      }`}
                                  />
                                </button>
                              </div>
                            )}

                          </div>
                        );
                      })()}


                    </div>


                  </section>

                  {/* COMPANY TECHNOLOGIES */}
                  <section className="mt-9 border-t border-white/10 pt-7">

                    <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
                      TECHNOLOGY STACK
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/55 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </section>

                </div>
              </article>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  )
}

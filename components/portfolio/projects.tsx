'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Car, ChevronDown, Globe, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal, SectionHeading, TiltCard } from './motion-primitives'

const icons = { layers: Layers, car: Car, globe: Globe }

function ProjectVisual({ project, large }: { project: Project; large?: boolean }) {
  const Icon = icons[project.kind]
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c14]',
        large ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/9]',
      )}
    >
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(91_124_255/0.3),transparent_55%),radial-gradient(circle_at_80%_90%,rgb(139_92_246/0.3),transparent_55%)] transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-6 flex flex-col gap-3 transition-transform duration-700 group-hover:scale-[1.04]">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-3">
          <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03]" />
          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03]" />
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03]" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass flex size-20 items-center justify-center rounded-2xl shadow-[0_0_60px_-10px_var(--brand)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-6">
          <Icon className="size-9 text-white" />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  const [open, setOpen] = useState(featured ?? false)
  const detailsId = `project-details-${index}`

  return (
    <TiltCard max={featured ? 3 : 6} className={cn('glass gradient-border h-full rounded-3xl', featured && 'lg:col-span-2')}>
      <article className={cn('relative z-10 flex h-full flex-col gap-6 p-5 md:p-7', featured && 'lg:grid lg:grid-cols-2 lg:gap-10')}>
        <ProjectVisual project={project} large={featured} />

        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {featured ? 'Featured Project' : `Project 0${index + 1}`}
            </span>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="flex size-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/10">
                  <FaGithub className="size-4" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className={cn('mt-4 text-balance font-semibold tracking-tight', featured ? 'text-3xl md:text-4xl' : 'text-2xl')}>
            {project.name}
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-full bg-linear-to-r from-brand/15 to-brand-2/15 px-3 py-1 text-xs font-medium text-[#c7d0ff]">
                {h}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            {open ? 'Hide details' : 'What I built'}
            <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                id={detailsId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-2.5 overflow-hidden"
              >
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3 pt-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-brand-2" />
                    {d}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
            {project.tech.map((t) => (
              <li key={t} className="font-mono text-xs text-muted-foreground">
                #{t.replace(/\s+/g, '')}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </TiltCard>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected"
          accent="work."
          description="Business platforms built for real users. Most are private client products, so details are shared instead of public links."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className={cn(i === 0 && 'lg:col-span-2')}>
              <ProjectCard project={p} index={i} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

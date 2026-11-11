'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Download, GraduationCap, Layers } from 'lucide-react'
import { achievements, education, experiences, profile, skills, type SkillCategory } from '@/lib/portfolio-data'
import { Magnetic, SectionHeading, fadeUp, stagger } from './motion-primitives'

const groups: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'Tools']

function Divider() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="my-6 h-px origin-left bg-linear-to-r from-brand/60 via-brand-2/30 to-transparent"
    />
  )
}

function CardTitle({ icon: Icon, children }: { icon: typeof Award; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 text-lg font-semibold">
      <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
        <Icon className="size-4 text-brand" />
      </span>
      {children}
    </h3>
  )
}

export function Resume() {
  return (
    <section id="resume" className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Resume"
          title="A digital"
          accent="profile."
          description="An at-a-glance look at my experience, skills, and achievements."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="glass gradient-border flex flex-col rounded-3xl p-7 lg:row-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Professional Summary</p>
            <p className="mt-3 text-2xl font-semibold">{profile.name}</p>
            <p className="text-[#a9b8ff]">{profile.role}</p>
            <Divider />
            <p className="text-pretty leading-relaxed text-muted-foreground">{profile.description}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Experienced in React-based ERP modules, reusable component systems, and REST API integration across billing, inventory, and reporting workflows.
            </p>
            <div className="mt-auto pt-8">
              <Magnetic>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-brand to-brand-2 px-6 font-medium text-white"
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <Download className="relative size-4 transition-transform group-hover:translate-y-0.5" />
                  <span className="relative">Download Resume</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass gradient-border rounded-3xl p-7 lg:col-span-2">
            <CardTitle icon={Briefcase}>Work Experience</CardTitle>
            <Divider />
            <ol className="flex flex-col gap-5">
              {experiences.map((e) => (
                <li key={e.company} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="font-medium">{e.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {e.company} · {e.location}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-muted-foreground">{e.duration}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div variants={fadeUp} className="glass gradient-border rounded-3xl p-7 lg:col-span-2">
            <CardTitle icon={Layers}>Technical Skills</CardTitle>
            <Divider />
            <div className="grid gap-5 sm:grid-cols-2">
              {groups.map((g) => (
                <div key={g}>
                  <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">{g}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {skills
                      .filter((s) => s.category === g)
                      .map((s) => (
                        <li
                          key={s.name}
                          className="inline-flex cursor-default items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs transition-all hover:-translate-y-0.5 hover:border-white/25"
                        >
                          <s.icon aria-hidden="true" className="size-3" style={{ color: s.color }} />
                          {s.name}
                          {s.level && <span className="text-muted-foreground">({s.level})</span>}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass gradient-border rounded-3xl p-7 lg:col-span-3">
            <CardTitle icon={Award}>Key Achievements</CardTitle>
            <Divider />
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>

          {education.length > 0 && (
            <motion.div variants={fadeUp} className="glass gradient-border rounded-3xl p-7 lg:col-span-3">
              <CardTitle icon={GraduationCap}>Education</CardTitle>
              <Divider />
              <ul className="flex flex-col gap-4">
                {education.map((ed) => (
                  <li key={ed.degree} className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <div>
                      <p className="font-medium">{ed.degree}</p>
                      <p className="text-sm text-muted-foreground">{ed.school}</p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{ed.period}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

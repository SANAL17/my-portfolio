'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Layers, Monitor, Server, Webhook } from 'lucide-react'
import { services, type ServiceKey } from '@/lib/portfolio-data'
import { SectionHeading, fadeUp, stagger } from './motion-primitives'

const icons: Record<ServiceKey, typeof Code2> = {
  fullstack: Layers,
  frontend: Monitor,
  backend: Server,
  api: Webhook,
  database: Database,
  responsive: Code2,
}

export function Services() {
  return (
    <section id="services" className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Do" title="Services I" accent="offer." />
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => {
            const Icon = icons[s.key]
            return (
              <motion.li
                key={s.key}
                variants={fadeUp}
                className="glass gradient-border group relative overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-40 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand/25 to-brand-2/25 ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="size-5 text-white" />
                  </span>
                  <span className="font-mono text-sm text-white/20 transition-colors group-hover:text-brand">0{i + 1}</span>
                </div>
                <h3 className="relative mt-8 text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 text-pretty leading-relaxed text-muted-foreground">{s.description}</p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

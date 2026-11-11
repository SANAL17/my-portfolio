'use client'

import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si'

const nodes = [
  { name: 'React.js', role: 'User interface', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', role: 'Runtime', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', role: 'REST API layer', Icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', role: 'Data storage', Icon: SiMongodb, color: '#47A248' },
]

function Connector({ index }: { index: number }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-10 w-px shrink-0 bg-white/10 md:mx-0 md:h-px md:w-auto md:flex-1">
      {[0, 0.9].map((offset) => (
        <span
          key={offset}
          className="flow-dot absolute left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_12px_2px_var(--brand)] md:top-1/2"
          style={{ animationDelay: `${index * 0.3 + offset}s` }}
        />
      ))}
    </div>
  )
}

export function MernFlow() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="glass gradient-border is-active mb-16 rounded-3xl p-6 md:p-10"
    >
      <figcaption className="mb-8 flex flex-col items-center gap-1 text-center md:mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">How a MERN request flows</span>
        <span className="text-lg font-medium">From click to database and back</span>
      </figcaption>
      <ol className="flex flex-col items-stretch md:flex-row md:items-center">
        {nodes.map(({ name, role, Icon, color }, i) => (
          <Fragment key={name}>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0c14] p-4 md:flex-col md:gap-3 md:px-6 md:py-5 md:text-center"
            >
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]"
                style={{ boxShadow: `0 0 30px -6px ${color}88` }}
              >
                <Icon aria-hidden="true" className="size-6" style={{ color }} />
              </span>
              <span className="flex flex-col">
                <span className="font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">{role}</span>
              </span>
            </motion.li>
            {i < nodes.length - 1 && <Connector index={i} />}
          </Fragment>
        ))}
      </ol>
    </motion.figure>
  )
}

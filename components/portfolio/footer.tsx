
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, ArrowUpRight, ArrowUp } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { navItems, profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'Instagram', href: profile.socials.instagram, Icon: FaInstagram },
]

const EASE = [0.22, 1, 0.36, 1] as const

export function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/15 bg-[#050505] px-5 pb-8 pt-24 text-white md:pt-32">

      {/* =================================
          CSS ANIMATED BACKGROUND
      ================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >

        {/* SILVER CURVED FORM */}

        <div className="footer-orbit footer-orbit-one" />

        <div className="footer-orbit footer-orbit-two" />

        {/* AMBIENT LIGHT */}

        <div className="footer-light" />

        {/* GRAIN */}

        <div className="footer-grain" />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/70" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

      

        {/* =================================
            BIG TYPOGRAPHY
        ================================= */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="mb-20"
        >

          <h2 className="text-[clamp(4rem,14vw,14rem)] font-black uppercase leading-[0.75] tracking-[-0.085em]">

            SANAL
        

            <span className="text-white/20">
              .
            </span>

          </h2>


        </motion.div>

        {/* =================================
            SOCIAL LINKS
        ================================= */}

        <div className="grid gap-12 border-t border-white/15 py-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
              CONNECT WITH ME
            </p>

            <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight md:text-3xl">
              FIND ME ONLINE<span className="text-white/30">.</span>
            </h3>

          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">

            {socials.map(({ label, href, Icon }, index) => (

              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: EASE,
                }}
                className="group flex size-12 items-center justify-center border border-white/20 bg-white/[0.025] text-white/55 transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-white hover:text-black md:size-14"
              >

                <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />

              </motion.a>

            ))}

          </div>

        </div>

        {/* =================================
            FOOTER NAVIGATION
        ================================= */}

        <div className="border-t border-white/15 py-12">

          <div className="mb-8 flex items-center justify-between">

            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
              EXPLORE THE PORTFOLIO
            </p>

            <span className="font-mono text-[9px] text-white/25">
              NAVIGATION / 06
            </span>

          </div>

          <nav aria-label="Footer navigation">

            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

              {navItems.map((item, index) => (

                <li key={item.id}>

                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                  >

                    <span className="font-mono text-[9px] text-white/20">
                      0{index + 1}
                    </span>

                    <span>
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </nav>

        </div>

        {/* =================================
            BOTTOM COPYRIGHT
        ================================= */}

        <div className="flex flex-col justify-between gap-6 border-t border-white/20 pt-7 sm:flex-row sm:items-center">

          <div>

            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
              © {new Date().getFullYear()} SANAL K. ALL RIGHTS RESERVED.
            </p>

          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
            {profile.location}
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-3 self-start border border-white/20 px-4 py-3 text-[9px] uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:self-auto"
          >

            BACK TO TOP

            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />

          </a>

        </div>

      </div>

    </footer>
  )
}

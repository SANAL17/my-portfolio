'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Navbar({ ready }: { ready: boolean }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6',
          scrolled
            ? 'border-white/10 bg-[#0a0c14]/70 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-xl'
            : 'hidden',
        )}
      >
        <a href="#home" className="text-lg font-semibold tracking-wide">
          Sanal<span className="text-brand">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'relative block rounded-full px-4 py-2 text-sm transition-colors',
                  active === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105 lg:inline-flex"
        >
          {"Let's talk"}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-16 rounded-3xl border border-white/10 bg-[#0a0c14]/95 p-3 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition-colors hover:bg-white/5',
                      active === item.id ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {item.label}
                    {active === item.id && <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

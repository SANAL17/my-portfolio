
'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Navbar({ ready }: { ready: boolean }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)

  const ticking = useRef(false)

  // SCROLL VISIBILITY
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return

      ticking.current = true

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        setScrolled(currentScrollY > 24)

        // Hide navbar inside hero section
        if (currentScrollY < 100) {
          setVisible(false)
          setOpen(false)
        } else {
          setVisible(true)
        }

        ticking.current = false
      })
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    // ACTIVE SECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -50% 0px',
      },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  // CLOSE MOBILE MENU ON ESCAPE
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: ready && visible ? 0 : -100,
        opacity: ready && visible ? 1 : 0,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        pointerEvents: ready && visible ? 'auto' : 'none',
      }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      {/* NAVBAR */}
      <nav
        aria-label="Primary"
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6',
          scrolled
            ? 'border-white/10 bg-[#0a0c14]/75 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-xl'
            : 'border-white/15 bg-black/30 backdrop-blur-md',
        )}
      >
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-wide"
        >
          Sanal<span className="text-brand">.</span>dev
        </a>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={
                  active === item.id ? 'location' : undefined
                }
                className={cn(
                  'relative block rounded-full px-4 py-2 text-sm transition-colors duration-300',
                  active === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:bg-white/80 lg:inline-flex"
        >
          Let's talk
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'menu'}
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              transition={{ duration: 0.2 }}
            >
              {open ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && visible && (
          <motion.div
            id="mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.96,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.97,
              filter: 'blur(6px)',
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-4 top-16 rounded-3xl border border-white/10 bg-[#0a0c14]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition-all duration-300 hover:bg-white/5',
                      active === item.id
                        ? 'text-white'
                        : 'text-white/45 hover:text-white',
                    )}
                  >
                    {item.label}

                    {active === item.id && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="size-1.5 rounded-full bg-brand"
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* MOBILE CONTACT BUTTON */}
            <div className="mt-3 border-t border-white/10 pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/80"
              >
                Let's talk
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

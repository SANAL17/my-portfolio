
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/lib/portfolio-data'

export function Hero({ ready }: { ready: boolean }) {
  const reduce = useReducedMotion()

  const transition = {
    duration: reduce ? 0 : 1.2,
    ease: [0.22, 1, 0.36, 1] as const,
  }

  return (
    <section
      id="home"
      className="editorial-hero relative isolate min-h-svh w-full overflow-hidden bg-black text-white"
    >
      {/* BRANDING */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={
          ready
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -15 }
        }
        transition={{ duration: 1 }}
        className="absolute left-[3.5%] top-[3%] z-30"
      >
        <motion.a
          href="#home"
          className="block"
          animate={
            reduce ? undefined : { y: [0, -3, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <p className="editorial-brand">{profile.name}</p>
          <p className="editorial-location ">@ {profile.location}</p>
        </motion.a>
      </motion.div>

      {/* CONTACT BUTTON */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={
          ready
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -15 }
        }
        transition={{ duration: 1 }}
        className="absolute right-[3.5%] top-[3%] z-30"
      >
        <motion.a
          href="#contact"
          whileHover={
            reduce ? undefined : {
              scale: 1.06,
              y: -3,
            }
          }
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_0_0_rgba(255,255,255,0)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] lg:inline-flex"
        >
          Let's talk
        </motion.a>
      </motion.div>

      {/* HEADLINE */}

      <div className="absolute inset-x-[3.1%] bottom-[8%] z-10">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={
            ready
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          transition={{
            duration: reduce ? 0 : 0.9,
            delay: 0.15,
          }}
          className="editorial-eyebrow"
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 80 }}
          animate={
            ready
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduce ? 0 : 80 }
          }
          transition={{ ...transition, delay: 0.25 }}
          className="editorial-title"
        >
          FULL STACK
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 80 }}
          animate={
            ready
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduce ? 0 : 80 }
          }
          transition={{ ...transition, delay: 0.4 }}
          className="editorial-title"
        >
          WEB DEVELOPER
        </motion.h1>
      </div>

      {/* DECORATIVE SVG SHAPES */}

      <motion.div
        aria-hidden="true"
        className="editorial-stripe-overlay pointer-events-none absolute inset-0 z-20"
        initial={{ opacity: 0 }}
        animate={
          ready
            ? {
              opacity: 1,
              y: reduce ? 0 : [0, -5, 0],
            }
            : { opacity: 0 }
        }
        transition={{
          opacity: { duration: 1.2, delay: 0.3 },
          y: reduce
            ? { duration: 0 }
            : {
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            },
        }}
      >
        <svg
          viewBox="0 0 1440 1000"
          preserveAspectRatio="none"
          className="editorial-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* UPPER RIGHT CURVED SHAPE */}

          <path
            className="editorial-invert-shape"
            d="
              M 790 -120
              C 700 35, 735 185, 825 295
              C 880 360, 960 410, 1055 475
              C 980 385, 900 270, 875 150
              C 850 45, 900 -55, 1015 -120
              Z
            "
          />

          {/* BOTTOM LEFT SHAPE */}

          <path
            className="editorial-invert-shape"
            d="
              M -100 890
              C -20 900, 30 935, 110 1000
              L -100 1000
              Z
            "
          />

          {/* LARGE FLOWING WHITE STRIPE */}

          <path
            className="editorial-invert-shape"
            d="
              M 320 -150
              C 275 80, 340 255, 485 385
              C 610 495, 790 570, 1000 675
              L 1510 925
              L 1510 1080
              L 965 850
              C 750 755, 560 660, 420 520
              C 285 385, 220 180, 255 -150
              Z
            "
          />

          {/* SMALL DIAGONAL WHITE STRIPE */}

          <path
            className="editorial-invert-shape"
            d="
              M -100 490
              L -100 580
              C 180 710, 450 830, 720 920
              C 850 965, 970 1010, 1030 1050
              L 1190 1050
              C 1050 990, 900 935, 750 875
              C 450 755, 170 630, -100 490
              Z
            "
          />
        </svg>
      </motion.div>
    </section>
  )
}

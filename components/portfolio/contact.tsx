
'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
  XCircle,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import { profile } from '@/lib/portfolio-data'

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


type Status =
  | { type: 'idle' }
  | { type: 'sending' }
  | { type: 'success' }
  | { type: 'error'; message: string }

const channels = [
  {
    label: 'EMAIL',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    number: '01',
    external: false,
  },
  {
    label: 'LINKEDIN',
    value: 'Connect professionally',
    href: profile.socials.linkedin,
    Icon: FaLinkedinIn,
    number: '02',
    external: true,
  },
  {
    label: 'GITHUB',
    value: 'Explore my repositories',
    href: profile.socials.github,
    Icon: FaGithub,
    number: '03',
    external: true,
  },
  {
    label: 'LOCATION',
    value: profile.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
    Icon: MapPin,
    number: '04',
    external: true,
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  const reduceMotion = useReducedMotion()


  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service configuration is missing. Please try again later.',
      })
      console.error('EmailJS configuration missing:', {
        serviceId: Boolean(SERVICE_ID),
        templateId: Boolean(TEMPLATE_ID),
        publicKey: Boolean(PUBLIC_KEY),
      })
      return
    }

    const data = new FormData(form)

    setStatus({ type: 'sending' })

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: String(data.get('name') ?? ''),
          email_id: String(data.get('email') ?? ''),
          message: String(data.get('message') ?? ''),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      )

      console.log('EmailJS success:', response.status, response.text)

      setStatus({ type: 'success' })
      form.reset()
    } catch (error) {
      console.error('EmailJS sending failed:', error)

      const errorMessage =
        error instanceof Error ? error.message : 'Unknown EmailJS error'

      setStatus({
        type: 'error',
        message: `Message could not be sent: ${errorMessage}`,
      })
    }
  }


  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-10 text-white"
    >

      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* HERO HEADING */}

        <div className="mb-20 md:mb-28">



          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="text-[clamp(4rem,13vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]"
          >
            LET'S
            <br />
            <span className="text-white/20">
              CONNECT.
            </span>
          </motion.h2>

          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 md:flex-row md:items-end">

            <p className="max-w-xl text-sm uppercase leading-7 tracking-wider text-white/55 md:text-base">
              Have an interesting project or opportunity?
              Let's create something meaningful together.
            </p>

            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              DUBAI, UAE / AVAILABLE IMMEDIATELY
            </span>

          </div>

        </div>

        {/* =================================
            CONTACT GRID
        ================================= */}

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">

          {/* LEFT SIDE - CONTACT LINKS */}

          <div className="lg:col-span-2">

            <div className="mb-8 flex items-center justify-between">

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                FIND ME HERE
              </p>

              <ArrowUpRight size={18} className="text-white/50" />

            </div>

            <div className="border-t border-white/15">

              {channels.map(
                ({ label, value, href, Icon, number, external }, index) => (

                  <motion.a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    initial={reduceMotion ? false : { opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: reduceMotion ? 0 : index * 0.1,
                      ease: EASE,
                    }}
                    className="group flex items-center gap-4 border-b border-white/15 py-7 transition-all duration-500 hover:bg-white/[0.035] hover:px-3"
                  >

                    <span className="font-mono text-[9px] text-white/25">
                      {number}
                    </span>

                    {/* ICON */}

                    <div className="flex size-12 shrink-0 items-center justify-center border border-white/15 bg-white/[0.025] transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">

                      <Icon size={20} strokeWidth={1.5} />

                    </div>

                    {/* INFORMATION */}

                    <div className="min-w-0 flex-1">

                      <p className="font-mono text-[9px] tracking-[0.2em] text-white/35">
                        {label}
                      </p>

                      <p className="mt-2 truncate text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                        {value}
                      </p>

                    </div>

                    {/* ARROW */}

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />

                  </motion.a>

                ),
              )}

            </div>

            {/* RESPONSE TIME */}

            <div className="mt-10">

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                RESPONSE TIME
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight">
                Usually within 24 hours.
              </p>

            </div>

          </div>

          {/* =================================
              RIGHT SIDE - CONTACT FORM
          ================================= */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative border border-white/15 bg-[#080808]/75 p-6 backdrop-blur-xl md:p-10 lg:col-span-3"
          >

            {/* FORM HEADER */}

            <div className="mb-10 flex items-start justify-between border-b border-white/15 pb-7">

              <div>

                <p className="font-mono text-[9px] tracking-[0.25em] text-white/40">
                  SEND AN ENQUIRY / 001
                </p>

                <h3 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-5xl">
                  START A
                  <br />
                  <span className="text-white/30">
                    CONVERSATION.
                  </span>
                </h3>

              </div>

              <Send
                size={24}
                strokeWidth={1.2}
                className="text-white/45"
              />

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-8 sm:grid-cols-2">

                <label className="flex flex-col gap-3">

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                    YOUR NAME
                  </span>

                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter Name"
                    className="bg-white/10 text-white py-2 px-4 rounded-4xl outline-none text-sm"
                  />

                </label>

                <label className="flex flex-col gap-3">

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                    EMAIL ADDRESS
                  </span>

                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter Email"
                    className="bg-white/10 text-white py-2 px-4 rounded-4xl outline-none text-sm"
                  />

                </label>

              </div>

              {/* MESSAGE */}

              <label className="flex flex-col gap-3">

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                  YOUR MESSAGE
                </span>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your idea, project or opportunity..."
                  className="bg-white/10 text-white py-2 px-4 rounded-xl outline-none  min-h-[170px] text-sm"

                />

              </label>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={status.type === 'sending'}
                className="group relative flex h-14 items-center justify-between overflow-hidden border border-white bg-white px-6 text-black transition-all duration-500 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >

                <span className="font-mono text-xs font-bold uppercase tracking-[0.15em]">

                  {status.type === 'sending'
                    ? 'SENDING MESSAGE...'
                    : 'SEND MESSAGE'}

                </span>

                {status.type === 'sending' ? (

                  <Loader2 size={19} className="animate-spin" />

                ) : (

                  <ArrowUpRight
                    size={21}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                )}

              </button>

              {/* SUCCESS / ERROR */}

              <div aria-live="polite" className="min-h-6">

                <AnimatePresence mode="wait">

                  {status.type === 'success' && (

                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-emerald-400"
                    >

                      <CheckCircle2 size={17} />

                      Message sent successfully. I'll get back to you soon.

                    </motion.p>

                  )}

                  {status.type === 'error' && (

                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-2 text-sm text-red-400"
                    >

                      <XCircle size={17} className="shrink-0" />

                      {status.message}

                    </motion.p>

                  )}

                </AnimatePresence>

              </div>

            </form>

          </motion.div>

        </div>



      </div>

    </section>
  )
}

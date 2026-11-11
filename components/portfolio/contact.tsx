'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, Send, XCircle } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading, fadeUp, stagger } from './motion-primitives'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

type Status = { type: 'idle' } | { type: 'sending' } | { type: 'success' } | { type: 'error'; message: string }

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'in/sanal-k', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'GitHub', value: '@SANAL17', href: profile.socials.github, Icon: FaGithub },
  { label: 'Location', value: profile.location, Icon: MapPin },
]

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-brand/20'

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!isConfigured) {
      setStatus({
        type: 'error',
        message: `The contact form isn't connected yet. Please email me directly at ${profile.email}.`,
      })
      return
    }

    setStatus({ type: 'sending' })
    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name: String(data.get('name') ?? ''),
          email_id: String(data.get('email') ?? ''),
          message: String(data.get('message') ?? ''),
        },
        PUBLIC_KEY!,
      )
      setStatus({ type: 'success' })
      form.reset()
    } catch {
      setStatus({ type: 'error', message: 'Failed to send your message. Please try again or email me directly.' })
    }
  }

  return (
    <section id="contact" className="relative px-5 py-28 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-2/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          accent="something great."
          description="Open to full-time roles and freelance projects. I usually reply within a day."
        />

        <div className="grid gap-5 lg:grid-cols-5">
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
          >
            {channels.map(({ label, value, href, Icon }) => {
              const content = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:border-brand/50 group-hover:shadow-[0_0_24px_-4px_var(--brand)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                    <span className="truncate font-medium">{value}</span>
                  </span>
                  {href && (
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  )}
                </>
              )
              return (
                <motion.li key={label} variants={fadeUp}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="glass gradient-border group flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass group flex items-center gap-4 rounded-2xl p-4">{content}</div>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="glass gradient-border flex flex-col gap-4 rounded-3xl p-6 md:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted-foreground">Name</span>
                <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted-foreground">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea name="message" required rows={6} placeholder="Tell me about your project or role..." className={`${inputClass} resize-none`} />
            </label>

            <button
              type="submit"
              disabled={status.type === 'sending'}
              className="group relative mt-2 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-brand to-brand-2 font-medium text-white transition-all hover:shadow-[0_10px_40px_-10px_var(--brand)] disabled:opacity-70"
            >
              {status.type === 'sending' ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <div aria-live="polite" className="min-h-6">
              <AnimatePresence mode="wait">
                {status.type === 'success' && (
                  <motion.p key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="size-4" />
                    {"Thanks! Your message was sent. I'll get back to you soon."}
                  </motion.p>
                )}
                {status.type === 'error' && (
                  <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-start gap-2 text-sm text-red-400">
                    <XCircle className="mt-0.5 size-4 shrink-0" />
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

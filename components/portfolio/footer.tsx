import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { navItems, profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Instagram', href: profile.socials.instagram, Icon: FaInstagram },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-5 pb-10 pt-20">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/50 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-gradient text-5xl font-semibold tracking-tight md:text-7xl">SANAL K.</p>
            <p className="mt-2 text-muted-foreground">{profile.role}</p>
          </div>
          <ul className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:-translate-y-1 hover:border-brand/50 hover:text-foreground hover:shadow-[0_0_24px_-4px_var(--brand)]"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            {'© '}
            {new Date().getFullYear()} Sanal K. All rights reserved.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}

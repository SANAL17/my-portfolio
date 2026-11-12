
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Anton } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'Sanal.dev',
  description:
    'Full Stack Developer with 3 years of experience building scalable web applications, ERP systems, and modern business solutions.',

  keywords: [
    'Sanal K',
    'Full Stack Developer',
    'React',
    'Next.js',
    'MERN',
    'Dubai',
  ],

  authors: [{ name: 'Sanal K.' }],

  icons: {
    icon: '/images/url-image.png',
    shortcut: '/images/url-image.png',
    apple: '/images/url-image.png',
  },

  openGraph: {
    title: 'Sanal K. — Full Stack Developer',
    description: 'Building digital experiences that make an impact.',
    type: 'website',
    images: ['/images/url-image.png'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sanal K. — Full Stack Developer',
    description: 'Building digital experiences that make an impact.',
    images: ['/images/url-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07080d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className={`${anton.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

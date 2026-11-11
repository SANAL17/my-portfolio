import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})
export const metadata: Metadata = {
  title: 'Sanal K. — Full Stack Developer',
  description:
    'Full Stack Developer with 2+ years of experience building scalable web applications, ERP systems, and modern business solutions with React, Next.js, Node.js and MongoDB.',
  keywords: ['Sanal K', 'Full Stack Developer', 'React', 'Next.js', 'MERN', 'Frontend Developer', 'Dubai'],
  authors: [{ name: 'Sanal K.' }],
  openGraph: {
    title: 'Sanal K. — Full Stack Developer',
    description: 'Building digital experiences that make an impact.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className={`${anton.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

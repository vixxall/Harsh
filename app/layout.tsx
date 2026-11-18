import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'History Explorer — Interactive Indian History',
    template: '%s · History Explorer',
  },
  description:
    'Journey through 5,000 years of Indian history — dynasties, monuments, personalities, battles and freedom, brought alive with interactive maps and 3D scenes.',
  keywords: [
    'Indian history',
    'dynasties',
    'monuments',
    'timeline',
    'Maurya',
    'Mughal',
    'Maratha',
    'freedom movement',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1a1712',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

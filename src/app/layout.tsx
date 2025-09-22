import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MegaPlywood Indonesia - Trusted Plywood Distributor',
    template: '%s | MegaPlywood Indonesia'
  },
  description: 'MegaPlywood Indonesia supplies high-quality plywood, MDF, HPL, veneer, and flooring with competitive pricing. Trusted distributor for construction, interiors, and manufacturing needs.',
  keywords: ['plywood indonesia', 'distributor plywood', 'high quality plywood', 'MDF', 'HPL', 'veneer', 'flooring', 'construction', 'interiors', 'manufacturing'],
  authors: [{ name: 'MegaPlywood Indonesia' }],
  creator: 'MegaPlywood Indonesia',
  publisher: 'MegaPlywood Indonesia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://megaplywood.id',
    siteName: 'MegaPlywood Indonesia',
    title: 'MegaPlywood Indonesia - Trusted Plywood Distributor',
    description: 'MegaPlywood Indonesia supplies high-quality plywood, MDF, HPL, veneer, and flooring with competitive pricing.',
    images: [
      {
        url: '/og-images.png',
        width: 1200,
        height: 630,
        alt: 'MegaPlywood Indonesia - Distributor Plywood',
      },
      {
        url: '/og-images.png',
        width: 1200,
        height: 1200,
        alt: 'MegaPlywood Indonesia - Distributor Plywood (Square)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MegaPlywood Indonesia - Trusted Plywood Distributor',
    description: 'MegaPlywood Indonesia supplies high-quality plywood, MDF, HPL, veneer, and flooring with competitive pricing.',
    images: [
      {
        url: '/og-images.png',
        width: 1200,
        height: 630,
        alt: 'MegaPlywood Indonesia - Distributor Plywood',
      },
      {
        url: '/og-images.png',
        width: 1200,
        height: 1200,
        alt: 'MegaPlywood Indonesia - Distributor Plywood (Square)',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://megaplywood.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
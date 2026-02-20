import type { Metadata } from 'next'
import './globals.css'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Abhinand TK | Full-Stack Developer & Django Expert',
  description: 'Experienced Full-Stack Developer specializing in Django, React, and Next.js. Building scalable, high-performance web applications and AI-integrated solutions.',
  keywords: [
    'Abhinand TK', 
    'Full-Stack Developer', 
    'Django Developer', 
    'React Developer', 
    'Next.js', 
    'Python Developer', 
    'Web Development Portfolio', 
    'Software Engineer India'
  ],
  authors: [{ name: 'Abhinand TK' }],
  creator: 'Abhinand TK',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandtk.com',
    title: 'Abhinand TK | Full-Stack Developer & Django Expert',
    description: 'Expert Full-Stack Development specializing in Django, React, and Next.js. View my projects and experience.',
    siteName: 'Abhinand TK Portfolio',
    images: [
      {
        url: '/images/healers_on_demand.png', // Fallback to a project image as OG image
        width: 1200,
        height: 630,
        alt: 'Abhinand TK Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinand TK | Full-Stack Developer',
    description: 'Building scalable web applications with Django and React.',
    images: ['/images/healers_on_demand.png'],
    creator: '@abhinandtk',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink text-ivory font-sans antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  )
}

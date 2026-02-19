import type { Metadata } from 'next'
import './globals.css'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Abhinand TK | Full-Stack Developer',
  description: 'Full-Stack Developer building scalable, AI-powered web applications with Django and React.',
  keywords: ['fullstack developer', 'django', 'nextjs', 'react', 'portfolio', 'abhinand tk'],
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

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <footer id="contact" className="border-t border-white/5 px-8 md:px-14 pt-16 pb-10">
      {/* Big CTA */}
      <div className="mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-ivory/30 mb-4">Let's build something</p>
        <a
          href="mailto:abhinandtk69@gmail.com"
          className="group inline-flex items-end gap-4"
        >
          <span
            className="font-serif font-light leading-none tracking-tight text-ivory/80 hover:text-ivory transition-colors"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Get in touch
          </span>
          <span className="text-4xl text-ivory/30 group-hover:text-ivory/70 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 mb-2">↗</span>
        </a>
        <div className="mt-2 h-px w-full max-w-2xl bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Footer grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <span className="font-serif text-2xl tracking-widest text-ivory/40">A.TK.</span>
          <p className="text-xs text-ivory/25 font-light mt-3 leading-relaxed max-w-[160px]">
            Full-Stack Developer. React • Next.js • Django • PostgreSQL • Redis
          </p>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-ivory/25 mb-5">Menu</h4>
          <ul className="space-y-3">
            {['Home', 'Work', 'About'].map(item => (
              <li key={item}>
                <Link
                  href={
                    item === 'Home' 
                      ? (isHome ? '#top' : '/') 
                      : item === 'Work' 
                        ? (isHome ? '#work' : '/works') 
                        : (isHome ? '#about' : '/#about')
                  }
                  className="text-sm text-ivory/50 hover:text-ivory transition-colors font-light"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-ivory/25 mb-5">Connect</h4>
          <ul className="space-y-3">
            {[
              { label: 'GitHub', href: 'https://github.com/abhinandtk' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinandtk' },
              { label: 'Email', href: 'mailto:abhinandtk69@gmail.com' },
            ].map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/50 hover:text-ivory transition-colors font-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-ivory/25 mb-5">Status</h4>
            <p className="text-sm text-ivory/50 font-light">Available for Remote Opportunities</p>
          </div>
          <a
            href="#top"
            className="group flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-ivory/25 hover:text-ivory/60 transition-colors mt-8 md:mt-0"
          >
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            Back to top
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="text-[11px] text-ivory/20 tracking-widest">© A.TK. — 2026</p>
        <p className="text-[11px] text-ivory/15 tracking-wide font-light">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-14 py-7 transition-all duration-500',
          (scrolled || !isHome) ? 'bg-ink/95 backdrop-blur-md border-b border-white/5' : ''
        )}
      >
        <Link href="/" className="font-serif text-xl tracking-widest text-ivory opacity-90 hover:opacity-100 transition-opacity">
          A.TK.
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {['Home', 'Work', 'About'].map((item) => (
            <li key={item}>
              <Link
                href={
                  item === 'Home' 
                    ? (isHome ? '#top' : '/') 
                    : item === 'Work' 
                      ? (isHome ? '#work' : '/works') 
                      : (isHome ? '#about' : '/#about')
                }
                className="text-sm font-light tracking-widest text-ivory/60 hover:text-ivory transition-colors uppercase"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={clsx('block w-6 h-px bg-ivory/70 transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={clsx('block w-6 h-px bg-ivory/70 transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('block w-6 h-px bg-ivory/70 transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={clsx(
        'fixed inset-0 z-40 bg-ink/97 backdrop-blur-xl flex flex-col justify-center items-center gap-12 transition-all duration-500',
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        {['Home', 'Work', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={
              item === 'Home' 
                ? (isHome ? '#top' : '/') 
                : item === 'Work' 
                  ? (isHome ? '#work' : '/works') 
                  : item === 'About'
                    ? (isHome ? '#about' : '/#about')
                    : (isHome ? '#contact' : '/#contact')
            }
            onClick={() => setMenuOpen(false)}
            className="font-serif text-5xl italic text-ivory/80 hover:text-ivory transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  )
}

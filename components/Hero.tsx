'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end pt-32 pb-32 md:pb-28 overflow-hidden">
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="hero background"
          fill
          priority
          className="object-cover grayscale opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      {/* Vertical text strip */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        <span className="writing-vertical text-[10px] tracking-[0.3em] text-ivory/20 uppercase font-light">
          Full-Stack Developer
        </span>
        <div className="w-px h-16 bg-ivory/10" />
        <span className="writing-vertical text-[10px] tracking-[0.3em] text-ivory/20 uppercase font-light">
          Django · Next.js · AI
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-14 max-w-6xl">
        <p
          className="text-xs tracking-[0.3em] uppercase text-ivory/40 mb-6 font-light"
          style={{ animation: 'fadeUp 0.8s ease 0.1s both' }}
        >
          Available for opportunities
        </p>
        <h1
          className="font-serif font-light leading-[0.95] tracking-tight mb-8"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            animation: 'fadeUp 0.9s ease 0.25s both',
          }}
        >
          Hey, I'm<br />
          <em className="not-italic text-ivory">Abhinand TK.</em>
        </h1>
        <p
          className="text-base md:text-lg text-ivory/50 font-light max-w-xl leading-relaxed"
          style={{ animation: 'fadeUp 0.9s ease 0.45s both' }}
        >
          Full-Stack Developer building scalable web applications with Django and React. 
          I design and ship production-ready solutions using Django REST Framework, React.js, and Next.js—focused on clean architecture, performance, and real-world impact. 
          I primarily work with PostgreSQL and apply modern development practices using Git and CI/CD workflows, with foundational knowledge of Redis, Celery, and Docker.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap gap-6 mt-12 items-center"
          style={{ animation: 'fadeUp 0.9s ease 0.6s both' }}
        >
          <a
            href="#work"
            className="group flex items-center gap-3 text-sm tracking-widest uppercase text-ivory border border-ivory/20 px-7 py-3.5 hover:bg-ivory hover:text-ink transition-all duration-300"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="text-sm tracking-widest uppercase text-ivory/50 hover:text-ivory transition-colors border-b border-ivory/20 pb-0.5"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  )
}

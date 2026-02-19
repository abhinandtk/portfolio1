'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import clsx from 'clsx'

const photos = [
  {
    src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Working at desk',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Team collaboration',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Code on screen',
    span: 'col-span-1 row-span-1',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="about" className="border-t border-white/5">
      <div
        ref={ref}
        className={clsx(
          'grid grid-cols-1 lg:grid-cols-2 transition-all duration-1000',
          inView ? 'opacity-100' : 'opacity-0'
        )}
      >
        {/* Photo mosaic */}
        <div className="grid grid-cols-2 grid-rows-2 gap-px bg-white/5 h-[480px] lg:h-auto lg:min-h-[500px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={clsx('relative overflow-hidden group', photo.span)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="bg-dim/60 flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="text-xs tracking-[0.3em] uppercase text-ivory/30 mb-8 font-light">
            About
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl font-light italic leading-snug text-ivory/80 mb-10">
            "I believe in writing maintainable code that solves real problems — not just demo projects."
          </blockquote>
          <p className="text-sm text-ivory/40 font-light leading-relaxed mb-10 max-w-sm">
            I’m a full-stack developer focused on building scalable and intelligent web applications. 
            My core expertise lies in combining modern frontend frameworks like React and Next.js with powerful backend systems built using Django and REST APIs.
          </p>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {[
              { label: 'Backend', skills: 'Python, Django, REST APIs, Node.js, JWT, Stripe' },
              { label: 'Frontend', skills: 'React.js, Next.js, Redux, Jotai, TypeScript' },
              { label: 'Learning & Tools', skills: 'AWS, Celery, Redis, Docker, Git, Jest' },
              { label: 'Styling & UI', skills: 'Tailwind CSS, shadcn/ui, MUI, Sass' },
            ].map(item => (
              <div key={item.label} className="border-l border-white/10 pl-4">
                <div className="text-[10px] tracking-widest uppercase text-ivory/30 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-ivory/60 font-light leading-relaxed">
                  {item.skills}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import clsx from 'clsx'

const projects = [
  {
    id: '01',
    name: 'Healers On Demand',
    description: 'Healthcare Appointment and Service Booking Platform with Zoom integration and Stripe payments.',
    tags: ['Django', 'Zoom SDK', 'Stripe', 'MySQL'],
    image: '/images/healers_on_demand.png',
    color: '#000000',
    link: 'https://www.healersondemand.com/',
  },
  {
    id: '02',
    name: 'Trusted Professional Centre',
    description: 'Affiliate & Lead Management Platform with hierarchical commission logic and RBAC.',
    tags: ['Django', 'DRF', 'RBAC', 'MySQL'],
    image: '/images/trusted.png',
    color: '#000000',
    link: 'https://trustedprofessionalcentre.ca/',
  },
  {
    id: '03',
    name: 'Joystick',
    description: 'Learning Management System with course enrollment, quizzes, and personalized dashboards.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'RBAC'],
    image: '/images/joystick.png',
    color: '#000000',
    link: 'https://www.joysticklearning.co.uk/',
  },
  {
    id: '04',
    name: 'Doob',
    description: 'Sports Management & Social Commerce Platform with tournament management and e-commerce shop.',
    tags: ['Next.js', 'Django', 'DRF', 'PostgreSQL'],
    image: '/images/doob.png',
    color: '#000000',
    link: 'https://www.doobapp.com/',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      data-cursor
      className={clsx(
        'group relative overflow-hidden bg-dim transition-all duration-700 border-x border-b border-white/5',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block cursor-none"
      >
        {/* Browser Frame Header */}
        <div className="h-8 bg-subtle/50 border-b border-white/5 flex items-center px-4 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        </div>

        {/* Image */}
        <div className="relative aspect-[21/9] overflow-hidden bg-ink">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Number overlay */}
          <span className="absolute bottom-4 right-6 font-serif text-5xl font-light text-white/5 group-hover:text-white/10 transition-colors select-none">
            {project.id}
          </span>
        </div>

        {/* Info */}
        <div className="p-7 border-t border-white/5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif text-2xl font-light tracking-tight">{project.name}</h3>
            <span className="text-ivory/30 group-hover:text-ivory/70 transition-colors text-lg mt-1">↗</span>
          </div>
          <p className="text-ivory/40 text-sm font-light leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase border border-white/10 px-3 py-1 text-ivory/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}


export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { threshold: 0.1 })

  return (
    <section id="work" className="px-8 md:px-14 py-24 md:py-32">
      {/* Header */}
      <div
        ref={headerRef}
        className={clsx(
          'flex items-baseline gap-4 mb-16 transition-all duration-700',
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        <h2 className="font-serif italic text-base font-light tracking-[0.15em] text-ivory/40 uppercase">
          Selected work
        </h2>
        <span className="text-xs text-ivory/30 border border-white/10 rounded-full px-3 py-0.5">
          (4)
        </span>
        <div className="ml-auto h-px flex-1 max-w-xs bg-white/5" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* See all */}
      <div className="mt-12 flex justify-end">
        <Link
          href="/works"
          className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-ivory/40 hover:text-ivory transition-colors"
        >
          See all projects
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}

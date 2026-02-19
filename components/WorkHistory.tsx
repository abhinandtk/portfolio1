'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/useInView'
import clsx from 'clsx'

const jobs = [
  {
    company: 'Personal & Production Projects',
    role: 'Full-Stack Developer',
    period: '2023 – Present',
    location: 'Remote',
    type: 'Full-Stack',
  },
]

function WorkItem({ job, index }: { job: typeof jobs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      data-cursor
      className={clsx(
        'group border-t border-white/5 py-7 grid grid-cols-2 md:grid-cols-4 gap-4 items-center',
        'hover:pl-3 transition-all duration-400 cursor-none',
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      )}
      style={{ transitionDelay: `${index * 80}ms`, transitionDuration: '600ms' }}
    >
      <div>
        <div className="font-serif text-xl font-light tracking-tight group-hover:text-ivory transition-colors text-ivory/90">
          {job.company}
        </div>
        <div className="text-xs text-ivory/30 mt-1 md:hidden">{job.period}</div>
      </div>

      <div className="text-sm text-ivory/50 font-light">{job.role}</div>

      <div className="hidden md:block text-sm text-ivory/30 text-right">{job.period}</div>

      <div className="hidden md:flex items-center justify-end gap-3">
        <span className="text-xs text-ivory/20 border border-white/8 px-2.5 py-0.5 rounded-full">
          {job.type}
        </span>
        <span className="text-sm text-ivory/25">{job.location}</span>
      </div>
    </div>
  )
}

export default function WorkHistory() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { threshold: 0.1 })

  return (
    <section className="px-8 md:px-14 py-16 md:py-24 border-t border-white/5">
      <div
        ref={headerRef}
        className={clsx(
          'flex items-baseline gap-4 mb-12 transition-all duration-700',
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        <h2 className="font-serif italic text-base font-light tracking-[0.15em] text-ivory/40 uppercase">
          Experience
        </h2>
        <span className="text-xs text-ivory/30 border border-white/10 rounded-full px-3 py-0.5">
          (1)
        </span>
      </div>

      <div>
        {jobs.map((job, i) => (
          <WorkItem key={i} job={job} index={i} />
        ))}
        <div className="border-t border-white/5" />
      </div>
    </section>
  )
}

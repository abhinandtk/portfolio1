'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

const allProjects = [
  {
    title: 'Healers On Demand',
    subtitle: 'Healthcare Appointment and Service Booking Platform',
    description: 'Built a full-stack healthcare booking platform connecting patients with certified wellness professionals.',
    highlights: [
      'Integrated Zoom Video SDK for real-time online consultation sessions.',
      'Implemented secure payments using Stripe API with webhook handling.',
      'Developed a recurring availability engine for weekly appointment slots using background tasks.',
      'Designed dynamic appointment scheduling system with optimized database queries.',
    ],
    tech: ['Django', 'REST APIs', 'Zoom SDK', 'Stripe', 'Cron Jobs', 'MySQL'],
    image: '/images/healers_on_demand.png',
  },
  {
    title: 'Trusted Professional Centre',
    subtitle: 'Affiliate & Lead Management Platform',
    description: 'Built a multi-role affiliate system with hierarchical commission distribution logic and admin-configurable rules.',
    highlights: [
      'Developed a dynamic commission calculation engine.',
      'Implemented secure Role-Based Access Control (RBAC) for multi-level user permissions.',
      'Designed RESTful APIs for lead tracking and commission management.',
      'Optimized relational database models for scalable affiliate hierarchies.',
    ],
    tech: ['Django', 'Django REST Framework', 'RBAC', 'MySQL', 'REST APIs'],
    image: '/images/trusted.png',
  },
  {
    title: 'Joystick',
    subtitle: 'Learning Management System',
    description: 'Developed a role-based Learning Management System (LMS) for students and teachers.',
    highlights: [
      'Implemented course enrollment, assignment submission, and quiz management modules.',
      'Built secure authentication with multi-role access control.',
      'Designed personalized dashboards for tracking progress and academic performance.',
      'Developed RESTful APIs and optimized database queries for course management.',
    ],
    tech: ['Django', 'Django REST Framework', 'Authentication', 'RBAC', 'PostgreSQL'],
    image: '/images/joystick.png',
  },
  {
    title: 'Doob',
    subtitle: 'Sports Management & Social Commerce Platform',
    description: 'Comprehensive full-stack sports web application for managing tournaments and venue bookings with an integrated shop.',
    highlights: [
      'Implemented tournament management system with team registration and match tracking.',
      'Built playground listing and booking module for sports venue management.',
      'Integrated an e-commerce shop for sports items with order handling.',
      'Developed social media features for user interaction and community engagement.',
      'Built responsive UI using Next.js for a seamless cross-device experience.',
    ],
    tech: ['Next.js', 'Django', 'DRF', 'PostgreSQL', 'REST APIs'],
    image: '/images/doob.png',
  },
]

export default function ProjectsPage() {
  return (
    <main className="bg-ink min-h-screen text-ivory selection:bg-ivory selection:text-ink">
      <Cursor />
      <Nav />
      
      <div className="pt-40 pb-20 px-8 md:px-14">
        <header className="max-w-4xl mb-24">
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-8 tracking-tighter">
            Selected <em className="italic">Works</em>
          </h1>
          <p className="text-ivory/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A collection of production-ready applications focusing on clean architecture, 
            complex business logic, and seamless user experiences.
          </p>
        </header>

        <div className="space-y-40">
          {allProjects.map((project, index) => (
            <section key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="relative overflow-hidden bg-subtle group border border-white/5 shadow-2xl">
                {/* Browser Header */}
                <div className="h-7 bg-subtle border-b border-white/5 flex items-center px-4 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="flex flex-col pt-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-4">0{index + 1} / Project</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">{project.title}</h2>
                <h3 className="text-sm tracking-widest uppercase text-ivory/40 mb-8">{project.subtitle}</h3>
                
                <p className="text-ivory/60 font-light leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="w-1 h-1 rounded-full bg-ivory/30 mt-2.5 shrink-0" />
                      <p className="text-sm text-ivory/40 font-light leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] tracking-widest uppercase border border-white/10 px-3 py-1 text-ivory/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-white/5 text-center">
          <p className="text-sm text-ivory/30 mb-8 uppercase tracking-widest">Want to see more?</p>
          <Link 
            href="/#contact" 
            className="font-serif text-4xl md:text-6xl hover:italic transition-all duration-300"
          >
            Let's start a project
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

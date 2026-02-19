import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import WorkHistory from '@/components/WorkHistory'
import About from '@/components/About'
import MarqueeBanner from '@/components/MarqueeBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />
      <Hero />
      <MarqueeBanner />
      <Projects />
      <WorkHistory />
      <About />
      <Footer />
    </main>
  )
}

import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { FloatingNav } from './components/FloatingNav'
import { ScrollProgress } from './components/ScrollProgress'
import { ThemeToggle } from './components/ThemeToggle'
import { MusicToggle } from './components/MusicToggle'
import { MouseGlow } from './components/MouseGlow'
import { GrainTexture } from './components/GrainTexture'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Certifications } from './sections/Certifications'
import { Blog } from './sections/Blog'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-background font-manrope transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <MouseGlow />
        <GrainTexture />
        <ScrollProgress />
        <FloatingNav />
        <MusicToggle />
        <ThemeToggle />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { FloatingNav } from './components/FloatingNav'
import { ScrollProgress } from './components/ScrollProgress'
import { ThemeToggle } from './components/ThemeToggle'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Certifications } from './sections/Certifications'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-background font-manrope transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollProgress />
        <FloatingNav />
        <ThemeToggle />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

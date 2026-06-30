import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { ScrollReveal } from '../components/ScrollReveal'
import { resume } from '../data/resume'

function StatCard({ value, label }: { value: string; label: string }) {
  const isNumeric = /^\d+/.test(value)
  const numericPart = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/^\d+/, '')
  const { count, containerRef } = useCountUp(isNumeric ? numericPart : 0)

  return (
    <div ref={containerRef} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-accent">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="mt-1 text-sm text-text-muted font-medium">{label}</div>
    </div>
  )
}

function ProfileAvatar() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = ((e.clientY - cy) / (rect.height / 2)) * 14
    const y = -((e.clientX - cx) / (rect.width / 2)) * 14
    setTilt({ x, y })
  }

  return (
    <div
      className="relative w-10 h-10 flex-shrink-0 cursor-pointer"
      style={{ perspective: '400px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute -inset-1 rounded-full bg-accent/30"
        animate={{ scale: hovered ? [1, 1.15, 1] : 1, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
      />

      {/* 3D-tilting card */}
      <motion.div
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent/40 shadow-lg"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.12 : 1,
          boxShadow: hovered
            ? '0 8px 24px rgba(194,24,91,0.35)'
            : '0 2px 8px rgba(0,0,0,0.12)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          src="/myportfolio/hs-pic.jpeg"
          alt={resume.name}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About</span>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Pull quote */}
          <ScrollReveal delay={0.1}>
            <div className="lg:sticky lg:top-32">
              <blockquote className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug">
                <span className="text-accent font-serif text-5xl leading-none mr-1">"</span>
                {resume.about.pullQuote}
                <span className="text-accent font-serif text-5xl leading-none ml-1">"</span>
              </blockquote>
              <div className="mt-8 h-px bg-gradient-to-r from-accent/40 to-transparent" />
              <div className="mt-6 flex items-center gap-3">
                <ProfileAvatar />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{resume.name}</p>
                  <p className="text-xs text-text-muted">Brand Strategist</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Narrative */}
          <div className="space-y-6">
            {resume.about.paragraphs.map((para, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <p className="text-text-muted leading-relaxed text-base sm:text-lg">{para}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 pt-12 border-t border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {resume.about.stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

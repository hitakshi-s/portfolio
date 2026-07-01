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
    const clamp = (n: number) => Math.max(-24, Math.min(24, n))
    const x = clamp(((e.clientY - cy) / (rect.height / 2)) * 24)
    const y = clamp(-((e.clientX - cx) / (rect.width / 2)) * 24)
    setTilt({ x, y })
  }

  return (
    <div
      className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] cursor-pointer"
      style={{ perspective: '500px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent/10"
        animate={{ scale: hovered ? 1.02 : 1, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* 3D-tilting card */}
      <motion.div
        className="w-full h-full rounded-[1.75rem] overflow-hidden border-2 border-accent/30 shadow-lg"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.02 : 1,
          boxShadow: hovered
            ? '0 20px 50px rgba(162,28,175,0.35)'
            : '0 4px 14px rgba(0,0,0,0.1)',
        }}
        transition={{ type: 'spring', stiffness: 340, damping: 12 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          src="/portfolio/hs-pic.jpeg"
          alt={resume.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 36%' }}
          draggable={false}
        />
      </motion.div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="pt-24 lg:pt-32 pb-10 lg:pb-14 px-6 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-sm md:text-base font-extrabold uppercase tracking-widest text-accent">About</span>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-8">
          {/* Left, row 1: Pull quote sits above the photo */}
          <ScrollReveal delay={0.1} className="lg:col-start-1 lg:row-start-1">
            <blockquote className="text-2xl sm:text-3xl xl:text-xl font-bold text-text-primary leading-snug xl:whitespace-nowrap">
              <span className="text-accent font-serif text-5xl leading-none mr-1">&ldquo;</span>
              {resume.about.pullQuote}
              <span className="text-accent font-serif text-5xl leading-none ml-1">&rdquo;</span>
            </blockquote>
            <div className="mt-8 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </ScrollReveal>

          {/* Left, row 2: Photo tile */}
          <ScrollReveal delay={0.15} className="lg:col-start-1 lg:row-start-2">
            <div className="lg:sticky lg:top-32">
              <ProfileAvatar />
            </div>
          </ScrollReveal>

          {/* Right, row 2: Narrative — top/bottom edges aligned with the photo */}
          <div className="lg:col-start-2 lg:row-start-2 flex flex-col justify-between">
            {resume.about.paragraphs.map((para, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1}>
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

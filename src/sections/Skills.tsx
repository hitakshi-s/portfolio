import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { PillBadge } from '../components/PillBadge'
import { resume, type SkillCategory } from '../data/resume'

const categoryIcons: Record<string, string> = {
  Strategy: '🎯',
  Execution: '⚡',
  Platforms: '📱',
  'Tools & Tech': '🛠',
  Leadership: '👥',
  Analytics: '📊',
}

function SkillCard({ category, skills, delay }: SkillCategory & { delay: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, hover: false })
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * 10, y: -((e.clientX - r.left) / r.width - 0.5) * 10, hover: true })
  }

  return (
    <ScrollReveal delay={delay}>
      <div style={{ perspective: '800px' }} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0, hover: false })}>
      <motion.div
        className="relative h-full bg-surface/75 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-2xl p-6 group overflow-hidden transition-colors duration-300 hover:border-accent/40 shadow-lg shadow-black/[0.04]"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          y: tilt.hover ? -5 : 0,
          boxShadow: tilt.hover ? '0 12px 32px rgba(162,28,175,0.13)' : '0 1px 3px rgba(0,0,0,0.05)',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Shimmer overlay on hover */}
        {tilt.hover && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(162,28,175,0.06) 50%, transparent 60%)',
              animation: 'shimmer-sweep 0.8s ease forwards',
            }}
          />
        )}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl" aria-hidden="true">
            {categoryIcons[category] ?? '✦'}
          </span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-text-primary">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.04, type: 'spring', stiffness: 300, damping: 20 }}
            >
              <PillBadge label={skill} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </ScrollReveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Expertise"
          title="Skills & Capabilities"
          subtitle="A full-stack brand toolkit — from strategy and content to platforms, analytics, and team leadership."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resume.skills.map((cat, i) => (
            <SkillCard key={cat.category} {...cat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

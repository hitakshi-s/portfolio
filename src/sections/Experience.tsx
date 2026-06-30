import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { PillBadge } from '../components/PillBadge'
import { resume, type Experience as ExperienceType } from '../data/resume'

function ExperienceCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const isLeft = index % 2 === 0
  const [tilt, setTilt] = useState({ x: 0, y: 0, hover: false })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * 8,
      y: -((e.clientX - r.left) / r.width - 0.5) * 8,
      hover: true,
    })
  }

  return (
    <div className={`relative flex gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:items-start`}>
      {/* Card */}
      <ScrollReveal
        delay={index * 0.1}
        className="flex-1 max-w-full lg:max-w-[calc(50%-2rem)]"
      >
        <div style={{ perspective: '900px' }} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0, hover: false })}>
        <motion.div
          className="group bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/30 transition-colors duration-300"
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
            y: tilt.hover ? -5 : 0,
            boxShadow: tilt.hover ? '0 14px 36px rgba(194,24,91,0.12)' : '0 1px 4px rgba(0,0,0,0.06)',
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            {exp.period}
          </span>
          <h3 className="mt-1 text-lg font-bold text-text-primary leading-snug">{exp.role}</h3>
          <div className="mt-0.5 flex items-center gap-2 flex-wrap">
            {exp.companyUrl !== '#' ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline"
              >
                {exp.company}
                <ExternalLink size={12} />
              </a>
            ) : (
              <span className="text-accent font-medium text-sm">{exp.company}</span>
            )}
            <span className="text-text-muted text-xs">· {exp.location}</span>
          </div>

          <p className="mt-4 text-text-muted text-sm leading-relaxed">{exp.narrative}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <PillBadge key={tag} label={tag} />
            ))}
          </div>
        </motion.div>
        </div>
      </ScrollReveal>

      {/* Center timeline dot — desktop only */}
      <div className="hidden lg:flex flex-col items-center px-8 pt-8 flex-shrink-0">
        <motion.div
          className="w-3 h-3 rounded-full bg-accent border-2 border-background ring-2 ring-accent/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', delay: index * 0.1 }}
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1" />
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Career Journey"
          subtitle="Six years of building brands, leading teams, and driving D2C growth across health, wellness, and consumer categories."
        />

        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-14">
            {resume.experience.map((exp, i) => (
              <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

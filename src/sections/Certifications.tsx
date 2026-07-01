import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { resume, type Certification } from '../data/resume'
import { cn } from '../utils/cn'

const issuerColors: Record<string, string> = {
  'IIM Ahmedabad': 'bg-blue-50 text-blue-700 border-blue-200',
  Coursera: 'bg-sky-50 text-sky-700 border-sky-200',
  Amazon: 'bg-amber-50 text-amber-700 border-amber-200',
  Skillephant: 'bg-purple-50 text-purple-700 border-purple-200',
  LearnTube: 'bg-green-50 text-green-700 border-green-200',
  ClickUp: 'bg-teal-50 text-teal-700 border-teal-200',
}

function CertCard({ cert, delay }: { cert: Certification; delay: number }) {
  const colorClass = issuerColors[cert.issuer] ?? 'bg-surface text-text-muted border-border'
  const [tilt, setTilt] = useState({ x: 0, y: 0, hover: false })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * 10,
      y: -((e.clientX - r.left) / r.width - 0.5) * 10,
      hover: true,
    })
  }

  const cardClassName = cn(
    'relative block h-[176px] border rounded-2xl p-5 transition-colors duration-300',
    cert.featured ? 'bg-accent-light border-accent/30' : 'bg-surface border-border',
    cert.link && 'cursor-pointer hover:border-accent/40'
  )
  const cardAnimate = {
    rotateX: tilt.x,
    rotateY: tilt.y,
    y: tilt.hover ? -5 : 0,
    boxShadow: tilt.hover ? '0 14px 36px rgba(162,28,175,0.13)' : '0 1px 4px rgba(0,0,0,0.05)',
  }
  const cardTransition = { type: 'spring' as const, stiffness: 260, damping: 20 }

  const content = (
    <>
      {cert.link && (
        <ExternalLink
          size={13}
          className="absolute top-4 right-4 text-accent transition-opacity duration-200"
          style={{ opacity: tilt.hover ? 1 : 0 }}
        />
      )}
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center',
            colorClass
          )}
        >
          <Award size={14} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={cn(
                'inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border',
                colorClass
              )}
            >
              {cert.issuer}
            </span>
            {cert.featured && (
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-white">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm font-semibold text-text-primary leading-snug line-clamp-4 pr-4">{cert.name}</p>
        </div>
      </div>
    </>
  )

  return (
    <ScrollReveal delay={delay}>
      <div style={{ perspective: '900px' }} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0, hover: false })}>
        {cert.link ? (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClassName}
            animate={cardAnimate}
            transition={cardTransition}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {content}
          </motion.a>
        ) : (
          <motion.div
            className={cardClassName}
            animate={cardAnimate}
            transition={cardTransition}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {content}
          </motion.div>
        )}
      </div>
    </ScrollReveal>
  )
}

export function Certifications() {
  const featured = resume.certifications.filter((c) => c.featured)
  const rest = resume.certifications.filter((c) => !c.featured)

  return (
    <section id="certifications" className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Credentials & Learning"
          subtitle="Continuously upskilling across AI, marketing, and leadership — including a program from IIM Ahmedabad."
        />

        {/* Featured IIM certification */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:max-w-[calc(50%-0.5rem)]">
          {featured.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} delay={i * 0.1} />
          ))}
        </div>

        {/* All other certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} delay={0.2 + i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

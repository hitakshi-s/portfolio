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
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className="h-full bg-surface border border-border rounded-2xl p-6 group hover:border-accent/30 hover:bg-accent-light/20 transition-all duration-300"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
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

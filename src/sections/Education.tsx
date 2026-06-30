import { GraduationCap } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { resume, type Education as EducationType } from '../data/resume'

function EducationCard({ edu, delay }: { edu: EducationType; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="h-full bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-sm transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-accent-light border border-accent/20 flex items-center justify-center mb-4">
          <GraduationCap size={18} className="text-accent" />
        </div>
        <h3 className="text-base font-bold text-text-primary leading-snug">{edu.degree}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
        <p className="mt-1 text-xs text-text-muted">
          {edu.location} · {edu.year}
        </p>
      </div>
    </ScrollReveal>
  )
}

export function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-12 lg:px-24 xl:px-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Education" title="Academic Background" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {resume.education.map((edu, i) => (
            <EducationCard key={edu.institution} edu={edu} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Award } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { resume, type Certification } from '../data/resume'
import { cn } from '../utils/cn'

const issuerColors: Record<string, string> = {
  'IIM Ahmedabad': 'bg-blue-50 text-blue-700 border-blue-200',
  'IIM Bangalore': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Coursera: 'bg-sky-50 text-sky-700 border-sky-200',
  Amazon: 'bg-amber-50 text-amber-700 border-amber-200',
  Skillephant: 'bg-purple-50 text-purple-700 border-purple-200',
  LearnTube: 'bg-green-50 text-green-700 border-green-200',
}

function CertCard({ cert, delay }: { cert: Certification; delay: number }) {
  const colorClass = issuerColors[cert.issuer] ?? 'bg-surface text-text-muted border-border'

  return (
    <ScrollReveal delay={delay}>
      <div
        className={cn(
          'h-full border rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5',
          cert.featured ? 'bg-accent-light border-accent/30' : 'bg-surface border-border'
        )}
      >
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
            <p className="text-sm font-semibold text-text-primary leading-snug">{cert.name}</p>
          </div>
        </div>
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
          subtitle="Continuously upskilling across AI, marketing, and leadership — including programs from IIM Ahmedabad and IIM Bangalore."
        />

        {/* Featured IIM certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

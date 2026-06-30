import { ScrollReveal } from './ScrollReveal'

interface Props {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="mb-16">
      <ScrollReveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-text-muted max-w-xl leading-relaxed">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}

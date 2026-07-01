import { useState } from 'react'
import { Mail, Download, Copy, Check } from 'lucide-react'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { ScrollReveal } from '../components/ScrollReveal'
import { resume } from '../data/resume'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resume.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-base md:text-lg font-bold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight">
            Let's build something{' '}
            <span className="text-accent">great.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Open to brand strategy, social media leadership, and D2C growth roles. Whether you're
            launching a brand or scaling one, let's talk.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail size={16} />
              <span className="max-w-[200px] truncate">{resume.email}</span>
              <span className="flex-shrink-0">
                {copied ? <Check size={14} /> : <Copy size={14} className="opacity-60 group-hover:opacity-100" />}
              </span>
            </button>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
            >
              <LinkedinIcon size={16} />
              LinkedIn Profile
            </a>

            <a
              href="/portfolio/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

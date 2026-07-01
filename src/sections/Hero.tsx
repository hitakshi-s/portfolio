import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Download, Star } from 'lucide-react'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { AnimatedText } from '../components/AnimatedText'
import { resume } from '../data/resume'

const ORBIT_RADIUS = 190

const floatingBadges = [
  { text: 'IIMA Certified', angle: 0, delay: 0 },
  { text: 'Social Media Strategist', angle: 60, delay: 0.5 },
  { text: 'AI Content', angle: 120, delay: 1 },
  { text: 'Influencer Marketing', angle: 180, delay: 0.3 },
  { text: 'D2C Strategy', angle: 240, delay: 0.8 },
  { text: 'Product Marketing', angle: 300, delay: 1.3 },
]

const heroParticles = [
  { left: '12%', top: '22%', delay: 0,   size: 6 },
  { left: '38%', top: '62%', delay: 1.2, size: 4 },
  { left: '55%', top: '18%', delay: 0.5, size: 5 },
  { left: '75%', top: '72%', delay: 1.8, size: 4 },
  { left: '28%', top: '78%', delay: 1.5, size: 5 },
  { left: '88%', top: '38%', delay: 0.3, size: 4 },
]

// Cosmic accent palette — magenta, amber, teal, indigo
const COSMIC = { magenta: '162,28,175', amber: '245,158,11', teal: '45,212,191', indigo: '99,102,241' }

const twinkleStars = [
  { top: '6%', left: '18%', delay: 0,   size: 3, color: COSMIC.magenta },
  { top: '14%', left: '92%', delay: 0.6, size: 2, color: COSMIC.amber },
  { top: '88%', left: '85%', delay: 1.1, size: 3, color: COSMIC.teal },
  { top: '92%', left: '14%', delay: 1.6, size: 2, color: COSMIC.indigo },
  { top: '48%', left: '2%', delay: 0.9, size: 2, color: COSMIC.amber },
  { top: '35%', left: '98%', delay: 1.9, size: 3, color: COSMIC.teal },
]

function MagneticCTA({ href, children, className, download, target, rel }: {
  href: string; children: React.ReactNode; className: string;
  download?: boolean; target?: string; rel?: string;
}) {
  const [off, setOff] = useState({ x: 0, y: 0 })
  const handle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setOff({ x: ((e.clientX - r.left) / r.width - 0.5) * 10, y: ((e.clientY - r.top) / r.height - 0.5) * 10 })
  }
  return (
    <motion.a
      href={href} download={download} target={target} rel={rel}
      animate={{ x: off.x, y: off.y }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      onMouseMove={handle}
      onMouseLeave={() => setOff({ x: 0, y: 0 })}
      className={className}
    >
      {children}
    </motion.a>
  )
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
})

export function Hero() {
  const { scrollY } = useScroll()
  const blob1Y = useTransform(scrollY, [0, 700], [0, -110])
  const blob2Y = useTransform(scrollY, [0, 700], [0, -70])
  const blob3Y = useTransform(scrollY, [0, 700], [0, -50])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background px-6 md:px-12 lg:px-24 xl:px-32"
    >
      {/* Silk mesh gradient — multiple layered blobs that drift independently */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary aurora — breathes + parallax */}
        <motion.div
          className="absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--aurora-1) 0%, transparent 65%)', y: blob1Y }}
          animate={{ scale: [1, 1.1, 0.97, 1], opacity: [0.6, 1, 0.7, 0.6], rotate: [0, 10, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Secondary aurora — breathes + parallax */}
        <motion.div
          className="absolute -bottom-16 -left-24 w-[420px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--aurora-2) 0%, transparent 65%)', y: blob2Y }}
          animate={{ scale: [1.05, 0.95, 1.08, 1.05], opacity: [0.5, 0.85, 0.6, 0.5], rotate: [0, -8, 4, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        {/* Silk layer 1 — drifts center-left */}
        <motion.div
          className="absolute top-1/3 -left-16 w-[320px] h-[320px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(162,28,175,0.07) 0%, transparent 70%)', y: blob3Y }}
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0], scale: [1, 1.12, 0.96, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Silk layer 2 — drifts top-center */}
        <motion.div
          className="absolute -top-10 left-1/3 w-[260px] h-[260px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(233,222,251,0.55) 0%, transparent 70%)' }}
          animate={{ x: [0, -25, 12, 0], y: [0, 18, -12, 0], scale: [0.95, 1.1, 0.98, 0.95], opacity: [0.4, 0.75, 0.5, 0.4] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />
        {/* Silk layer 3 — bottom-right accent */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(162,28,175,0.05) 0%, transparent 70%)' }}
          animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0], scale: [1, 0.9, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        {/* Floating rose particles */}
        {heroParticles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/25"
            style={{
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              animation: `float-drift ${4 + p.delay}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-24 lg:py-0">
        {/* Left: Content */}
        <div>
          <motion.div {...fadeUp(0.2)}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 bg-accent-light rounded-full px-4 py-1.5">
              {resume.headline}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.35)}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="gradient-name">{resume.name.split(' ')[0]}</span>
            <br />
            <span className="text-text-muted font-light">{resume.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.div {...fadeUp(0.5)} className="mt-5 text-xl sm:text-2xl font-semibold text-text-primary">
            <AnimatedText texts={resume.taglines} className="text-accent" />
          </motion.div>

          <motion.p {...fadeUp(0.6)} className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
            {resume.summary}
          </motion.p>

          <motion.div {...fadeUp(0.75)} className="mt-10 flex flex-wrap gap-3">
            <MagneticCTA
              href="/portfolio/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Download size={16} />
              Download Resume
            </MagneticCTA>
            <MagneticCTA
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent-light transition-colors duration-200"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </MagneticCTA>
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center justify-center w-12 h-12 border border-border bg-surface rounded-full hover:border-accent hover:text-accent hover:bg-accent-light text-text-muted transition-all duration-200"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Orbit ring visual + floating skill badges — hidden on mobile */}
        <div className="relative hidden lg:flex items-center justify-center lg:h-[480px]">
          {/* Twinkling stars scattered across the visual — mixed cosmic hues */}
          {twinkleStars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: star.top, left: star.left,
                width: star.size, height: star.size,
                backgroundColor: `rgb(${star.color})`,
                animation: `twinkle ${2.4 + star.delay}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}

          {/* Shooting star streak — crosses periodically, amber-to-magenta comet trail */}
          <motion.div
            className="absolute w-16 h-px rounded-full"
            style={{
              top: '18%', left: '-5%',
              background: `linear-gradient(90deg, transparent, rgb(${COSMIC.amber}), rgb(${COSMIC.magenta}), transparent)`,
              rotate: -22,
            }}
            animate={{ x: [0, 460], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 6.5, ease: 'easeIn' }}
          />

          {/* Outer dashed ring — slow, non-pulsing rotation */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-dashed border-accent/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner dashed ring — opposite direction */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border border-dashed border-accent/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          {/* Orbiting satellite — outer ring, magenta */}
          <motion.div
            className="absolute w-80 h-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: `rgb(${COSMIC.magenta})`, boxShadow: `0 0 10px rgba(${COSMIC.magenta},0.9)` }}
            />
          </motion.div>
          {/* Orbiting satellite — mid orbit, teal, no visible ring line */}
          <motion.div
            className="absolute w-[17rem] h-[17rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: `rgb(${COSMIC.teal})`, boxShadow: `0 0 9px rgba(${COSMIC.teal},0.8)` }}
            />
          </motion.div>
          {/* Orbiting satellite — inner ring, amber, opposite direction */}
          <motion.div
            className="absolute w-56 h-56"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: `rgb(${COSMIC.amber})`, boxShadow: `0 0 8px rgba(${COSMIC.amber},0.7)` }}
            />
          </motion.div>

          {/* Cosmic core — glowing multi-hue star at the center of the orbit */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Ambient multi-color glow */}
            <div
              className="absolute -inset-4 rounded-full blur-xl"
              style={{
                background: `radial-gradient(circle, rgba(${COSMIC.magenta},0.35) 0%, rgba(${COSMIC.indigo},0.18) 45%, transparent 75%)`,
              }}
            />
            {/* Rotating nebula surface */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, rgb(${COSMIC.magenta}), rgb(${COSMIC.indigo}), rgb(${COSMIC.teal}), rgb(${COSMIC.amber}), rgb(${COSMIC.magenta}))`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner glass core with breathing glow */}
            <motion.div
              className="absolute inset-2 rounded-full bg-surface/95 backdrop-blur-sm border border-white/50 flex items-center justify-center"
              animate={{
                boxShadow: [
                  `0 0 16px rgba(${COSMIC.magenta},0.25)`,
                  `0 0 26px rgba(${COSMIC.indigo},0.35)`,
                  `0 0 16px rgba(${COSMIC.magenta},0.25)`,
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Star size={26} className="text-accent" fill="currentColor" fillOpacity={0.15} />
            </motion.div>
          </div>

          {/* Skill badges arranged evenly around the orbit */}
          {floatingBadges.map((badge) => {
            const rad = (badge.angle * Math.PI) / 180
            const x = ORBIT_RADIUS * Math.sin(rad)
            const y = -ORBIT_RADIUS * Math.cos(rad)
            return (
              <div
                key={badge.text}
                className="absolute"
                style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  className="px-3 py-1.5 text-xs font-medium bg-surface/90 backdrop-blur-sm border border-border rounded-full text-text-muted shadow-sm whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { delay: badge.delay + 1.2, duration: 0.5 },
                    y: { duration: 3.5 + badge.delay * 0.3, repeat: Infinity, ease: 'easeInOut', delay: badge.delay },
                  }}
                >
                  {badge.text}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

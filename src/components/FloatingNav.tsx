import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../utils/cn'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const navShadow = useTransform(
    scrollY,
    [0, 300],
    [
      '0 6px 20px rgba(162,28,175,0.10), 0 1px 3px rgba(0,0,0,0.05)',
      '0 14px 42px rgba(162,28,175,0.30), 0 2px 8px rgba(0,0,0,0.12)',
    ]
  )

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop pill nav */}
      <motion.nav
        style={{ boxShadow: navShadow }}
        onMouseLeave={() => setHovered(null)}
        className="hidden md:flex items-center gap-1 bg-surface/85 backdrop-blur-md border border-border rounded-full px-2 py-1.5"
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            onMouseEnter={() => setHovered(item.label)}
            className="relative px-4 py-1.5 text-sm font-medium text-text-muted hover:text-accent rounded-full transition-colors duration-200 cursor-pointer"
          >
            {hovered === item.label && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 bg-accent-light rounded-full"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </motion.nav>

      {/* Mobile hamburger button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-10 h-10 bg-surface/85 backdrop-blur-md border border-border rounded-full shadow-md text-text-primary"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute top-14 left-1/2 -translate-x-1/2 md:hidden',
              'bg-surface/95 backdrop-blur-md border border-border rounded-2xl shadow-lg p-3 w-52'
            )}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-text-muted hover:text-accent hover:bg-accent-light rounded-xl transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

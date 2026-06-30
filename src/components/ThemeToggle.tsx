import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { dark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={
        compact
          ? 'flex items-center justify-center w-8 h-8 rounded-full text-text-muted hover:text-accent hover:bg-accent-light transition-all duration-200 cursor-pointer'
          : 'fixed top-4 right-4 z-[55] flex items-center justify-center w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm border border-border text-text-muted hover:text-accent hover:border-accent hover:bg-accent-light shadow-md transition-all duration-200 cursor-pointer'
      }
    >
      {dark ? <Sun size={compact ? 15 : 17} /> : <Moon size={compact ? 15 : 17} />}
    </button>
  )
}

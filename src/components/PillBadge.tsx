import { cn } from '../utils/cn'

interface Props {
  label: string
  variant?: 'default' | 'accent'
  className?: string
}

export function PillBadge({ label, variant = 'default', className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200',
        variant === 'default' &&
          'bg-surface border-border text-text-muted hover:border-accent hover:text-accent hover:bg-accent-light',
        variant === 'accent' && 'bg-accent-light border-accent/30 text-accent',
        className
      )}
    >
      {label}
    </span>
  )
}

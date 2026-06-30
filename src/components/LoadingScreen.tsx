import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-5xl font-extrabold tracking-tight text-text-primary"
        >
          HS
        </motion.div>
        <motion.div
          className="mt-3 h-0.5 bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mt-4 text-xs tracking-widest uppercase text-text-muted"
        >
          Hitakshi Sharma
        </motion.p>
      </div>
    </motion.div>
  )
}

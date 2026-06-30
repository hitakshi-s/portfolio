import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  texts: string[]
  interval?: number
  className?: string
}

export function AnimatedText({ texts, interval = 2500, className }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span className={className} style={{ display: 'inline-block', minWidth: '1ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          style={{ display: 'inline-block' }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

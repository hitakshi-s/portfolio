import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { firebaseEnabled, loadFirestore } from '../lib/firebase'

const MAX_CLAPS_PER_USER = 50
const FLUSH_DELAY_MS = 600

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`
  return String(n)
}

interface Props {
  slug: string
}

export function ClapButton({ slug }: Props) {
  const [userClaps, setUserClaps] = useState(0)
  const [totalClaps, setTotalClaps] = useState<number | null>(null)
  const [bursts, setBursts] = useState<number[]>([])
  const pendingRef = useRef(0)
  const flushTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const burstIdRef = useRef(0)

  useEffect(() => {
    const stored = Number(localStorage.getItem(`clap:${slug}`)) || 0
    setUserClaps(stored)
  }, [slug])

  useEffect(() => {
    if (!firebaseEnabled) return
    let unsub: (() => void) | undefined
    let cancelled = false

    loadFirestore().then((fs) => {
      if (!fs || cancelled) return
      unsub = fs.onSnapshot(fs.doc(fs.db, 'blogClaps', slug), (snap) => {
        setTotalClaps((snap.data()?.count as number | undefined) ?? 0)
      })
    })

    return () => {
      cancelled = true
      unsub?.()
    }
  }, [slug])

  const flush = useCallback(() => {
    const amount = pendingRef.current
    pendingRef.current = 0
    if (amount <= 0 || !firebaseEnabled) return

    loadFirestore().then((fs) => {
      if (!fs) return
      fs.setDoc(fs.doc(fs.db, 'blogClaps', slug), { count: fs.increment(amount) }, { merge: true }).catch(() => {})
    })
  }, [slug])

  useEffect(() => {
    return () => {
      if (flushTimerRef.current) clearTimeout(flushTimerRef.current)
      flush()
    }
  }, [flush])

  const handleClap = () => {
    if (userClaps >= MAX_CLAPS_PER_USER) return

    const next = userClaps + 1
    setUserClaps(next)
    localStorage.setItem(`clap:${slug}`, String(next))
    setTotalClaps((t) => (t ?? 0) + 1)

    const id = burstIdRef.current++
    setBursts((b) => [...b, id])

    pendingRef.current += 1
    if (flushTimerRef.current) clearTimeout(flushTimerRef.current)
    flushTimerRef.current = setTimeout(flush, FLUSH_DELAY_MS)
  }

  const atCap = userClaps >= MAX_CLAPS_PER_USER
  const displayCount = totalClaps ?? userClaps

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <AnimatePresence>
          {bursts.map((id) => (
            <motion.span
              key={id}
              initial={{ opacity: 1, y: 0, x: 0, scale: 0.8 }}
              animate={{ opacity: 0, y: -36, x: (Math.random() - 0.5) * 24, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              onAnimationComplete={() => setBursts((b) => b.filter((burstId) => burstId !== id))}
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-sm font-bold text-accent"
            >
              +1
            </motion.span>
          ))}
        </AnimatePresence>
        <motion.button
          onClick={handleClap}
          whileTap={{ scale: 0.85 }}
          disabled={atCap}
          aria-label={atCap ? 'Max claps reached for this post' : 'Clap for this post'}
          title={atCap ? "You've clapped the max for this post" : 'Clap for this post'}
          className={`flex items-center justify-center w-12 h-12 rounded-full border text-xl transition-colors duration-200 ${
            userClaps > 0 ? 'bg-accent-light border-accent/40' : 'bg-surface border-border hover:border-accent/40'
          } ${atCap ? 'cursor-default' : 'cursor-pointer'}`}
        >
          👏
        </motion.button>
      </div>
      <div className="text-sm text-text-muted">
        <span className="font-semibold text-text-primary">{formatCount(displayCount)}</span>{' '}
        {displayCount === 1 ? 'clap' : 'claps'}
      </div>
    </div>
  )
}

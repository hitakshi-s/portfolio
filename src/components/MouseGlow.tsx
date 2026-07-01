import { useEffect, useRef } from 'react'

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -500, y: -500 })

  useEffect(() => {
    let raf: number

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX - 200, y: e.clientY - 200 }
    }

    const tick = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[1] will-change-transform hidden md:block"
      style={{
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(162,28,175,0.07) 0%, rgba(162,28,175,0.02) 45%, transparent 70%)',
        top: 0,
        left: 0,
        transition: 'transform 0.12s linear',
      }}
    />
  )
}

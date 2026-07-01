import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setPlaying((p) => !p)
  }

  return (
    <>
      <audio ref={audioRef} src="/portfolio/audio/ambient.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        className="fixed top-4 right-16 z-[55] flex items-center justify-center w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm border border-border text-text-muted hover:text-accent hover:border-accent hover:bg-accent-light shadow-md transition-all duration-200 cursor-pointer"
      >
        {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
      </button>
    </>
  )
}

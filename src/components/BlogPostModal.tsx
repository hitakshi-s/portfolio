import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { BlogPost } from '../data/blog'
import { ClapButton } from './ClapButton'

interface Props {
  post: BlogPost | null
  onClose: () => void
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function BlogPostModal({ post, onClose }: Props) {
  useEffect(() => {
    if (!post) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [post, onClose])

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-post-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm px-4 py-8 sm:py-16"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative w-full max-w-3xl bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-background/80 backdrop-blur-md border border-border text-text-primary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <img src={post.coverImage} alt={post.title} className="w-full aspect-[16/9] object-cover" />

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {formatDate(post.date)} · {post.readTime}
              </span>
              <h2 id="blog-post-title" className="mt-3 text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
                {post.title}
              </h2>
              <p className="mt-3 text-text-muted text-lg leading-relaxed">{post.subtitle}</p>

              <div className="mt-8 space-y-5">
                {post.body.map((block, i) => {
                  switch (block.type) {
                    case 'heading':
                      return (
                        <h3 key={i} className="pt-2 text-xl font-bold text-text-primary">
                          {block.text}
                        </h3>
                      )
                    case 'subheading':
                      return (
                        <h4 key={i} className="font-semibold text-text-primary">
                          {block.text}
                        </h4>
                      )
                    case 'paragraph':
                      return (
                        <p key={i} className="text-text-muted leading-relaxed">
                          {block.text}
                        </p>
                      )
                    case 'list':
                      return (
                        <ul key={i} className="space-y-2 pl-1">
                          {block.items.map((item, j) => (
                            <li key={j} className="flex gap-3 text-text-muted leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    case 'image':
                      return (
                        <figure key={i} className="pt-2">
                          <img src={block.src} alt={block.alt} className="w-full rounded-2xl border border-border" />
                          {block.caption && (
                            <figcaption className="mt-2 text-center text-sm text-text-muted">{block.caption}</figcaption>
                          )}
                        </figure>
                      )
                    default:
                      return null
                  }
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-border flex flex-col items-center gap-3 text-center">
                <p className="text-sm text-text-muted">Enjoyed this post? Give it a clap.</p>
                <ClapButton slug={post.slug} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

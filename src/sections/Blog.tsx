import { useState } from 'react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { BlogPostModal } from '../components/BlogPostModal'
import { blogPosts, type BlogPost } from '../data/blog'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function BlogCard({ post, delay, onRead }: { post: BlogPost; delay: number; onRead: () => void }) {
  return (
    <ScrollReveal delay={delay}>
      <button
        onClick={onRead}
        className="group block w-full text-left bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            {formatDate(post.date)} · {post.readTime}
          </span>
          <h3 className="mt-3 text-xl font-bold text-text-primary leading-snug">{post.title}</h3>
          <p className="mt-3 text-text-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-accent group-hover:underline underline-offset-2">
            Read more →
          </span>
        </div>
      </button>
    </ScrollReveal>
  )
}

export function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  return (
    <section id="blog" className="py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Blog"
          title="Field Notes"
          subtitle="Lessons from building D2C brands — what actually moves the needle, and what doesn't."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 0.1} onRead={() => setActivePost(post)} />
          ))}
        </div>
      </div>

      <BlogPostModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  )
}

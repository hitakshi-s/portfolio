# Hitakshi Sharma Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a premium editorial-style personal portfolio for Hitakshi Sharma (D2C Brand Strategist) at `hitakshi-s.github.io/dimpsportfolio`.

**Architecture:** Single-page React app. All resume content lives in a typed `src/data/resume.ts` file. Sections are independent components under `src/sections/`. Framer Motion handles all scroll-reveal animations. No backend — fully static, deployed via `gh-pages` npm package to GitHub Pages.

**Tech Stack:** React 18, TypeScript, Vite, TailwindCSS v3, Framer Motion, Lucide React, pnpm (fallback: npm), gh-pages

## Global Constraints
- Working directory: `/Users/harshal/dimpsportfolio`
- Base path: `/dimpsportfolio/` — must be set in `vite.config.ts` and every asset path
- Colors: bg `#FAF9F7`, surface `#FFFFFF`, border `#E8E4DF`, text-primary `#1A1410`, text-muted `#6B6560`, accent `#C2185B`, accent-light `#FCE4EC`
- Font: Manrope (Google Fonts) — single typeface, weights 400/500/600/700/800
- No images — all visuals are CSS/SVG/gradient-based
- No invented metrics — achievement-narrative copy only
- Framer Motion: `whileInView`, `once: true`, subtle `opacity + translateY` reveals
- TypeScript strict mode
- GitHub repo: `hitakshi-s/dimpsportfolio` (public) — `hitakshi-s` account already authenticated via `gh` CLI
- Resume PDF source: `/Users/harshal/Desktop/Hitakshi CV 2026 (1).pdf` → copy to `public/resume.pdf`

---

## File Map

```
/Users/harshal/dimpsportfolio/
├── public/
│   ├── favicon.svg          # "HS" initials SVG
│   ├── resume.pdf           # copied from Desktop
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/
│   │   └── resume.ts        # single source of truth for all content
│   ├── utils/
│   │   └── cn.ts            # clsx + tailwind-merge helper
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   └── useCountUp.ts
│   ├── components/
│   │   ├── ScrollReveal.tsx  # framer-motion whileInView wrapper
│   │   ├── AnimatedText.tsx  # rotating tagline crossfade
│   │   ├── PillBadge.tsx     # reusable skill/tag pill
│   │   ├── SectionHeader.tsx # consistent section label + title
│   │   ├── LoadingScreen.tsx # HS initials + sweep line
│   │   ├── FloatingNav.tsx   # pill-shaped sticky nav
│   │   ├── ScrollProgress.tsx # rose progress bar at top
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html               # Google Fonts + SEO meta tags
├── vite.config.ts           # base: '/dimpsportfolio/'
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
└── package.json
```

---

## Task 1: Project Scaffold & Configuration

**Files:**
- Create: `package.json`, `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`, `tsconfig.node.json`
- Modify: `index.html` (add Google Fonts + full SEO meta tags)

- [ ] **Step 1: Scaffold Vite + React + TypeScript project**

```bash
cd /Users/harshal/dimpsportfolio
pnpm create vite . --template react-ts --force
```
When prompted to overwrite existing files, confirm yes (the docs/ folder is untouched).

- [ ] **Step 2: Install all dependencies**

```bash
pnpm install
pnpm add framer-motion lucide-react clsx tailwind-merge
pnpm add -D tailwindcss@3 postcss autoprefixer gh-pages
npx tailwindcss init -p --ts
```

- [ ] **Step 3: Configure vite.config.ts**

Replace the entire file with:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dimpsportfolio/',
})
```

- [ ] **Step 4: Configure tailwind.config.ts**

Replace the entire file with:
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F7',
        surface: '#FFFFFF',
        border: '#E8E4DF',
        'text-primary': '#1A1410',
        'text-muted': '#6B6560',
        accent: '#C2185B',
        'accent-light': '#FCE4EC',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 5: Add deploy script to package.json**

In `package.json`, add to the `"scripts"` object:
```json
"predeploy": "pnpm build",
"deploy": "gh-pages -d dist"
```

- [ ] **Step 6: Replace index.html with full SEO version**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/dimpsportfolio/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hitakshi Sharma — D2C Brand Strategist</title>
    <meta name="description" content="Hitakshi Sharma is a D2C Brand Strategist and Social Media Expert with 6+ years building organic brand presence for health, wellness, and consumer brands in India." />
    <meta name="keywords" content="Hitakshi Sharma, D2C Brand Manager, Social Media Strategist, Digital Marketing, Influencer Marketing, Shopify, Brand Strategy" />
    <meta name="author" content="Hitakshi Sharma" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hitakshi-s.github.io/dimpsportfolio/" />
    <meta property="og:title" content="Hitakshi Sharma — D2C Brand Strategist" />
    <meta property="og:description" content="D2C Brand Strategist with 6+ years building organic brand presence through high-impact campaigns." />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Hitakshi Sharma — D2C Brand Strategist" />
    <meta name="twitter:description" content="D2C Brand Strategist with 6+ years of experience." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Hitakshi Sharma",
      "jobTitle": "D2C Brand Manager & Social Media Strategist",
      "email": "hitakshisharma.business@gmail.com",
      "telephone": "+91-7490945841",
      "url": "https://hitakshi-s.github.io/dimpsportfolio/",
      "sameAs": ["https://www.linkedin.com/in/hitakshisharma"]
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Copy resume PDF to public/**

```bash
cp "/Users/harshal/Desktop/Hitakshi CV 2026 (1).pdf" /Users/harshal/dimpsportfolio/public/resume.pdf
```

- [ ] **Step 8: Verify scaffold**

```bash
cd /Users/harshal/dimpsportfolio && pnpm run dev
```
Expected: Dev server starts at `http://localhost:5173`. Open browser and confirm Vite default page loads.

- [ ] **Step 9: Commit**

```bash
cd /Users/harshal/dimpsportfolio
git init
git add vite.config.ts tailwind.config.ts postcss.config.js package.json index.html public/resume.pdf tsconfig.json tsconfig.node.json
git commit -m "chore: scaffold Vite + React + TS + Tailwind"
```

---

## Task 2: Resume Data Layer

**Files:**
- Create: `src/data/resume.ts`

- [ ] **Step 1: Create src/data/ directory and resume.ts**

```bash
mkdir -p /Users/harshal/dimpsportfolio/src/data
```

- [ ] **Step 2: Write src/data/resume.ts**

```typescript
export interface Stat {
  value: string
  label: string
}

export interface Experience {
  role: string
  company: string
  companyUrl: string
  location: string
  period: string
  narrative: string
  tags: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Certification {
  name: string
  issuer: string
  featured?: boolean
}

export interface Education {
  degree: string
  institution: string
  location: string
  year: string
}

export const resume = {
  name: 'Hitakshi Sharma',
  phone: '+91-7490945841',
  email: 'hitakshisharma.business@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hitakshisharma',
  headline: 'D2C Brand Strategist · 6+ Years',
  taglines: ['Brand Builder', 'Campaign Architect', 'Team Leader', 'D2C Strategist'] as string[],
  summary:
    'D2C professional with 6+ years of experience leading digital growth across social media and content. Skilled in building strong organic brand presence through high-impact campaigns, audience engagement, and scalable strategies aligned with core business goals.',

  about: {
    pullQuote: "I don't just manage social media — I build the brand behind it.",
    paragraphs: [
      "My journey in brand building started on the shop floor — as a Customer Sales Executive, I discovered that great sales isn't about pushing products, it's about telling the right story to the right person. That insight has guided every role since.",
      'At Spectalook, I took that belief to its natural limit: co-developing a D2C brand from the ground up alongside the Co-founder. Four years of end-to-end ownership — from social strategy and Shopify operations to marketplace management on Amazon and Flipkart — taught me that a great brand is a living system, not a campaign.',
      'Today, as a Brand Manager and Social Media Strategist, I partner with D2C and FMCG brands to build that same living presence: organic strategies that scale, influencer programs that convert, and teams that execute with purpose.',
    ],
    stats: [
      { value: '6+', label: 'Years Experience' },
      { value: '5', label: 'Platforms Mastered' },
      { value: '3', label: 'D2C Brands Built' },
      { value: '2', label: 'IIM Certifications' },
    ] as Stat[],
  },

  experience: [
    {
      role: 'Brand Manager & Social Media Strategist',
      company: 'Biodale',
      companyUrl: 'https://biodale.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Dec 2025 — Jul 2026',
      narrative:
        'Owned end-to-end social media strategy, execution, and performance tracking across all brand touchpoints. Led influencer campaigns from onboarding and barter negotiation to scripting and execution. Oversaw Shopify website operations and managed marketplace listings on Amazon and Flipkart. Partnered with 2 FMCG client brands to drive growth through integrated digital and on-store strategies.',
      tags: ['Instagram', 'Shopify', 'Amazon', 'Flipkart', 'Influencer Marketing', 'FMCG'],
    },
    {
      role: 'Team Lead — Senior Social Media Executive',
      company: 'BabyOrgano',
      companyUrl: 'https://www.babyorgano.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Apr 2024 — Jul 2025',
      narrative:
        'Owned social media strategy across Instagram, LinkedIn, Twitter, Pinterest, and Telegram for a fast-growing D2C baby care brand. Created viral campaigns, podcast concepts, and content calendars while managing and training the full social media team. Scripted videos and visual storytelling content, coordinated outdoor shoots and CEO-led D2C panel discussions, and optimised content using AI tools, trend analysis, and user insights.',
      tags: ['Instagram', 'LinkedIn', 'Twitter', 'Pinterest', 'Podcast', 'AI Content', 'Team Lead'],
    },
    {
      role: 'D2C Brand Manager · Digital Marketing Manager',
      company: 'Spectalook',
      companyUrl: 'https://spectalook.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Mar 2020 — Apr 2024',
      narrative:
        'Co-developed the D2C eyewear brand Spectalook with the Co-founder — from zero. Led social media strategy, Shopify website management, and paid advertising on Google and Facebook. Managed three marketplace channels (Amazon, Flipkart, Meesho), handled WhatsApp marketing and lead generation, and oversaw payment and logistics integrations with Razorpay and ShipRocket. Represented the brand at expos and coordinated professional product shoots.',
      tags: ['Shopify', 'Google Ads', 'Facebook Ads', 'Amazon', 'Flipkart', 'Meesho', 'Razorpay', 'ShipRocket'],
    },
    {
      role: 'Customer Sales Executive',
      company: 'Vision Eye Plus',
      companyUrl: '#',
      location: 'Ahmedabad, Gujarat',
      period: 'Aug 2017 — Dec 2019',
      narrative:
        'Conducted front-end customer sales and built long-term client relationships through consistent follow-up and after-sales support. Delivered product knowledge training sessions and developed team capability through structured role plays.',
      tags: ['Sales', 'Customer Engagement', 'Training', 'Client Relations'],
    },
    {
      role: 'Sales Associate',
      company: 'Heet Healthcare',
      companyUrl: 'https://www.heethealthcare.com/',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2019 — Apr 2019',
      narrative:
        'Managed documentation for online healthcare software, handled billing and Excel-based record keeping, and submitted daily sales reports verified by management.',
      tags: ['Healthcare', 'Documentation', 'Sales Reporting'],
    },
  ] as Experience[],

  skills: [
    {
      category: 'Strategy',
      skills: ['Social Media Strategy', 'Campaign Planning', 'Brand Positioning', 'KPI Management', 'Trend Analysis'],
    },
    {
      category: 'Execution',
      skills: ['Content Ideation', 'Influencer Marketing', 'Scripting', 'Event & Shoot Management', 'Community Management'],
    },
    {
      category: 'Platforms',
      skills: ['Instagram', 'LinkedIn', 'Twitter', 'Pinterest', 'Telegram', 'Shopify'],
    },
    {
      category: 'Tools & Tech',
      skills: ['Google Ads', 'Facebook Ads', 'Amazon Seller', 'Razorpay', 'ShipRocket', 'AI Content Tools', 'WhatsApp Marketing'],
    },
    {
      category: 'Leadership',
      skills: ['Team Training', 'Cross-functional Collaboration', 'Client Communication', 'Agency Coordination'],
    },
    {
      category: 'Analytics',
      skills: ['Performance Tracking', 'ROI Reporting', 'Competitor Analysis', 'User Insights'],
    },
  ] as SkillCategory[],

  certifications: [
    { name: 'Leadership Skills', issuer: 'IIM Ahmedabad', featured: true },
    { name: 'AI in Digital and Social Media Marketing', issuer: 'IIM Bangalore', featured: true },
    { name: 'Business Communication, Interpersonal Skills & Time Management', issuer: 'Skillephant' },
    { name: 'Amazon Account Management Services', issuer: 'Amazon' },
    { name: 'Stock Market Introduction', issuer: 'LearnTube' },
    { name: 'Introduction To AI Social Media Mastery', issuer: 'LearnTube' },
    { name: 'Techniques to Write Social Media Content Using ChatGPT', issuer: 'LearnTube' },
    { name: 'Simplifying Social Media Management with AI', issuer: 'LearnTube' },
    { name: 'Creating Social Media Visuals with AI', issuer: 'LearnTube' },
    { name: 'Strategically Build and Engage Your Network on LinkedIn', issuer: 'Coursera' },
  ] as Certification[],

  education: [
    { degree: 'Masters in Commerce', institution: 'Neeldeep Comm. College', location: 'Ahmedabad, Gujarat', year: '2021' },
    { degree: 'Digital Marketing Certification', institution: 'Career Ninja, LearnTube', location: 'Online', year: '2021' },
    { degree: 'Bachelors in Commerce', institution: 'New LJ Comm. College', location: 'Ahmedabad, Gujarat', year: '2019' },
  ] as Education[],
} as const
```

- [ ] **Step 3: Verify TypeScript sees no errors**

```bash
cd /Users/harshal/dimpsportfolio && npx tsc --noEmit
```
Expected: No output (no errors).

- [ ] **Step 4: Commit**

```bash
git add src/data/resume.ts
git commit -m "feat: add typed resume data layer"
```

---

## Task 3: Utilities & Hooks

**Files:**
- Create: `src/utils/cn.ts`, `src/hooks/useScrollProgress.ts`, `src/hooks/useCountUp.ts`

- [ ] **Step 1: Create directories**

```bash
mkdir -p /Users/harshal/dimpsportfolio/src/utils
mkdir -p /Users/harshal/dimpsportfolio/src/hooks
```

- [ ] **Step 2: Write src/utils/cn.ts**

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 3: Write src/hooks/useScrollProgress.ts**

```typescript
import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
```

- [ ] **Step 4: Write src/hooks/useCountUp.ts**

```typescript
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const startTime = performance.now()
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.6 }
    )
    const el = containerRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, containerRef }
}
```

- [ ] **Step 5: Commit**

```bash
git add src/utils/cn.ts src/hooks/useScrollProgress.ts src/hooks/useCountUp.ts
git commit -m "feat: add cn utility and scroll/count-up hooks"
```

---

## Task 4: Global Styles, App Shell & Shared Components

**Files:**
- Modify: `src/index.css`, `src/main.tsx`, `src/App.tsx`
- Create: `src/components/ScrollReveal.tsx`, `src/components/AnimatedText.tsx`, `src/components/PillBadge.tsx`, `src/components/SectionHeader.tsx`

- [ ] **Step 1: Write src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    font-family: 'Manrope', sans-serif;
  }

  body {
    @apply bg-background text-text-primary antialiased;
  }

  * {
    @apply border-border;
  }
}

@layer utilities {
  .section-padding {
    @apply px-6 md:px-12 lg:px-24 xl:px-32;
  }
}
```

- [ ] **Step 2: Write src/main.tsx**

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 3: Write src/App.tsx** (placeholder shell — sections added in later tasks)

```typescript
import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { FloatingNav } from './components/FloatingNav'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Certifications } from './sections/Certifications'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-background font-manrope">
          <ScrollProgress />
          <FloatingNav />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 4: Create src/components/ directory**

```bash
mkdir -p /Users/harshal/dimpsportfolio/src/components
```

- [ ] **Step 5: Write src/components/ScrollReveal.tsx**

```typescript
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export function ScrollReveal({ children, delay = 0, className, y = 24 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 6: Write src/components/AnimatedText.tsx**

```typescript
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
```

- [ ] **Step 7: Write src/components/PillBadge.tsx**

```typescript
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
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors',
        variant === 'default' && 'bg-surface border-border text-text-muted hover:border-accent hover:text-accent hover:bg-accent-light',
        variant === 'accent' && 'bg-accent-light border-accent/30 text-accent',
        className
      )}
    >
      {label}
    </span>
  )
}
```

- [ ] **Step 8: Write src/components/SectionHeader.tsx**

```typescript
import { ScrollReveal } from './ScrollReveal'

interface Props {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="mb-16">
      <ScrollReveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-text-muted max-w-xl">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
```

- [ ] **Step 9: Commit**

```bash
git add src/index.css src/main.tsx src/App.tsx src/components/
git commit -m "feat: add global styles, App shell, and shared UI components"
```

---

## Task 5: Loading Screen

**Files:**
- Create: `src/components/LoadingScreen.tsx`

- [ ] **Step 1: Write src/components/LoadingScreen.tsx**

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LoadingScreen.tsx
git commit -m "feat: add loading screen with HS initials animation"
```

---

## Task 6: ScrollProgress & FloatingNav

**Files:**
- Create: `src/components/ScrollProgress.tsx`, `src/components/FloatingNav.tsx`

- [ ] **Step 1: Write src/components/ScrollProgress.tsx**

```typescript
import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-border">
      <div
        className="h-full bg-accent transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

- [ ] **Step 2: Write src/components/FloatingNav.tsx**

```typescript
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../utils/cn'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function FloatingNav() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        >
          {/* Desktop pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/85 backdrop-blur-md border border-border rounded-full px-2 py-1.5 shadow-md">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-1.5 text-sm font-medium text-text-muted hover:text-accent hover:bg-accent-light rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-10 h-10 bg-white/85 backdrop-blur-md border border-border rounded-full shadow-md text-text-primary"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'absolute top-14 left-1/2 -translate-x-1/2 md:hidden',
                  'bg-white/95 backdrop-blur-md border border-border rounded-2xl shadow-lg p-3 w-48'
                )}
              >
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-2.5 text-sm font-medium text-text-muted hover:text-accent hover:bg-accent-light rounded-xl transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ScrollProgress.tsx src/components/FloatingNav.tsx
git commit -m "feat: add scroll progress bar and floating pill nav"
```

---

## Task 7: Hero Section

**Files:**
- Create: `src/sections/Hero.tsx`
- Create: `src/sections/` directory

- [ ] **Step 1: Create sections directory**

```bash
mkdir -p /Users/harshal/dimpsportfolio/src/sections
```

- [ ] **Step 2: Write src/sections/Hero.tsx**

```typescript
import { motion } from 'framer-motion'
import { Mail, Linkedin, Download } from 'lucide-react'
import { AnimatedText } from '../components/AnimatedText'
import { resume } from '../data/resume'

const floatingBadges = [
  { text: 'IIM Certified', top: '12%', right: '8%', delay: 0 },
  { text: 'Influencer Marketing', top: '32%', right: '-4%', delay: 0.4 },
  { text: 'Shopify Expert', top: '52%', right: '10%', delay: 0.8 },
  { text: 'AI Content', top: '68%', right: '0%', delay: 1.2 },
  { text: 'D2C Strategy', top: '82%', right: '12%', delay: 0.6 },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background section-padding"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, #FCE4EC 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full"
          style={{ background: 'radial-gradient(circle, #FFF8E1 0%, transparent 70%)' }}
          animate={{ scale: [1.05, 1, 1.05], rotate: [0, -6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-0">
        {/* Left: Text content */}
        <div>
          <motion.div {...fadeUp(0.2)}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 bg-accent-light rounded-full px-4 py-1.5">
              {resume.headline}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.35)}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary leading-tight"
          >
            {resume.name.split(' ')[0]}
            <br />
            <span className="text-text-muted font-light">{resume.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.div {...fadeUp(0.5)} className="mt-5 text-xl sm:text-2xl font-semibold text-text-primary">
            <AnimatedText texts={resume.taglines as string[]} className="text-accent" />
          </motion.div>

          <motion.p {...fadeUp(0.6)} className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
            {resume.summary}
          </motion.p>

          <motion.div {...fadeUp(0.75)} className="mt-10 flex flex-wrap gap-3">
            <a
              href="/dimpsportfolio/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center justify-center w-12 h-12 border border-border bg-surface rounded-full hover:border-accent hover:text-accent hover:bg-accent-light text-text-muted transition-all duration-200"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Abstract decorative shape */}
        <div className="relative flex items-center justify-center h-72 lg:h-auto">
          {/* Slow-rotating blob shape */}
          <motion.div
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute inset-0 border-2 border-accent/20 bg-accent-light/50"
              style={{ borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' }}
            />
            <motion.div
              className="absolute inset-6 bg-accent/8"
              style={{ borderRadius: '60% 40% 40% 60% / 60% 60% 40% 40%' }}
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-12 bg-accent/12"
              style={{ borderRadius: '50% 50% 40% 60% / 50% 40% 60% 50%' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Floating skill badges */}
          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.text}
              className="absolute px-3 py-1.5 text-xs font-medium bg-white/90 backdrop-blur-sm border border-border rounded-full text-text-muted shadow-sm whitespace-nowrap"
              style={{ top: badge.top, right: badge.right }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: badge.delay + 1, duration: 0.5 },
                y: { duration: 3.5 + badge.delay * 0.3, repeat: Infinity, ease: 'easeInOut', delay: badge.delay },
              }}
            >
              {badge.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Hero.tsx
git commit -m "feat: add hero section with aurora background and animated taglines"
```

---

## Task 8: About Section

**Files:**
- Create: `src/sections/About.tsx`

- [ ] **Step 1: Write src/sections/About.tsx**

```typescript
import { useCountUp } from '../hooks/useCountUp'
import { ScrollReveal } from '../components/ScrollReveal'
import { resume } from '../data/resume'

function StatCard({ value, label }: { value: string; label: string }) {
  const isNumeric = /^\d+/.test(value)
  const numericPart = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/\d+/, '')
  const { count, containerRef } = useCountUp(isNumeric ? numericPart : 0)

  return (
    <div ref={containerRef} className="text-center">
      <div className="text-3xl font-extrabold text-accent">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="mt-1 text-sm text-text-muted font-medium">{label}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About</span>
        </ScrollReveal>

        {/* Two-column editorial layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Pull quote */}
          <ScrollReveal delay={0.1}>
            <div className="lg:sticky lg:top-32">
              <blockquote className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug">
                <span className="text-accent text-5xl leading-none font-serif mr-1">"</span>
                {resume.about.pullQuote}
                <span className="text-accent text-5xl leading-none font-serif ml-1">"</span>
              </blockquote>
              <div className="mt-8 h-px bg-gradient-to-r from-accent/40 to-transparent" />
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  HS
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{resume.name}</p>
                  <p className="text-xs text-text-muted">Brand Strategist</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Narrative paragraphs */}
          <div className="space-y-6">
            {resume.about.paragraphs.map((para, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <p className="text-text-muted leading-relaxed text-base sm:text-lg">{para}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 pt-12 border-t border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {resume.about.stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/About.tsx
git commit -m "feat: add editorial about section with count-up stats"
```

---

## Task 9: Experience Timeline

**Files:**
- Create: `src/sections/Experience.tsx`

- [ ] **Step 1: Write src/sections/Experience.tsx**

```typescript
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { PillBadge } from '../components/PillBadge'
import { resume, type Experience as ExperienceType } from '../data/resume'

function ExperienceCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
      {/* Desktop: timeline dot + connector (visible on lg+) */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-3 h-3 rounded-full bg-accent border-2 border-background ring-2 ring-accent/30 mt-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring' }}
        />
      </div>

      {/* Card */}
      <ScrollReveal
        delay={index * 0.1}
        className={`flex-1 ${isLeft ? 'lg:text-left' : 'lg:text-right'} max-w-xl`}
      >
        <motion.div
          className="group bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/30 hover:shadow-md transition-all duration-300"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`flex items-start gap-4 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                {exp.period}
              </span>
              <h3 className="mt-1 text-lg font-bold text-text-primary">{exp.role}</h3>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline mt-0.5"
                onClick={(e) => exp.companyUrl === '#' && e.preventDefault()}
              >
                {exp.company}
                {exp.companyUrl !== '#' && <ExternalLink size={12} />}
              </a>
              <span className="text-text-muted text-xs ml-2">· {exp.location}</span>
            </div>
          </div>

          <p className="mt-4 text-text-muted text-sm leading-relaxed">{exp.narrative}</p>

          <div className={`mt-5 flex flex-wrap gap-2 ${isLeft ? '' : 'lg:justify-end'}`}>
            {exp.tags.map((tag) => (
              <PillBadge key={tag} label={tag} />
            ))}
          </div>
        </motion.div>
      </ScrollReveal>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1" />
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Career Journey"
          subtitle="Six years of building brands, leading teams, and driving D2C growth across health, wellness, and consumer categories."
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-12 lg:space-y-16">
            {resume.experience.map((exp, i) => (
              <ExperienceCard key={exp.company + i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Experience.tsx
git commit -m "feat: add alternating experience timeline with animated cards"
```

---

## Task 10: Skills Section

**Files:**
- Create: `src/sections/Skills.tsx`

- [ ] **Step 1: Write src/sections/Skills.tsx**

```typescript
import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { PillBadge } from '../components/PillBadge'
import { resume, type SkillCategory } from '../data/resume'

const categoryIcons: Record<string, string> = {
  Strategy: '🎯',
  Execution: '⚡',
  Platforms: '📱',
  'Tools & Tech': '🛠',
  Leadership: '👥',
  Analytics: '📊',
}

function SkillCard({ category, skills, delay }: SkillCategory & { delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className="h-full bg-surface border border-border rounded-2xl p-6 group hover:border-accent/30 hover:bg-accent-light/20 transition-all duration-300"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl" aria-hidden="true">{categoryIcons[category] ?? '✦'}</span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-text-primary">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.05, type: 'spring', stiffness: 300 }}
            >
              <PillBadge label={skill} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Expertise"
          title="Skills & Capabilities"
          subtitle="A full-stack brand toolkit — from strategy and content to platforms, analytics, and team leadership."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resume.skills.map((cat, i) => (
            <SkillCard key={cat.category} {...cat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Skills.tsx
git commit -m "feat: add animated skills grid with 6 categories"
```

---

## Task 11: Certifications & Education Sections

**Files:**
- Create: `src/sections/Certifications.tsx`, `src/sections/Education.tsx`

- [ ] **Step 1: Write src/sections/Certifications.tsx**

```typescript
import { Award } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { resume, type Certification } from '../data/resume'
import { cn } from '../utils/cn'

const issuerColors: Record<string, string> = {
  'IIM Ahmedabad': 'bg-blue-50 text-blue-700 border-blue-200',
  'IIM Bangalore': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Coursera': 'bg-sky-50 text-sky-700 border-sky-200',
  'Amazon': 'bg-amber-50 text-amber-700 border-amber-200',
  'Skillephant': 'bg-purple-50 text-purple-700 border-purple-200',
  'LearnTube': 'bg-green-50 text-green-700 border-green-200',
}

function CertCard({ cert, delay }: { cert: Certification; delay: number }) {
  const colorClass = issuerColors[cert.issuer] ?? 'bg-surface text-text-muted border-border'

  return (
    <ScrollReveal delay={delay}>
      <div
        className={cn(
          'h-full border rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5',
          cert.featured
            ? 'bg-accent-light border-accent/30 col-span-1'
            : 'bg-surface border-border'
        )}
      >
        <div className="flex items-start gap-3">
          <div className={cn('flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center', colorClass)}>
            <Award size={14} />
          </div>
          <div>
            <span className={cn('inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2', colorClass)}>
              {cert.issuer}
            </span>
            {cert.featured && (
              <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-white">
                Featured
              </span>
            )}
            <p className="text-sm font-semibold text-text-primary leading-snug">{cert.name}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function Certifications() {
  const featured = resume.certifications.filter((c) => c.featured)
  const rest = resume.certifications.filter((c) => !c.featured)

  return (
    <section id="certifications" className="py-24 lg:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Credentials & Learning"
          subtitle="Continuously upskilling across AI, marketing, and leadership — including programs from IIM Ahmedabad and IIM Bangalore."
        />

        {/* Featured IIM certs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {featured.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} delay={i * 0.1} />
          ))}
        </div>

        {/* Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} delay={0.2 + i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write src/sections/Education.tsx**

```typescript
import { GraduationCap } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeader } from '../components/SectionHeader'
import { resume, type Education as EducationType } from '../data/resume'

function EducationCard({ edu, delay }: { edu: EducationType; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="h-full bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-sm transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-accent-light border border-accent/20 flex items-center justify-center mb-4">
          <GraduationCap size={18} className="text-accent" />
        </div>
        <h3 className="text-base font-bold text-text-primary leading-snug">{edu.degree}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
        <p className="mt-1 text-xs text-text-muted">{edu.location} · {edu.year}</p>
      </div>
    </ScrollReveal>
  )
}

export function Education() {
  return (
    <section id="education" className="py-16 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Education" title="Academic Background" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {resume.education.map((edu, i) => (
            <EducationCard key={edu.institution} edu={edu} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Certifications.tsx src/sections/Education.tsx
git commit -m "feat: add certifications grid and education section"
```

---

## Task 12: Contact Section & Footer

**Files:**
- Create: `src/sections/Contact.tsx`, `src/components/Footer.tsx`

- [ ] **Step 1: Write src/sections/Contact.tsx**

```typescript
import { useState } from 'react'
import { Mail, Linkedin, Download, Copy, Check } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { resume } from '../data/resume'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resume.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Get in Touch</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight">
            Let's build something{' '}
            <span className="text-accent">great.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Open to brand strategy, social media leadership, and D2C growth roles. Whether you're launching a brand or scaling one, let's talk.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {resume.email}
              <span className="ml-1">
                {copied ? <Check size={14} /> : <Copy size={14} className="opacity-60 group-hover:opacity-100" />}
              </span>
            </button>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
            >
              <Linkedin size={16} />
              LinkedIn Profile
            </a>

            <a
              href="/dimpsportfolio/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write src/components/Footer.tsx**

```typescript
export function Footer() {
  return (
    <footer className="py-8 section-padding border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>
          <span className="font-semibold text-text-primary">Hitakshi Sharma</span>
          <span className="mx-2 text-accent">·</span>
          Brand &amp; Growth Strategist
          <span className="mx-2 text-accent">·</span>
          2026
        </p>
        <p>Built with React &amp; Framer Motion</p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Contact.tsx src/components/Footer.tsx
git commit -m "feat: add contact section with copy-email and footer"
```

---

## Task 13: SEO Assets & Favicon

**Files:**
- Create: `public/favicon.svg`, `public/robots.txt`, `public/sitemap.xml`

- [ ] **Step 1: Write public/favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#C2185B"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="white">HS</text>
</svg>
```

- [ ] **Step 2: Write public/robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://hitakshi-s.github.io/dimpsportfolio/sitemap.xml
```

- [ ] **Step 3: Write public/sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hitakshi-s.github.io/dimpsportfolio/</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 4: Commit**

```bash
git add public/favicon.svg public/robots.txt public/sitemap.xml
git commit -m "feat: add favicon, robots.txt, and sitemap"
```

---

## Task 14: Build Verification

**Files:** No new files — fix any TypeScript or lint errors.

- [ ] **Step 1: Run TypeScript check**

```bash
cd /Users/harshal/dimpsportfolio && npx tsc --noEmit
```
Expected: No output (zero errors). If errors appear, fix them before proceeding.

- [ ] **Step 2: Run production build**

```bash
pnpm build
```
Expected: Output ending with `✓ built in ...` and a `dist/` directory created. Fix any errors before proceeding.

- [ ] **Step 3: Preview the production build locally**

```bash
pnpm preview
```
Expected: Server starts at `http://localhost:4173/dimpsportfolio/`. Open in browser and verify:
- Loading screen ("HS") appears and fades
- Hero section renders with name, taglines rotating, aurora background visible
- Floating nav appears after scrolling past hero
- Rose progress bar fills at top
- All sections render without white boxes or missing content
- Contact email copy button works
- Resume download link resolves (check Network tab — should be 200 or 304, not 404)

- [ ] **Step 4: Commit any fixes made during verification**

```bash
git add -A && git commit -m "fix: resolve build errors and verify production output"
```
(Only run this step if fixes were needed.)

---

## Task 15: GitHub Repo Creation & Deployment

- [ ] **Step 1: Create the GitHub repository**

```bash
gh repo create hitakshi-s/dimpsportfolio --public --description "Hitakshi Sharma — D2C Brand Strategist Portfolio"
```
Expected: Output shows repo URL `https://github.com/hitakshi-s/dimpsportfolio`.

- [ ] **Step 2: Add remote and push main branch**

```bash
git remote add origin https://github.com/hitakshi-s/dimpsportfolio.git
git branch -M main
git push -u origin main
```
Expected: All commits pushed successfully.

- [ ] **Step 3: Deploy to GitHub Pages**

```bash
pnpm run deploy
```
This runs `pnpm build` then `gh-pages -d dist`. Expected: Output ending with `Published`.

- [ ] **Step 4: Enable GitHub Pages on gh-pages branch**

```bash
gh api repos/hitakshi-s/dimpsportfolio/pages \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -f "source[branch]=gh-pages" \
  -f "source[path]=/"
```
Expected: JSON response with `"url": "https://hitakshi-s.github.io/dimpsportfolio/"`.

If the Pages API returns an error saying Pages is already enabled, skip this step.

- [ ] **Step 5: Verify deployment**

```bash
sleep 30 && curl -s -o /dev/null -w "%{http_code}" https://hitakshi-s.github.io/dimpsportfolio/
```
Expected: `200`. If `404`, wait another 60 seconds and retry — GitHub Pages can take 1–2 minutes to propagate.

- [ ] **Step 6: Open in browser to confirm**

```bash
open https://hitakshi-s.github.io/dimpsportfolio/
```

**Deliverables:**
- Repository: `https://github.com/hitakshi-s/dimpsportfolio`
- Live URL: `https://hitakshi-s.github.io/dimpsportfolio/`

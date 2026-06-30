# Hitakshi Sharma — Portfolio Design Spec
**Date:** 2026-07-01  
**Project:** dimpsportfolio  
**Deploy target:** github.com/hitakshi-s/dimpsportfolio → hitakshi-s.github.io/dimpsportfolio

---

## Subject
Award-quality personal portfolio for Hitakshi Sharma — D2C Brand Manager & Social Media Strategist, 6+ years experience.

---

## Design Direction
**Style:** Editorial Magazine (Option A)  
**Vibe:** Elegant & Minimal — off-white base, deep rose accent, Manrope typeface, generous whitespace  
**Assets:** No images — all visuals are CSS/SVG-driven  
**Content:** Achievement-narrative copy (no invented metrics)

---

## Color System
| Token | Value | Usage |
|---|---|---|
| Background | `#FAF9F7` | Page base |
| Surface | `#FFFFFF` | Cards |
| Border | `#E8E4DF` | Card borders, dividers |
| Text-primary | `#1A1410` | Headlines, body |
| Text-muted | `#6B6560` | Labels, captions |
| Accent | `#C2185B` | CTA, timeline dots, highlights |
| Accent-light | `#FCE4EC` | Hover backgrounds, tints |

---

## Typography
- **Font:** Manrope (Google Fonts)
- **Scale:** 800 for hero headline (~80px), 700 for section heads, 500 for body, 400 for captions
- **One typeface, varied weights** — no mixing families

---

## Tech Stack
- React 18 + TypeScript + Vite
- TailwindCSS (custom config with above tokens)
- Framer Motion (scroll reveals, stagger, spring)
- Lucide Icons
- pnpm (fallback: npm)

---

## Resume Data Extracted

**Personal:**
- Name: Hitakshi Sharma
- Phone: +91-7490945841
- Email: hitakshisharma.business@gmail.com
- LinkedIn: https://www.linkedin.com/in/hitakshisharma
- GitHub Portfolio: https://hitakshi-s.github.io/portfolio

**Summary:** D2C professional with 6+ years of experience leading digital growth across social media and content. Skilled in building strong organic brand presence through high-impact campaigns, audience engagement, and scalable strategies aligned with core business goals.

**Experience (5 roles):**
1. Brand Manager & Social Media Strategist — Biodale (12/2025–07/2026)
2. Team Lead Senior Social Media Executive — BabyOrgano (04/2024–07/2025)
3. D2C Brand Manager / Digital Marketing Manager — Spectalook (03/2020–04/2024)
4. Customer Sales Executive — Vision Eye Plus (08/2017–12/2019)
5. Sales Associate — Heet Healthcare (01/2019–04/2019)

**Skills (9):** Social Media Strategy, Content Ideation, Team Leadership, Cross-Functional Collaboration, Performance Tracking & KPI Management, Event & Shoot Management, Trend & Competitor Analysis, Influencer Marketing & Scripting, Client Communication & Strategy

**Education:**
- Masters: Commerce — Neeldeep Comm. College, Ahmedabad (05/2021)
- Digital Marketing — Career Ninja/LearnTube (01/2021)
- Bachelors: Commerce — New LJ Comm. College, Ahmedabad (05/2019)

**Certifications (10):**
1. Leadership Skills — IIM Ahmedabad
2. AI in Digital and Social Media Marketing — IIM Bangalore
3. Business Communication, Interpersonal Skills & Time Management — Skillephant
4. Amazon Account Management Services — Amazon
5. Stock Market Introduction — LearnTube
6. Introduction To AI Social Media Mastery — LearnTube
7. Techniques to Write Social Media Content Using ChatGPT — LearnTube
8. Simplifying Social Media Management with AI — LearnTube
9. Creating Social Media Visuals with AI — LearnTube
10. Strategically Build and Engage Your Network on LinkedIn — Coursera

---

## Site Structure & Sections

### Loading Screen
- "HS" initials fade in on cream background
- Sweep line animation
- ~1.5s, then reveals site

### Floating Nav
- Pill-shaped, centered, appears after hero scroll
- Links: About · Experience · Skills · Certifications · Contact
- Backdrop blur, no hard borders
- Mobile: hamburger → full-screen overlay

### Scroll Progress Bar
- Thin rose line at top, fills on scroll

### Hero
- Full viewport height
- Two-column desktop / stacked mobile
- Left: label + large name + animated subheadline rotation ("Brand Builder" · "Campaign Architect" · "Team Leader" · "D2C Strategist") + summary + CTAs
- Right: CSS abstract geometric shape in rose/warm tones + floating skill badges
- Background: slow CSS aurora (two radial gradients, rose + amber)
- CTAs: Download Resume (filled) + LinkedIn (ghost) + Email (icon)

### About
- Two-column editorial: pull quote left, narrative right
- Pull quote: *"I don't just manage social media — I build the brand behind it."*
- 2–3 paragraph narrative arc (sales roots → brand builder → D2C strategist)
- 4 fast-facts strip below with count-up animation:
  - 6+ Years Experience · 5 Platforms Mastered · 3 D2C Brands Built · 2 IIM Certifications

### Experience Timeline
- Vertical center line (desktop) / left-anchored (mobile)
- Rose dot on each entry
- Cards alternate left/right on desktop, stack on mobile
- Each card: chapter label (year) + role + company (linked) + narrative paragraph + platform pill tags
- Cards slide in with 100ms stagger

### Skills
- 6 category cards in 3-col grid (desktop) / 1-col (mobile)
- Categories: Strategy · Execution · Platforms · Tools · Leadership · Analytics
- Rose-tinted hover + scale-up
- Pills within each card

### Certifications
- IIM Ahmedabad + IIM Bangalore: featured larger cards
- Remaining 8: standard 2-col grid cards
- Each: institution badge + cert name

### Education
- 3 clean cards in a row
- Institution · Degree · Year

### Contact
- Centered, large headline: "Let's build something great."
- 3 contact blocks: email (click-to-copy) + LinkedIn + Resume download
- No backend form

### Footer
- Single line with rose dot separators

---

## Animations (Framer Motion)
- Page load: staggered fade-in on hero elements
- Scroll reveal: `whileInView` + `once: true`, subtle translateY + opacity
- Timeline: cards cascade with 100ms stagger
- Skills: spring-physics pop-in
- Subheadline: opacity crossfade every 2.5s
- Count-up numbers: trigger on About entering view
- Nav: scale-in after scroll threshold

---

## Deployment
- GitHub account: hitakshi-s (already authenticated)
- New repo: `dimpsportfolio`
- GitHub Pages via `gh-pages` package
- `base` in vite.config: `/dimpsportfolio/`
- Final URL: https://hitakshi-s.github.io/dimpsportfolio

---

## SEO
- robots.txt
- OpenGraph + Twitter Card meta tags
- Structured data (Person schema)
- Meta description from personal summary
- Favicon: "HS" initials as SVG

---

## Quality Targets
- Lighthouse: 95+ across Performance, Accessibility, SEO, Best Practices
- Responsive: 320px → 1440px+
- TypeScript strict mode
- ESLint + Prettier configured

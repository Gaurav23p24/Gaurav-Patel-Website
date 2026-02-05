# Phase 1: MVP Portfolio Website

**Overall Progress:** `0%`

## TLDR
Build a greenfield single-page personal portfolio (Next.js 14 + Tailwind + Framer Motion) with a dark, calm-colored theme. Four sections: Hero, Past Work, Written, Footer. Boilerplate content. Scroll animations. Lighthouse 95+.

## Critical Decisions
- **Theme:** Dark with color personality — deep indigo (`#1e1b4b`), muted teal (`#134e4a`), soft plum (`#2d1b42`), base near-black with blue undertone (`#0a0a0f` → `#111827`)
- **Fonts:** Inter (sans, primary) + Playfair Display (serif italic, accent) via Google Fonts / `next/font`
- **Animations:** GPU-only (transform, opacity). Framer Motion `whileInView` for scroll reveals. No heavy libraries.
- **Architecture:** App Router, single `page.tsx`, section components. No API routes, no backend.
- **No Phase 2 scope:** No video backgrounds, no i18n, no dynamic font cycling, no theme switching.

## Design References
- **Ryo.lu:** Bold type, flat single-page layout, monospace texture details, dark aesthetic
- **Microsoft AI:** Serif italic accent font, generous whitespace, organic soft backgrounds

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0a0a0f` | Page background |
| `bg-secondary` | `#111827` | Card/section backgrounds |
| `accent-indigo` | `#1e1b4b` | Gradient stop 1 |
| `accent-teal` | `#134e4a` | Gradient stop 2 |
| `accent-plum` | `#2d1b42` | Gradient stop 3 |
| `text-primary` | `#f5f5f5` | Headings, primary text |
| `text-secondary` | `#9ca3af` | Descriptions, muted text |
| `text-accent` | `#d4af37` | Subtle gold highlights (links, hover) |

## Tasks

- [ ] 🟥 **Phase 1A: Scaffold & Infrastructure**
  - [ ] 🟥 `git init` + `.gitignore`
  - [ ] 🟥 `create-next-app` with TypeScript, Tailwind CSS, App Router (no `src/` dir)
  - [ ] 🟥 Install `framer-motion`
  - [ ] 🟥 Configure `next/font` — Inter (sans) + Playfair Display (serif)
  - [ ] 🟥 Set up dark color palette in `tailwind.config.ts` (custom colors from table above)
  - [ ] 🟥 Set global styles: dark bg, smooth scroll (`scroll-behavior: smooth`), base typography
  - [ ] 🟥 Verify dev server runs clean, no errors

- [ ] 🟥 **Phase 1B: Page Structure & Components**
  - [ ] 🟥 Root layout (`app/layout.tsx`): fonts, metadata, dark bg
  - [ ] 🟥 `app/page.tsx`: section assembly (Hero → PastWork → Written → Footer)
  - [ ] 🟥 **Hero section** (`components/Hero.tsx`)
    - Bold headline (Inter) with serif italic accent word (Playfair)
    - Tagline in muted text
    - Animated gradient background (indigo → teal → plum, slow shift)
    - Scroll-down indicator (subtle chevron or line)
  - [ ] 🟥 **Past Work section** (`components/PastWork.tsx`)
    - Clean list: Company — Role (3-5 boilerplate entries)
    - Hover effect on each row (subtle highlight/shift)
    - Divider lines between entries
  - [ ] 🟥 **Written section** (`components/Written.tsx`)
    - Numbered list: Title — one-line description (3-5 boilerplate entries)
    - Clickable entries (href placeholder)
    - Clear typographic hierarchy
  - [ ] 🟥 **Footer** (`components/Footer.tsx`)
    - Contact links row (Email, X/Twitter, LinkedIn — placeholder hrefs)
    - Copyright line with current year
    - Minimal, flush with page aesthetic

- [ ] 🟥 **Phase 1C: Animation & Polish**
  - [ ] 🟥 Scroll-triggered animations: each section fades + slides up on enter (`whileInView`)
  - [ ] 🟥 Staggered children animation in Past Work and Written lists
  - [ ] 🟥 Hover micro-interactions: work entries and essay links (scale, color shift, or underline reveal)
  - [ ] 🟥 Responsive pass: test at 640/768/1024/1280px breakpoints, fix layout issues
  - [ ] 🟥 Mobile: touch-friendly hit areas (44×44px min), simplified animations if needed
  - [ ] 🟥 Lighthouse audit: target 95+ on Performance, Accessibility, Best Practices, SEO
  - [ ] 🟥 Final cleanup: remove unused boilerplate, verify no console errors

## Status Report Template (for each phase)
```
Phase [X] Status:
- Files created: [list]
- Files modified: [list]
- Dependencies added: [list]
- Issues encountered: [list or "none"]
- Dev server status: [running clean / errors]
- Next phase ready: [yes/no]
```

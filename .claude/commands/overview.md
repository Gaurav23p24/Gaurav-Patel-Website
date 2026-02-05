Personal Portfolio Website - Technical Specification
Project Vision
A minimal, high-performance personal portfolio website that exudes calm confidence and precision. Every element is intentional. The aesthetic draws inspiration from Microsoft AI's website—smooth, sophisticated, and professional.
Core Technical Stack

Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS
Animations: Framer Motion
Typography: Modern font pairings (Inter + Newsreader or SF Pro Display equivalent)
Deployment: Vercel or Netlify
Architecture: Static-first, no backend, no user authentication

Performance Targets (Non-Negotiable)

Lighthouse score: 95+ across all metrics
First Contentful Paint: <1.5s
All animations: 60fps (GPU-accelerated transform/opacity only)
Total load time: <2s
Works flawlessly on Chrome, Safari, Firefox, Edge
Perfect mobile experience (iOS and Android)

Site Structure
Single-Page Application
Smooth-scrolling sections in this order:
1. Hero Section

Large, bold animated headline
Minimal copy: name, tagline, or current focus (10-15 words max)
Subtle high-quality background (video or animated gradient)
Smooth scroll indicator
Profile photo (optional, high-resolution)

2. Past Work Section
Format:
Company Name — Role/Position
Company Name — Role/Position
Company Name — Role/Position
Design Details:

Clean list-based layout
Chronological or reverse chronological order
Hover effects on each entry
Clickable entries (expand inline or link to case studies)
Optional: Company logos, dates, brief descriptions

3. Written Section
Format:
1. Essay Title — Brief description
2. Essay Title — Brief description
3. Essay Title — Brief description
Design Details:

Numbered list with clear visual hierarchy
Each entry clickable (links to separate page or external Medium/Substack)
Typography optimized for readability
One-sentence descriptions per essay

4. Footer

Simple contact links (email, social media)
Language selector (see i18n details below)
Copyright/year

Design Principles
Visual Style

Color Palette: Sophisticated and restrained (2-3 primary colors + neutrals)
Typography: Large bold headings, comfortable body text size
White Space: Generous—never cluttered
Contrast: High contrast for readability, subtle transitions for elegance
Aesthetic: Microsoft AI-inspired professional modernism

Animation & Interaction Philosophy

Scroll Animations: Elements fade in and slide in as user scrolls
Micro-Interactions: Subtle hover states, smooth transitions
Smooth Scrolling: Eased, natural feeling
Performance First: GPU-accelerated properties only (transform, opacity)
Mobile: Simplified animations if needed for performance
Feeling: Restraint. Nothing accidental. Almost imperceptible motion.

Responsive Design

Mobile-first approach
Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
Touch-friendly hit areas on mobile (minimum 44×44px)

Content Requirements
Text Content Needed

Hero:

Headline (10-15 words)
Tagline/bio (1-2 sentences)


Past Work:

Company names
Role/position titles
Dates (optional)
Brief descriptions (optional)


Written Essays:

Titles
One-sentence descriptions
Links to full content



Media Assets

Profile photo (optional, high-resolution)
Company logos (optional, optimized)
Background assets for Phase 2 (see below)

Development Phases
Phase 1: MVP (Core Site)
Deliverables:

Next.js project setup with Tailwind CSS
Complete home page structure (hero, past work, written, footer)
Basic animations (scroll fade-ins, hover states)
Fully responsive design
Deployment to Vercel
Performance optimization (Lighthouse 95+)

Success Criteria:

Site loads in <2 seconds
All animations run at 60fps
Works perfectly on all target browsers and devices
Clean, professional appearance
Easy content updates

Phase 2: Enhanced Features
1. Dynamic Font & Theme Changes

Trigger: Scroll position dynamically changes headline font and background theme
Implementation: Intersection Observer + Framer Motion variants
Font Cycling: 4-5 distinct typefaces (mix of serif, sans-serif, display fonts)
Themes: Each scroll section has unique color palette/background
Execution: Smooth, seamless transitions

2. High-Quality Animated Backgrounds

Count: 4 unique abstract backgrounds
Format: Subtle video loops or animated gradients
Motion: Very slow, almost imperceptible (5-10 second loops)
Purpose: Set mood, not grab attention
Visual Style: Soft gradients, light texture, no noise
Optimization: <2MB per video
Fallback: Static images for low-power devices

3. Internationalization (i18n)

Languages: English (default) + 4-5 additional languages
Implementation: Next.js i18n routing or next-intl library
UI: Language selector in footer
Behavior: Instant language switch, no page reload
Coverage: All text content translated, dates/numbers localized
SEO: Proper hreflang tags for each language

Technical Constraints

No user login/authentication
No backend required
Static-first architecture
High performance mandatory
Modern browser support only

Desired Feeling
Calm confidence. Precision. Restraint. A sense that nothing here is accidental.

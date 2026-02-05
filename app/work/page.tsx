"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const workEntries = [
  {
    company: "Honeywell",
    role: "Academic Project Associate",
    summary:
      "Collaborated with Honeywell on an academic research project, applying data-driven methodologies to solve real-world engineering challenges and delivering actionable insights.",
    links: [{ label: "Company", href: "https://www.notion.so/2fe38a2f65f4802a8aebfcd13d461cca?v=2fe38a2f65f48056a766000ccde34edb&source=copy_link" }],
  },
  {
    company: "Follio Inc.",
    role: "Product Manager",
    summary:
      "Led product strategy for a consumer-facing portfolio platform. Defined the roadmap, coordinated cross-functional teams, and shipped features that grew user engagement by 3x.",
    links: [{ label: "Website", href: "https://www.notion.so/2fe38a2f65f4802a8aebfcd13d461cca?v=2fe38a2f65f48056a766000ccde34edb&source=copy_link" }],
  },
  {
    company: "UNCC",
    role: "Graduate Assistant",
    summary:
      "Supported research initiatives and coursework development in the computer science department. Built internal tools to streamline data collection and analysis workflows.",
    links: [{ label: "University", href: "https://www.notion.so/2fe38a2f65f4802a8aebfcd13d461cca?v=2fe38a2f65f48056a766000ccde34edb&source=copy_link" }],
  },
  {
    company: "1Rivet",
    role: "Data",
    summary:
      "Worked on data pipelines and analytics infrastructure. Designed dashboards and reporting systems that enabled data-driven decision-making across the organization.",
    links: [{ label: "Company", href: "https://www.notion.so/2fe38a2f65f4802a8aebfcd13d461cca?v=2fe38a2f65f48056a766000ccde34edb&source=copy_link" }],
  },
  {
    company: "Skytus",
    role: "Software",
    summary:
      "Built and maintained full-stack applications from the ground up. Focused on performance, clean architecture, and delivering reliable software on tight timelines.",
    links: [{ label: "Company", href: "https://www.notion.so/2fe38a2f65f4802a8aebfcd13d461cca?v=2fe38a2f65f48056a766000ccde34edb&source=copy_link" }],
  },
];

const footerLinks = [
  {
    label: "Email",
    href: "mailto:gpatel4work@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravpatel28/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Gaurav23p24",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@gauravpatel42",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/gauravimprove",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ),
  },
];

export default function WorkPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const lastScrollTime = useRef(0);

  const navigate = useCallback((dir: number) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 600) return;
    lastScrollTime.current = now;

    setDirection(dir);
    setCurrentIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return 0;
      if (next >= workEntries.length) return workEntries.length - 1;
      return next;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      navigate(e.deltaY > 0 ? 1 : -1);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const deltaY = touchStartY - e.touches[0].clientY;
      if (Math.abs(deltaY) > 30) {
        navigate(deltaY > 0 ? 1 : -1);
        touchStartY = e.touches[0].clientY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [navigate]);

  const entry = workEntries[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <main className="relative h-screen overflow-hidden flex flex-col justify-between bg-bg-primary px-6 md:px-16 lg:px-24 py-8 md:py-12">
      
        {/* Layer 2 (top): fish_2 */}
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[2]"
        style={{ opacity: 0.9 }}
      >
        <source src="/videos/flower_1.mp4" type="video/mp4" />
      </video>
      
      {/* Layer 1 (bottom): flower_3 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1]"
        style={{ opacity: 0 }}
      >
        <source src="/videos/flower_3.mp4" type="video/mp4" />
      </video>



      {/* Dark overlay — adjust opacity (0 = transparent, 1 = fully black) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none z-[3]"
        style={{ opacity: 0.8 }}
      />

      {/* Back link */}
      <div className="relative z-10">
        <Link
          href="/"
          className="text-text-secondary hover:text-text-primary transition-colors text-sm font-mono uppercase tracking-wider"
        >
          &larr; Back
        </Link>
      </div>

      {/* Work content */}
      <div className="relative z-10 flex-1 flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-text-primary leading-[1.05]">
              {entry.company}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-text-secondary">
              {entry.role}
            </p>
            <p className="mt-6 text-base md:text-lg text-text-primary/70 max-w-2xl leading-relaxed">
              {entry.summary}
            </p>
            <div className="mt-6 flex gap-4">
              {entry.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-gold hover:text-text-primary transition-colors font-mono uppercase tracking-wider"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-gold transition-colors text-xs uppercase tracking-wider font-mono"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-text-secondary/40 text-xs font-mono">
          {currentIndex + 1}/{workEntries.length}
        </p>
      </div>
    </main>
  );
}

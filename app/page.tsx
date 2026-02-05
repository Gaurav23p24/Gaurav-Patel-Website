"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedHeadline from "./components/AnimatedHeadline";

const themes = [
  "#0a0a0f", // obsidian
  "#0f2027", // dark teal
  "#1b1b1b", // charcoal
  "#2d1b42", // plum
  "#0b1a0b", // forest black
  "#1c1016", // dark burgundy
];

const work = [
  { company: "Honeywell", role: "Academic Project Associate" },
  { company: "Follio Inc.", role: "Product Management" },
  { company: "UNC Charlotte", role: "Graduate Assistant" },
  { company: "1Rivet", role: "Data" },
  { company: "Skytus", role: "Software Engineer" },
];

const articles = [
  {
    num: "01",
    title: "Dumb Question",
    href: "https://medium.com/@gauravpatel42/the-dumb-question-whats-the-meaning-of-life-b70eccbb63f1",
  },
  {
    num: "02",
    title: "Brain Paradox",
    href: "https://medium.com/@gauravpatel42/the-brain-paradox-when-10-tasks-arent-enough-so-you-add-59-more-645150f11179",
  },
];

const links = [
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

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0);
  const lastScrollTime = useRef(0);

  const cycleTheme = useCallback((direction: number) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 600) return;
    lastScrollTime.current = now;

    setThemeIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return themes.length - 1;
      if (next >= themes.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      cycleTheme(e.deltaY > 0 ? 1 : -1);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const deltaY = touchStartY - e.touches[0].clientY;
      if (Math.abs(deltaY) > 30) {
        cycleTheme(deltaY > 0 ? 1 : -1);
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
  }, [cycleTheme]);

  return (
    <main
      className="relative h-screen overflow-hidden flex flex-col justify-between px-6 md:px-16 lg:px-24 py-8 md:py-12"
      style={{
        backgroundColor: themes[themeIndex],
        transition: "background-color 0.8s ease",
      }}
    >
      {/* Layer 1 (bottom): flower_1 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1]"
        style={{ opacity: 1.0}}
      >
        <source src="/videos/water_1.mp4" type="video/mp4" />
      </video>

  
      {/* Layer 2 (middle): abstract_2 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[2]"
        style={{ opacity: 0 }}
      >
        <source src="/videos/flower_3.mp4" type="video/mp4" />
      </video>

        {/* Mid overlay — darkens bottom fish layer (0 = transparent, 1 = fully black) */}
          <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: 0.2, zIndex: 1 }}
      />


      {/* Dark overlay — adjust opacity (0 = transparent, 1 = fully black) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none z-[3]"
        style={{ opacity: 0.925 }}
      />

      {/* Headline */}
      <div className="relative z-10 flex-1 flex items-center">
        <AnimatedHeadline themeIndex={themeIndex} />
      </div>

      {/* Bottom content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 space-y-8"
      >
        {/* Work + Written grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
          {/* Past Work */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-text-secondary mb-4 font-mono">
              Past Work
            </h2>
            <div className="space-y-1">
              {work.map((item, i) => (
                <a
                  key={i}
                  href="https://www.notion.so/2fe38a2f65f4802a8aebfcd13d461cca?v=2fe38a2f65f48056a766000ccde34edb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-sm md:text-base text-text-primary/80 hover:text-accent-gold transition-colors"
                >
                  {item.company}
                  <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out align-bottom">
                    {" · "}{item.role}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Written */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-text-secondary mb-4 font-mono">
              Written
            </h2>
            <div className="space-y-1">
              {articles.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-text-primary/80 hover:text-accent-gold transition-colors"
                >
                  <span className="text-text-secondary/50 mr-2 font-mono text-xs">{item.num}</span>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex gap-6">
            {links.map((link) => (
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
            &copy; {new Date().getFullYear()} Gaurav Patel
          </p>
        </div>
      </motion.div>

      {/* Theme dots indicator */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-10">
        {themes.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-500"
            style={{
              backgroundColor: i === themeIndex ? "#f5f5f5" : "rgba(255,255,255,0.2)",
              transform: i === themeIndex ? "scale(1.5)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Gaurav", "is", "making"];
const LINK_WORD = "Iyas.";
const LINK_HREF = "https://iyas.com";

const themeFonts = [
  "var(--font-roboto)",
  "var(--font-playwrite)",
  "var(--font-jacquard)",
  "var(--font-quintessential)",
  "var(--font-fleur-de-leah)",
  "var(--font-metamorphous)",
];

// Helper: renders "Iyas." as a bold underlined link
function IyasLink({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}

// Helper: wraps content in a word-safe span (no mid-word breaks)
function Word({ children }: { children: React.ReactNode }) {
  return <span className="inline-block whitespace-nowrap">{children}</span>;
}

// ─── Letter-based animation helper ──────────────────────────
// Groups letters by word to prevent mid-word line breaks.
// Accepts a per-letter motion props factory.
function LetterAnimation({
  letterProps,
}: {
  letterProps: (i: number) => Record<string, unknown>;
}) {
  const allWords = [...WORDS, LINK_WORD];
  let globalIndex = 0;

  return (
    <span className="inline-flex flex-wrap gap-x-[0.3em]">
      {allWords.map((word, wi) => {
        const letters = word.split("");
        const isLink = wi === allWords.length - 1;
        const wordContent = letters.map((char) => {
          const idx = globalIndex++;
          return (
            <motion.span
              key={idx}
              {...letterProps(idx)}
              className="inline-block"
            >
              {char}
            </motion.span>
          );
        });
        return (
          <Word key={wi}>
            {isLink ? <IyasLink>{wordContent}</IyasLink> : wordContent}
          </Word>
        );
      })}
    </span>
  );
}

// ─── Full-text content helper ────────────────────────────────
function FullTextContent() {
  return (
    <>
      {WORDS.join(" ")}{" "}
      <IyasLink>{LINK_WORD}</IyasLink>
    </>
  );
}

// ─── 0: Typewriter ───────────────────────────────────────────
function Typewriter() {
  const fullText = WORDS.join(" ") + " " + LINK_WORD;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= fullText.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 120);
    return () => clearInterval(id);
  }, [fullText]);

  const linkStart = WORDS.join(" ").length + 1;
  const visibleText = fullText.slice(0, count);
  const prefixEnd = Math.min(count, linkStart);
  const linkVisible = count > linkStart ? fullText.slice(linkStart, count) : "";

  return (
    <span>
      {visibleText.slice(0, prefixEnd)}
      {linkVisible && <IyasLink>{linkVisible}</IyasLink>}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.85em] bg-text-primary ml-1 align-baseline"
      />
    </span>
  );
}

// ─── 1: Glitch ───────────────────────────────────────────────
function Glitch() {
  const fullText = WORDS.join(" ") + " " + LINK_WORD;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="glitch-wrapper"
    >
      <span className="glitch" data-text={fullText}>
        <FullTextContent />
      </span>
    </motion.span>
  );
}

// ─── 2: Wave stagger ────────────────────────────────────────
function Wave() {
  return (
    <LetterAnimation
      letterProps={(i) => ({
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.8,
          delay: i * 0.06,
          ease: [0.25, 0.1, 0.25, 1],
        },
      })}
    />
  );
}

// ─── 3: Blur reveal ─────────────────────────────────────────
function BlurReveal() {
  return (
    <motion.span
      initial={{ filter: "blur(24px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <FullTextContent />
    </motion.span>
  );
}

// ─── 4: Electric glitch ─────────────────────────────────────
function ElectricGlitch() {
  return (
    <LetterAnimation
      letterProps={(i) => ({
        initial: { opacity: 0, x: (i % 2 === 0 ? -1 : 1) * 8 },
        animate: {
          opacity: [0, 1, 0.3, 1, 0.7, 1],
          x: [(i % 2 === 0 ? -1 : 1) * 8, 3, -2, 1, 0, 0],
        },
        transition: {
          duration: 0.6,
          delay: i * 0.03,
          ease: "easeOut",
          times: [0, 0.2, 0.35, 0.5, 0.7, 1],
        },
      })}
    />
  );
}

// ─── 5: Fade slide up ───────────────────────────────────────
function FadeSlideUp() {
  const allWords = [...WORDS, LINK_WORD];

  return (
    <span className="inline-flex flex-wrap gap-x-[0.3em]">
      {allWords.map((word, i) => {
        const isLink = i === allWords.length - 1;
        const content = (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: i * 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        );
        return isLink ? (
          <IyasLink key={i}>{content}</IyasLink>
        ) : (
          content
        );
      })}
    </span>
  );
}

// ─── 6: Rotate in ───────────────────────────────────────────
function RotateIn() {
  return (
    <span style={{ perspective: "600px" }}>
      <LetterAnimation
        letterProps={(i) => ({
          initial: { opacity: 0, rotateX: 90 },
          animate: { opacity: 1, rotateX: 0 },
          transition: {
            duration: 0.9,
            delay: i * 0.045,
            ease: [0.25, 0.1, 0.25, 1],
          },
          style: { transformOrigin: "bottom center" },
        })}
      />
    </span>
  );
}

// ─── 7: Shimmer reveal ──────────────────────────────────────
function ShimmerReveal() {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="shimmer-text"
    >
      <FullTextContent />
    </motion.span>
  );
}

// ─── 8: Scramble / decode ───────────────────────────────────
function Scramble() {
  const fullText = WORDS.join(" ") + " " + LINK_WORD;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.";
  const [displayed, setDisplayed] = useState(
    fullText.replace(/[^ ]/g, () => chars[Math.floor(Math.random() * chars.length)])
  );
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const id = setInterval(() => {
      setDisplayed(
        fullText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return fullText[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 0.5;
      if (iteration >= fullText.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 50);
    return () => clearInterval(id);
  }, [fullText]);

  useEffect(() => {
    setDone(false);
    const cleanup = scramble();
    return cleanup;
  }, [scramble]);

  if (done) {
    return (
      <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
        <FullTextContent />
      </motion.span>
    );
  }

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {displayed}
    </motion.span>
  );
}

// ─── 9: Bounce drop ────────────────────────────────────────
function BounceDrop() {
  return (
    <LetterAnimation
      letterProps={(i) => ({
        initial: { opacity: 0, y: -80 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.8,
          delay: i * 0.05,
          type: "spring",
          stiffness: 120,
          damping: 12,
        },
      })}
    />
  );
}

// ─── Animation components array ─────────────────────────────
const animations = [
  Typewriter,
  BlurReveal,
  ElectricGlitch,
  RotateIn,
  ShimmerReveal,
  Scramble,
];

// ─── Main component ─────────────────────────────────────────
export default function AnimatedHeadline({
  themeIndex,
}: {
  themeIndex: number;
}) {
  const font = themeFonts[themeIndex];
  const AnimComponent = animations[themeIndex];

  return (
    <h1
      className="tracking-tight text-text-primary leading-[1.05] w-full whitespace-nowrap"
      style={{
        fontSize: "clamp(1.5rem, 7.5vw, 9rem)",
        fontFamily: font,
        fontWeight: 400,
        transition: "font-family 0.8s ease",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={themeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="block"
        >
          <AnimComponent />
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}

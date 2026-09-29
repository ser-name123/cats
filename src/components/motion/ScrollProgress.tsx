"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Page ke top pe glowing scroll progress bar
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-sky-500 via-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
    />
  );
}

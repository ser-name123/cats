"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Poori site pe buttery smooth scrolling (Lenis). Anchor links (#services etc.)
// sticky header ke hisaab se offset ke saath smoothly scroll hote hain.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: { offset: -80 },
      allowNestedScroll: true,
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}

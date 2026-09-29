"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Cpu } from "lucide-react";

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING IT INFRASTRUCTURE");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 10) + 7;
      current = Math.min(current + step, 100);
      setPercent(current);

      if (current < 35) {
        setStatusText("INITIALIZING IT INFRASTRUCTURE");
      } else if (current < 75) {
        setStatusText("CONNECTING SIRA & CYBER DEFENSE");
      } else {
        setStatusText("CATS COMPUTERS L.L.C • DUBAI ONLINE");
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "unset";
        }, 300);
      }
    }, 32);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {/* 1. Global Page Transition Top Glow Laser Bar */}
      <motion.div
        key={pathname}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.65, ease: LUXURY_EASE }}
        style={{ transformOrigin: "0% 50%" }}
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,1)] pointer-events-none"
      />

      {/* 2. World-Class Cinematic Split-Curtain Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto select-none overflow-hidden">
            
            {/* Top Shutter Curtain (Slides Up with glow edge) */}
            <motion.div
              initial={{ y: "0%" }}
              exit={{ y: "-100%", transition: { duration: 0.85, ease: LUXURY_EASE, delay: 0.08 } }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#020617] border-b border-sky-400/50 shadow-[0_10px_40px_rgba(6,182,212,0.3)] z-20"
            >
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            </motion.div>

            {/* Bottom Shutter Curtain (Slides Down with glow edge) */}
            <motion.div
              initial={{ y: "0%" }}
              exit={{ y: "100%", transition: { duration: 0.85, ease: LUXURY_EASE, delay: 0.08 } }}
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#020617] border-t border-sky-400/50 shadow-[0_-10px_40px_rgba(6,182,212,0.3)] z-20"
            >
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            </motion.div>

            {/* Parting Laser Seam Light Flash */}
            <motion.div
              exit={{ scaleX: [1, 2], opacity: [1, 0], transition: { duration: 0.3 } }}
              className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent z-25 pointer-events-none shadow-[0_0_20px_rgba(6,182,212,1)]"
            />

            {/* Central Holographic Brand Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)", transition: { duration: 0.28 } }}
              className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-sm w-full"
            >
              {/* Ambient Glow Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-sky-500/25 via-cyan-400/20 to-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

              {/* Animated 3D Cyber Emblem with Concentric Radar Rings */}
              <div className="relative w-24 h-24 mb-5 flex items-center justify-center">
                {/* Outer Dashed Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-sky-500/40 animate-[spin_10s_linear_infinite]" />
                
                {/* Counter Rotating Ring */}
                <div className="absolute inset-2 rounded-full border-t-2 border-r-2 border-cyan-400/70 animate-[spin_4s_linear_infinite_reverse]" />
                
                {/* Inner Glow Backdrop */}
                <div className="absolute inset-3 rounded-full bg-cyan-500/10 backdrop-blur-sm" />

                {/* Central SVG Emblem */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-16 h-16 relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.9)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="premBlueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="premCyanAccent2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 68 24 C 55 14 36 17 24 30 C 12 43 14 65 28 77 C 42 89 66 85 75 72 C 78 68 83 71 80 76 C 68 93 39 96 21 82 C 3 67 3 39 19 22 C 34 7 60 4 75 16 C 80 20 74 27 68 24 Z"
                    fill="url(#premBlueGrad2)"
                  />
                  <path
                    d="M 64 36 C 54 28 40 30 32 39 C 24 48 25 61 34 68 C 43 76 58 74 65 65 C 68 62 72 65 69 68 C 60 80 40 81 27 70 C 15 60 15 42 26 30 C 37 19 55 17 67 27 C 70 30 67 38 64 36 Z"
                    fill="url(#premCyanAccent2)"
                  />
                  <circle cx="75" cy="18" r="3.5" fill="#38bdf8" className="animate-ping" />
                  <circle cx="75" cy="72" r="3" fill="#67e8f9" />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="space-y-1 mb-5">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-extrabold text-2xl tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-sky-400">
                    CATS COMPUTERS
                  </span>
                  <span className="text-[10px] font-bold text-cyan-300 bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800">
                    L.L.C
                  </span>
                </div>
                <p className="text-[10px] font-mono tracking-[0.25em] text-cyan-300/80 uppercase">
                  Bur Dubai, UAE • Enterprise Systems
                </p>
              </div>

              {/* Minimalist Precision Progress Line & HUD Status */}
              <div className="w-64 space-y-2.5">
                {/* Progress Bar with Laser Sweep */}
                <div className="relative h-[3px] w-full rounded-full bg-slate-900 overflow-hidden border border-slate-800/80 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,1)]"
                    style={{ width: `${percent}%` }}
                    transition={{ ease: "easeOut", duration: 0.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-laser-sweep" />
                </div>

                {/* Progress Digits & Dynamic Subtitle */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 text-[10px] tracking-wider truncate mr-2">
                    &gt; {statusText}
                  </span>
                  <span className="text-cyan-300 font-bold tabular-nums shrink-0">
                    {String(percent).padStart(3, "0")}%
                  </span>
                </div>
              </div>

              {/* Micro UAE Accreditation Badges */}
              <div className="mt-7 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-3 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>CR: 679611</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-sky-400" />
                  <span>DCCI: 1912384</span>
                </span>
                <span>•</span>
                <span className="text-cyan-400">SIRA</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

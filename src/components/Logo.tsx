import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export default function Logo({ className = "", size = "md", showTagline = false }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const titleSizes = {
    sm: "text-base tracking-wider",
    md: "text-xl tracking-widest",
    lg: "text-3xl tracking-widest",
    xl: "text-4xl tracking-widest",
  };

  const subSizes = {
    sm: "text-[9px] tracking-normal",
    md: "text-[10px] tracking-wider",
    lg: "text-xs tracking-widest",
    xl: "text-sm tracking-widest",
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 3D Glowing Cyber C Swirl Icon */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        {/* Glow ambient circle */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md animate-pulse" />
        
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="cyanAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer futuristic ring */}
          <circle cx="50" cy="50" r="44" stroke="url(#cyberBlueGrad)" strokeWidth="4" strokeDasharray="180 30 20 10" strokeLinecap="round" className="animate-spin-slow" />
          
          {/* Main Swirled 3D 'C' Emblem */}
          <path
            d="M 68 24 C 55 14 36 17 24 30 C 12 43 14 65 28 77 C 42 89 66 85 75 72 C 78 68 83 71 80 76 C 68 93 39 96 21 82 C 3 67 3 39 19 22 C 34 7 60 4 75 16 C 80 20 74 27 68 24 Z"
            fill="url(#cyberBlueGrad)"
          />
          
          {/* Inner Glowing Curve */}
          <path
            d="M 64 36 C 54 28 40 30 32 39 C 24 48 25 61 34 68 C 43 76 58 74 65 65 C 68 62 72 65 69 68 C 60 80 40 81 27 70 C 15 60 15 42 26 30 C 37 19 55 17 67 27 C 70 30 67 38 64 36 Z"
            fill="url(#cyanAccent)"
          />

          {/* Tech node dots */}
          <circle cx="75" cy="18" r="3.5" fill="#38bdf8" className="animate-ping" />
          <circle cx="75" cy="72" r="3" fill="#67e8f9" />
        </svg>
      </div>

      {/* Typography Section */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-[900] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-sky-400 font-sans ${titleSizes[size]} drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)]`}>
            CATS
          </span>
          <span className={`font-[700] text-sky-400/90 uppercase ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-lg"}`}>
            COMPUTERS <span className="text-cyan-300 font-[800] text-[0.8em]">L.L.C</span>
          </span>
        </div>
        
        <span className={`text-slate-400 font-medium tracking-wide uppercase ${subSizes[size]}`}>
          Computer Accessories & Technical Services
        </span>

        {showTagline && (
          <span className="text-cyan-400/80 text-[11px] font-medium tracking-wider italic mt-0.5">
            Integrating Technology. Empowering Business.
          </span>
        )}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { solutionPartners } from "@/data/services";

// Partner brands ki do lines jo ulti dishaon me chalti hain (hover pe rukti hain)
export default function BrandMarquee({ title = "Technologies We Deploy & Support" }: { title?: string }) {
  const brands = solutionPartners.flatMap((c) => c.partners);
  const half = Math.ceil(brands.length / 2);
  const rows = [brands.slice(0, half), brands.slice(half)];

  return (
    <section data-no-reveal className="py-16 bg-[#030712] border-t border-sky-950/60 overflow-hidden">
      <div className="site-container">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-500 mb-8">{title}</p>
      </div>

      <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className="flex overflow-hidden group">
            <div
              className="flex shrink-0 gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDirection: r === 1 ? "reverse" : "normal", animationDuration: "45s" }}
            >
              {[...row, ...row].map((b, i) => (
                <div
                  key={`${b.name}-${i}`}
                  className="shrink-0 min-w-44 px-6 py-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-colors"
                >
                  <div className="text-base text-white tracking-wide">{b.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{b.tag}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import CountUp from "@/components/motion/CountUp";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
}

// Animated counters ki patti
export default function StatsBand({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-14 bg-gradient-to-r from-slate-950 via-sky-950/40 to-slate-950 border-y border-sky-950/60">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="cyber-glass cyber-glass-hover rounded-2xl p-5 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 tabular-nums">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-slate-200">{s.label}</div>
              {s.sub && <div className="mt-0.5 text-xs text-slate-500">{s.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

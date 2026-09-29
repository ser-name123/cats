"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { iconMap } from "./icons";
import type { ProcessStep } from "@/data/pageContent";

interface ProcessTimelineProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  steps: ProcessStep[];
}

// Step-by-step process: desktop pe horizontal, mobile pe vertical timeline.
// Connecting line scroll me aate hi left se right bharti hai.
export default function ProcessTimeline({ badge, title, highlight, description, steps }: ProcessTimelineProps) {
  const cols = steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-sky-950/60">
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        <SectionHeading badge={badge} title={title} highlight={highlight} description={description} />

        <div className="relative">
          {/* Desktop connecting line */}
          <div aria-hidden className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px bg-slate-800">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-left bg-gradient-to-r from-sky-500 via-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            />
          </div>

          {/* Mobile vertical line */}
          <div aria-hidden className="lg:hidden absolute top-0 bottom-0 left-7 w-px bg-gradient-to-b from-sky-500/60 via-cyan-400/30 to-transparent" />

          <div className={`grid grid-cols-1 ${cols} gap-8 lg:gap-6`}>
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.title} className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center group">
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-slate-900 border border-sky-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:border-cyan-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-300" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-[10px] text-white flex items-center justify-center font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="text-base text-white">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

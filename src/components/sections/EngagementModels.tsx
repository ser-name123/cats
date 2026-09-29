"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { iconMap } from "./icons";
import { engagementModels } from "@/data/pageContent";
import { useModal } from "@/context/ModalContext";

// Kaam karne ke tarike: Turnkey project, AMC, On-demand support
export default function EngagementModels({
  badge = "Flexible Engagement",
  title = "Choose How We",
  highlight = "Work Together",
  description = "Whether you need a one-time project, year-round maintenance or help on demand, there is a model that fits your business.",
}: {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
}) {
  const { openQuoteModal } = useModal();

  return (
    <section className="py-20 bg-[#030712] relative overflow-hidden border-t border-sky-950/60">
      <div className="absolute top-10 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <SectionHeading badge={badge} title={title} highlight={highlight} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {engagementModels.map((m) => {
            const Icon = iconMap[m.icon];
            return (
              <div
                key={m.name}
                data-tilt
                className={`relative flex flex-col rounded-3xl p-7 border transition-colors duration-300 ${
                  m.featured
                    ? "bg-gradient-to-b from-sky-950/90 to-slate-950 border-cyan-400/50 shadow-[0_0_40px_rgba(56,189,248,0.2)]"
                    : "bg-slate-900/60 border-slate-800 hover:border-sky-600/50"
                }`}
              >
                {m.featured && (
                  <span className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-600/30">
                    Most Popular
                  </span>
                )}

                <div className="w-12 h-12 rounded-2xl bg-sky-950 border border-sky-700/50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="mt-5 text-xl text-white">{m.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{m.tagline}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openQuoteModal(m.name)}
                  className={`mt-8 group flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm transition-all cursor-pointer ${
                    m.featured
                      ? "text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-600/30"
                      : "text-slate-200 bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  {m.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

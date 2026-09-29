"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { dubaiAreas, uaeEmirates } from "@/data/pageContent";

// Kin areas me service dete hain: Dubai ke areas + UAE ke emirates
export default function ServiceAreas() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-sky-950/60">
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:26px_26px] opacity-10 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              badge="Service Coverage"
              title="On-Site Support Across"
              highlight="Dubai & the UAE"
              description="Our engineers operate from Bur Dubai and travel to client sites across the city and neighbouring emirates for surveys, installations and maintenance visits."
              align="left"
            />

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/70 border border-sky-800/40">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-600/30">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white">Headquarters: Bur Dubai</p>
                <p className="text-xs text-slate-400 mt-1">
                  Office #6, Water Tank Bldg, Near Souq Al Fahidi, Al Musallah St, Bur Dubai
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 mb-4">Across Dubai</p>
              <div className="flex flex-wrap gap-2.5">
                {dubaiAreas.map((area) => (
                  <span
                    key={area}
                    className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 hover:border-cyan-400/60 hover:text-white hover:-translate-y-0.5 transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5 text-sky-500 group-hover:text-cyan-300 transition-colors" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 mb-4">Across the UAE</p>
              <div className="flex flex-wrap gap-2.5">
                {uaeEmirates.map((e) => (
                  <span
                    key={e}
                    className="px-4 py-2 rounded-full bg-sky-950/60 border border-sky-700/40 text-sm text-sky-200"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

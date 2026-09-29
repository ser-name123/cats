"use client";

import React from "react";
import { Target, Compass, CheckCircle2, ShieldCheck, Zap, Sparkles, TrendingUp, Users, Clock } from "lucide-react";

export default function MissionVisionSection() {
  const objectives = [
    {
      title: "Tailored Turnkey IT Architectures",
      desc: "Provide turnkey IT solutions strictly tailored to individual client workflows, site constraints, and growth ambitions.",
      icon: Zap,
      badge: "Architecture"
    },
    {
      title: "Zero-Trust & Future-Proof Scalability",
      desc: "Deliver resilient architectures that effortlessly scale with business expansion and comply with emerging cyber standards.",
      icon: ShieldCheck,
      badge: "Security"
    },
    {
      title: "Certified Engineering Excellence",
      desc: "Maintain highest international engineering benchmarks through multi-domain certified engineers and vendor standards.",
      icon: Sparkles,
      badge: "Standards"
    },
    {
      title: "24/7 SLA & Zero Downtime Focus",
      desc: "Ensure round-the-clock proactive monitoring and rapid on-site dispatch across Dubai to eliminate operational disruption.",
      icon: Clock,
      badge: "High-Availability"
    },
    {
      title: "Trust-Based Corporate Partnerships",
      desc: "Build lasting client relationships grounded in absolute transparency, integrity, and measurable project performance.",
      icon: Users,
      badge: "Relationships"
    },
    {
      title: "Continuous Innovation & AI Adoption",
      desc: "Constantly adopt emerging cloud innovations, IoT telemetry, and AI automation to keep clients ahead of competition.",
      icon: TrendingUp,
      badge: "Innovation"
    }
  ];

  return (
    <section id="mission-vision" className="py-24 bg-slate-950 relative overflow-hidden border-t border-sky-950/60">
      {/* Background glow lines */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/90 border border-sky-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Guiding Principles & Strategic Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Mission, Vision & Objectives</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Guiding Dubai and regional enterprises toward digital excellence through uncompromised engineering quality, reliability, and security.
          </p>
        </div>

        {/* Mission & Vision Dual 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="cyber-glass cyber-glass-hover rounded-3xl p-8 sm:p-10 border border-sky-500/30 relative overflow-hidden shadow-2xl flex flex-col justify-between bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white shrink-0">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Core Purpose & Execution
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Our Mission
                  </h3>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed border-l-2 border-cyan-400/80 pl-4 py-3 my-3 bg-slate-950/50 rounded-r-2xl border-y border-r border-slate-800/50">
                &ldquo;To deliver Innovative, Reliable, and Secure Technology Solutions that empower businesses to operate efficiently, adapt quickly, and grow confidently in a rapidly evolving digital world.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-cyan-300">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span>Execution Pillar: Innovation, Reliability & Zero-Trust Security</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="cyber-glass cyber-glass-hover rounded-3xl p-8 sm:p-10 border border-blue-500/30 relative overflow-hidden shadow-2xl flex flex-col justify-between bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white shrink-0">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    Long-term Horizon
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Our Vision
                  </h3>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed border-l-2 border-blue-400/80 pl-4 py-3 my-3 bg-slate-950/50 rounded-r-2xl border-y border-r border-slate-800/50">
                &ldquo;To be recognized as a trusted technology partner in the region, known for delivering cutting-edge IT solutions, exceptional service quality, and long-term value to our clients.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-blue-300">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              <span>Horizon: Premier Regional Technology Partner of Choice</span>
            </div>
          </div>

        </div>

        {/* Our Strategic Objectives (6 Core Pillars) */}
        <div className="cyber-glass rounded-3xl p-8 sm:p-12 border border-sky-500/25 shadow-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block mb-1">
              Commitment to Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Our 6 Strategic Objectives
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Actionable engineering commitments that drive every project we design, supply, and commission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900/90 shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-sky-950 border border-sky-800/70 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-cyan-300 uppercase bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {obj.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {obj.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Committed Objective</span>
                    </span>
                    <span className="font-mono text-slate-500 font-bold">0{idx + 1}</span>
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

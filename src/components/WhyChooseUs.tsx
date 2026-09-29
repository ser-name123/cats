"use client";

import React from "react";
import {
  GraduationCap,
  Sliders,
  ShieldCheck,
  Clock,
  Award,
  Layers,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Certified Multi-Domain Experts",
      desc: "Our Dubai team comprises industry-certified engineers across Cisco, Fortinet, Microsoft, Dell, and AWS.",
      icon: GraduationCap,
      color: "from-sky-500 to-cyan-500",
      tag: "Multi-Domain Certified",
      metrics: "Cisco • Fortinet • Microsoft"
    },
    {
      title: "Bespoke Enterprise Architecture",
      desc: "Every network, server, and cybersecurity framework is precisely engineered around your workflows, budget, and growth roadmap.",
      icon: Sliders,
      color: "from-blue-500 to-indigo-500",
      tag: "Tailored Engineering",
      metrics: "Custom SLA & Topologies"
    },
    {
      title: "SIRA & Global Standards",
      desc: "Full compliance with Dubai Municipality, SIRA security surveillance standards, and international IT engineering benchmarks.",
      icon: ShieldCheck,
      color: "from-cyan-400 to-teal-500",
      tag: "SIRA & UAE Compliant",
      metrics: "Audited & Certified Handover"
    },
    {
      title: "24/7 Mission-Critical SLA Support",
      desc: "Round-the-clock proactive monitoring, emergency on-site dispatch across Dubai, and zero-downtime commitment.",
      icon: Clock,
      color: "from-emerald-500 to-teal-600",
      tag: "24/7 Direct SLA",
      metrics: "< 2hr Emergency Dispatch"
    },
    {
      title: "Proven UAE Track Record",
      desc: "Successful turnkey deployment of high-density IT projects across corporate towers, retail malls, luxury hotels & government sectors.",
      icon: Award,
      color: "from-sky-400 to-blue-600",
      tag: "Trusted Regional Partner",
      metrics: "100+ Enterprise Handouts"
    },
    {
      title: "Single-Source Turnkey Accountability",
      desc: "From initial site design and genuine OEM supply to physical deployment, configuration, and ongoing AMC maintenance.",
      icon: Layers,
      color: "from-indigo-500 to-cyan-500",
      tag: "End-to-End Turnkey",
      metrics: "Single Point of Contact"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-950 relative overflow-hidden border-t border-sky-950/80">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/90 border border-sky-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The CATS Engineering Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">CATS COMPUTERS L.L.C</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Empowering Dubai and UAE organizations with certified engineering, uncompromising zero-trust security, and round-the-clock operational reliability.
          </p>
        </div>

        {/* 6 Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="cyber-glass cyber-glass-hover rounded-3xl p-8 border border-sky-500/20 relative overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg shadow-sky-500/25 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300 bg-sky-950/90 px-3 py-1 rounded-md border border-sky-700/60">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2.5 group-hover:text-cyan-200 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {reason.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">{reason.metrics}</span>
                  </div>
                  <span className="font-mono text-slate-500 font-bold">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Trust Metrics Strip */}
        <div className="cyber-glass rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                100%
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1">Turnkey Delivery</span>
              <span className="text-[11px] text-slate-400">Design to Commissioning</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                99.9%
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1">SLA Uptime Target</span>
              <span className="text-[11px] text-slate-400">Continuous Monitoring</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                30+
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1">Tier-1 OEM Partners</span>
              <span className="text-[11px] text-slate-400">Authorized Integrations</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                24/7
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1">Dubai Rapid Dispatch</span>
              <span className="text-[11px] text-slate-400">Certified Field Engineers</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

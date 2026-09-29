"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Wrench,
  Building,
  Store,
  Hotel,
  Factory,
  Landmark,
  Sparkles,
  Layers
} from "lucide-react";
import Logo from "./Logo";

export default function AboutSection() {
  const lifecycleSteps = [
    { num: "01", name: "Designing", desc: "Custom architectural planning, site surveys & engineering feasibility assessments", tag: "Discovery" },
    { num: "02", name: "Supplying", desc: "Procuring authentic OEM enterprise hardware, servers & genuine software licenses", tag: "Procurement" },
    { num: "03", name: "Installing", desc: "Precision structured cabling, rack assembly, cable tagging & physical deployment", tag: "Implementation" },
    { num: "04", name: "Commissioning", desc: "System configuration, zero-trust security hardening, stress testing & certified handover", tag: "Validation" },
    { num: "05", name: "24/7 SLA Support", desc: "Continuous monitoring, preventative maintenance & rapid on-site resolution across Dubai", tag: "Governance" },
  ];

  const sectors = [
    { name: "Corporate & Finance", icon: Building, desc: "Headquarters, financial institutions & modern enterprise offices" },
    { name: "Retail & Malls", icon: Store, desc: "Shopping centers, retail chains & POS environments" },
    { name: "Hospitality & F&B", icon: Hotel, desc: "Luxury hotels, beach resorts & high-end F&B venues" },
    { name: "Industrial & Logistics", icon: Factory, desc: "Warehouses, logistics yards & manufacturing hubs" },
    { name: "Government & Public", icon: Landmark, desc: "Public sector entities, utilities & sovereign institutions" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-b border-sky-950/60">
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official UAE Registered Technology Provider</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">CATS COMPUTERS L.L.C</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Empowering modern enterprises with resilient infrastructure, impenetrable cybersecurity, and seamless digital transformation across Dubai & the UAE.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
          
          {/* Left Visual Card with Brand & Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="cyber-glass rounded-3xl p-8 border border-sky-500/30 relative overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <Logo size="lg" showTagline={true} className="mb-6" />

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                <strong className="text-white font-semibold">CATS COMPUTERS L.L.C</strong> is a premier Dubai technology solutions company delivering end-to-end IT services across infrastructure, enterprise networking, cybersecurity, cloud, and bespoke software development.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950/90 border border-sky-800/50 shadow-inner">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Certified Multi-Domain Engineers</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Cisco, Fortinet, Microsoft, Dell, HPE & AWS certified technical experts.</p>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 p-4 rounded-2xl bg-slate-950/90 border border-sky-800/50 shadow-inner">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                    <Wrench className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Turnkey UAE Execution</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Design, supply, installation, testing & 24/7 SLA under one accountable roof.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Detailed Narrative & Sector Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="cyber-glass rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                Technical Excellence in Action
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Specialized in Mission-Critical Technology Systems
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                We specialize in <strong>designing, supplying, installing, and commissioning</strong> advanced technology systems tailored to each client’s operational requirements, scale, and long-term vision.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                With a strong focus on <strong>quality, innovation, and reliability</strong>, we help organizations modernize their IT environments, enhance cybersecurity defenses, and achieve seamless digital operations.
              </p>

              {/* Sectors We Serve */}
              <div className="border-t border-slate-800/80 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Key Sectors We Actively Empower in UAE</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sectors.map((sec, idx) => {
                    const Icon = sec.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900 transition-all flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-200 transition-colors">{sec.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5-Step Delivery Lifecycle Pipeline */}
        <div className="cyber-glass rounded-3xl p-8 sm:p-10 border border-sky-500/25 shadow-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Engineering Lifecycle</span>
            </span>
            <h3 className="text-2xl font-semibold text-white mt-1">End-to-End Turnkey Delivery Pipeline</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {lifecycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-slate-900 transition-all relative flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-mono">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-sky-950 text-cyan-300 border border-sky-800 font-mono">
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">{step.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-medium text-cyan-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ISO & Quality Assured</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

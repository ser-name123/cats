"use client";

import React, { useState } from "react";
import { Building2, Store, Hotel, Factory, Landmark, CheckCircle, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

interface IndustriesSectionProps {
  onSelectSector: (sectorName: string) => void;
}

export default function IndustriesSection({ onSelectSector }: IndustriesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const industries = [
    {
      id: "corporate",
      name: "Corporate & Finance",
      icon: Building2,
      tag: "Enterprise Grade",
      desc: "Secure workstation fleets, high-availability virtualization clusters, zero-trust network access, and redundant disaster recovery systems.",
      solutions: [
        "Executive boardroom audio-visual & 4K video conferencing",
        "High-density secure enterprise Wi-Fi 6/7 & VLAN isolation",
        "Encrypted corporate cloud storage & endpoint DLP security",
        "24/7 proactive helpdesk & managed IT infrastructure support"
      ]
    },
    {
      id: "retail",
      name: "Retail & Shopping Malls",
      icon: Store,
      tag: "POS & Footfall",
      desc: "Smart retail technology, unified POS connectivity, AI footfall video analytics, customer guest Wi-Fi portals, and multi-store networking.",
      solutions: [
        "4K SIRA-compliant CCTV & anti-theft surveillance systems",
        "Cloud POS terminals, barcode scanners & thermal printers",
        "Guest Wi-Fi marketing analytics & compliant captive portals",
        "Multi-branch SD-WAN linking retail outlets to HQ inventory"
      ]
    },
    {
      id: "hospitality",
      name: "Hospitality & F&B",
      icon: Hotel,
      tag: "Guest Experience",
      desc: "Guest room automation, ultra-fast hospitality Wi-Fi, digital signage, kitchen order routing, and hotel property management integrations.",
      solutions: [
        "High-density Wi-Fi capable of handling thousands of concurrent devices",
        "IPTV, smart room control & digital concierge high-speed networks",
        "Biometric staff time-attendance & kitchen display systems",
        "24/7 emergency response to prevent guest operational disruptions"
      ]
    },
    {
      id: "industrial",
      name: "Industrial & Logistics",
      icon: Factory,
      tag: "Rugged Infrastructure",
      desc: "Ruggedized network switching, long-range wireless barcode readers, warehouse surveillance, automated boom barriers, and asset tracking.",
      solutions: [
        "Fiber optic backbones across multi-acre logistics & port yards",
        "Industrial-grade outdoor access points & thermal detection cameras",
        "Vehicle ANPR (Automatic Number Plate Recognition) security gates",
        "IoT sensor networks for temperature & cold-chain environment monitoring"
      ]
    },
    {
      id: "government",
      name: "Government & Public Sector",
      icon: Landmark,
      tag: "Compliance & Security",
      desc: "Air-gapped security frameworks, strict data sovereignty compliance, hardened network perimeters, and certified audited infrastructure.",
      solutions: [
        "Zero-Trust cybersecurity architecture & regular compliance audits",
        "Secure access control speed turnstiles & biometric authorization",
        "Redundant on-premise data centers with encrypted local storage",
        "Strict compliance with UAE national cybersecurity regulatory standards"
      ]
    }
  ];

  const current = industries[activeIdx];

  return (
    <section id="industries" className="py-24 bg-slate-950 relative overflow-hidden border-t border-sky-950/60">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/90 border border-sky-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cross-Industry Proven Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Empower in Dubai & UAE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering scalable, secure, and future-ready technology solutions tailored to specific commercial operational needs and compliance mandates.
          </p>
        </div>

        {/* Industry Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isSelected = activeIdx === i;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIdx(i)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-br from-sky-950 to-slate-900 border-sky-400 text-white shadow-xl shadow-sky-500/25 scale-[1.02]"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <Icon className={`w-6 h-6 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                  {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <span className="text-xs sm:text-sm font-semibold block">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Cockpit */}
        <div className="cyber-glass rounded-3xl p-8 sm:p-12 border border-sky-500/30 shadow-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-700/60">
                {current.tag}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                Tailored IT Infrastructure for {current.name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.desc}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3.5">
                Key Specialized Sector Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.solutions.map((sol, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-sky-500/40 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{sol}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onSelectSector(current.name)}
                className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-600/35 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Request {current.name} Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-sky-800/50 shadow-inner">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Compliance & Readiness</span>
                </div>
                <h4 className="text-white font-bold text-base mt-1">Certified for UAE & Dubai Operations</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  All installations comply with Dubai Municipality, SIRA (Security Industry Regulatory Agency), Civil Defense, and UAE Telecommunications regulations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/90 border border-sky-800/50 shadow-inner">
                <div className="flex items-center gap-2 text-sky-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Rapid Response SLA</span>
                </div>
                <h4 className="text-white font-bold text-base mt-1">Guaranteed On-Site Presence</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Our strategic base in Bur Dubai allows our certified mobile field engineers to reach any commercial site across Dubai within agreed SLA turnaround times.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

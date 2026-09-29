"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Network,
  ShieldCheck,
  Lock,
  Cloud,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Server,
  Wrench,
  Video,
  KeyRound,
  HardDrive,
  PhoneCall,
  Tv,
  CheckCircle2,
  Layers,
  MessageSquare
} from "lucide-react";
import { detailedServices } from "@/data/services";

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  // Show top 8 flagship services on the home page
  const displayServices = detailedServices.slice(0, 8);
  const [activeServiceId, setActiveServiceId] = useState<string>(displayServices[0].id);

  const activeService = detailedServices.find(s => s.id === activeServiceId) || displayServices[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "it-infrastructure": return Cpu;
      case "networking-structured-cabling": return Network;
      case "cybersecurity-solutions": return Lock;
      case "cloud-virtualization": return Cloud;
      case "software-automation": return Sparkles;
      case "it-support-managed-services": return Wrench;
      case "cctv-security-systems": return Video;
      case "access-control-time-attendance": return KeyRound;
      case "servers-storage-backup": return HardDrive;
      case "annual-maintenance-contract": return ShieldCheck;
      case "telephony-ip-pbx": return PhoneCall;
      case "audio-video-conferencing": return Tv;
      default: return Server;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden border-t border-sky-950/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-25 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/90 border border-sky-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Master Enterprise Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Turnkey <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">IT Solutions Portfolio</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            From structured fiber cabling & server racks to SIRA-approved 4K IP CCTV, Zero-Trust cybersecurity defense, and custom cloud development in Dubai, UAE.
          </p>
        </div>

        {/* 8 Flagship Services Grid (4x2 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {displayServices.map((srv, idx) => {
            const Icon = getServiceIcon(srv.id);
            const isSelected = activeServiceId === srv.id;
            return (
              <div
                key={srv.id}
                data-tilt
                onClick={() => setActiveServiceId(srv.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? "bg-sky-950/85 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.3)] scale-[1.02]"
                    : "bg-slate-900/70 border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/95"
                }`}
              >
                {/* Glowing top line when active */}
                {isSelected && (
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]" : "bg-slate-800/90 text-sky-400 border border-slate-700/50"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40">
                      #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-white text-sm leading-snug mb-1.5 group-hover:text-cyan-200 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                  <span className={isSelected ? "text-cyan-300 font-semibold" : "text-slate-400 group-hover:text-cyan-400"}>
                    {isSelected ? "Active Specification" : "View Details"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-cyan-300 translate-x-1" : "text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA Ribbon */}
        <div className="flex items-center justify-center mb-16">
          <Link
            href="/services"
            className="relative group overflow-hidden rounded-2xl p-px font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-sky-600/25 hover:shadow-sky-500/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-2xl animate-shimmer" />
            <span className="relative flex items-center gap-2 px-8 py-3.5 bg-slate-950 rounded-[15px] text-white transition-all group-hover:bg-slate-900/80">
              <Layers className="w-4 h-4 text-cyan-300" />
              <span>View All 12 Services & Engineering Specs</span>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Detailed Interactive Engineering Cockpit */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/35 shadow-[0_0_50px_rgba(2,132,199,0.18)] relative backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeService.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-cyan-400/90 font-medium text-xs sm:text-sm mt-1">
                  {activeService.tagline}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                  {activeService.description}
                </p>
              </div>

              {/* 3 Key Highlights Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeService.keyHighlights.map((hl, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{hl.label}</p>
                    <p className="text-xs font-bold text-cyan-300 mt-0.5">{hl.value}</p>
                  </div>
                ))}
              </div>

              {/* Features Checklist */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Engineering Scope & Deliverables:
                </p>
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-600/40 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href={`/services/${activeService.id}`}
                  className="px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-cyan-300 bg-sky-950/80 hover:bg-sky-900 border border-sky-600/50 transition-all flex items-center gap-2"
                >
                  <span>Full Tech Specs & OEM</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </Link>

                <a
                  href="https://wa.me/971552273378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/60 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Engineer</span>
                </a>
              </div>
            </div>

            {/* Right Media Preview Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-sky-500/35 shadow-[0_0_35px_rgba(56,189,248,0.2)] group">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* HUD Corner Tech Brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/92 backdrop-blur-md border border-white/15 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">CATS COMPUTERS L.L.C</p>
                      <p className="text-[11px] text-cyan-300 font-mono">Certified Supply & Commissioning</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded border border-emerald-700/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Turnkey Dubai SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

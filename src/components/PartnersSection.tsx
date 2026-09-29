"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Award } from "lucide-react";

export default function PartnersSection() {
  // 8 Flagship Tier-1 Solution Partners
  const top8Partners = [
    {
      name: "HUAWEI eKit",
      tag: "Enterprise Routing & Switches",
      category: "Networking & Cabling",
      badge: "Elite Partner Award",
      highlight: "Official UAE Territory Distribution Partner"
    },
    {
      name: "CISCO",
      tag: "Core Routing & Catalyst",
      category: "Networking & Infrastructure",
      badge: "Tier-1 Partner",
      highlight: "Certified Enterprise Core Networks"
    },
    {
      name: "FORTINET",
      tag: "FortiGate NGFW & UTM",
      category: "Cybersecurity Defense",
      badge: "Security Specialist",
      highlight: "Zero-Trust Threat Shield & Firewalls"
    },
    {
      name: "DELL Technologies",
      tag: "PowerEdge Servers & Storage",
      category: "Data Center & Storage",
      badge: "Enterprise Partner",
      highlight: "High-Performance Compute & SAN Arrays"
    },
    {
      name: "Microsoft",
      tag: "Azure Cloud & M365",
      category: "Cloud & Productivity",
      badge: "Cloud Solutions",
      highlight: "Hybrid Cloud Architecture & Licensing"
    },
    {
      name: "HIKVISION",
      tag: "4K SIRA IP CCTV & Surveillance",
      category: "Physical Security",
      badge: "SIRA Approved",
      highlight: "Ultra HD Video Surveillance & AI Access"
    },
    {
      name: "SOPHOS",
      tag: "Synchronized Security & EDR",
      category: "Endpoint Protection",
      badge: "Cyber Defense",
      highlight: "AI-Powered Threat Protection"
    },
    {
      name: "Yeastar",
      tag: "P-Series Cloud & IP PBX",
      category: "Unified Telecommunications",
      badge: "Voice & VoIP",
      highlight: "Enterprise SIP PBX & Teams Integration"
    }
  ];

  const allBrands = [
    "HUAWEI eKit", "CISCO", "Ruijie", "Reyee", "Aruba", "TP-Link", "Ubiquiti",
    "Fortinet", "Sophos", "SonicWall", "Kaspersky", "ESET", "Microsoft",
    "Google Workspace", "AWS", "Dell Technologies", "HPE", "Lenovo", "QNAP",
    "Synology", "Veeam", "Grandstream", "Yeastar", "Avaya", "Logitech",
    "Yealink", "Poly", "Uniview UNV", "Hikvision", "Dahua", "IMOU"
  ];

  return (
    <section id="partners" className="py-24 bg-slate-900/80 relative overflow-hidden border-t border-b border-sky-950/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Authorized Global OEM Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Tier-1 Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Solution Partners</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We partner directly with world-leading OEMs to engineer, supply, deploy, and maintain mission-critical IT infrastructure across Dubai and the UAE.
          </p>
        </div>

        {/* 8 Flagship Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {top8Partners.map((partner, pIdx) => (
            <div
              key={pIdx}
              className="p-6 rounded-3xl bg-slate-950/85 border border-slate-800 hover:border-cyan-400/60 hover:bg-slate-900/90 shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle hover glow layer */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

              <div>
                {/* Top Row: Beacon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  <span className="text-[10px] font-mono text-cyan-300 font-semibold uppercase bg-sky-950 px-2.5 py-0.5 rounded-md border border-sky-800 flex items-center gap-1">
                    {partner.badge === "Elite Partner Award" && <Award className="w-3 h-3 text-cyan-300" />}
                    <span>{partner.badge}</span>
                  </span>
                </div>

                {/* Partner Name & Tag */}
                <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs font-semibold text-sky-400/90 mt-1">
                  {partner.tag}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {partner.highlight}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Authorized UAE Supply</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  #{String(pIdx + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Partners CTA Ribbon */}
        <div className="flex items-center justify-center mb-16">
          <Link
            href="/partners"
            className="relative group overflow-hidden rounded-2xl p-px font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-sky-600/25 hover:shadow-sky-500/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-2xl animate-shimmer" />
            <span className="relative flex items-center gap-2 px-8 py-3.5 bg-slate-950 rounded-[15px] text-white transition-all group-hover:bg-slate-900/80">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>View All 30+ Solution Partners & OEM Ecosystem</span>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Multi-Vendor Marquee Ecosystem */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/95 border border-sky-900/50 shadow-xl overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Vendor Certified Hardware & Software Ecosystem</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {allBrands.map((brand, bIdx) => (
              <span
                key={bIdx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:scale-105 transition-all shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

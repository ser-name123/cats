"use client";

import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  CheckCircle2,
  Award,
  Sparkles,
  Lock,
  TrendingUp,
  GraduationCap
} from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "Professional Excellence",
      subtitle: "Certified Multi-Domain Expertise",
      icon: GraduationCap,
      color: "from-sky-500 to-blue-600",
      description:
        "Our team consists of certified experts committed to delivering exceptional results. We invest in continuous training, certifications, and skill development to stay ahead of industry standards.",
      points: [
        "Certified Cisco, Microsoft, Fortinet, Dell & AWS engineers",
        "Continuous technical skill benchmarking & OEM vendor training",
        "Strict adherence to international IT engineering best practices"
      ]
    },
    {
      title: "Security First",
      subtitle: "Zero-Trust Threat Defense",
      icon: Lock,
      color: "from-cyan-500 to-teal-600",
      description:
        "In a world of increasing cyber threats, we prioritize security in every solution we design and deliver — protecting client data, systems, perimeters, and operations at all times.",
      points: [
        "Zero-Trust security architecture embedded in every deployment",
        "Airtight data privacy, segmentation and encryption standards",
        "Continuous proactive vulnerability assessment and mitigation"
      ]
    },
    {
      title: "Commitment to Long-Term Success",
      subtitle: "Enduring Scalable Growth",
      icon: TrendingUp,
      color: "from-blue-600 to-indigo-600",
      description:
        "We don't just implement solutions — we sustain and support them. Our goal is to empower clients to scale effortlessly with technology that adapts to future growth.",
      points: [
        "Future-proof infrastructure designed for seamless node expansion",
        "Lifecycle hardware & software technology roadmap planning",
        "Ongoing consultative reviews & proactive upgrade recommendations"
      ]
    },
    {
      title: "Integrity & Transparency",
      subtitle: "Honesty & Zero Compromise",
      icon: ShieldCheck,
      color: "from-sky-400 to-cyan-500",
      description:
        "We operate with honesty, accountability, and clear communication in every project. Clients trust us because we deliver exactly what we promise — with no shortcuts and no hidden fees.",
      points: [
        "Unbiased genuine OEM hardware & licensing recommendations",
        "Transparent milestone pricing with zero hidden surcharges",
        "Full accountability on delivered SLA and uptime commitments"
      ]
    },
    {
      title: "Customer-Centric Approach",
      subtitle: "Partnerships Over Transactions",
      icon: HeartHandshake,
      color: "from-indigo-500 to-purple-600",
      description:
        "Every solution we architect begins with understanding the client’s workflows, challenges, and long-term targets. We prioritize relationships and build partnerships that endure.",
      points: [
        "Customized engineering architecture tailored to specific workflows",
        "Dedicated UAE account managers & fast-track escalation lines",
        "Proactive post-handover optimization and performance tuning"
      ]
    },
    {
      title: "Innovation & Improvement",
      subtitle: "Staying Ahead of the Curve",
      icon: Lightbulb,
      color: "from-cyan-400 to-sky-500",
      description:
        "Technology evolves rapidly — and so do we. We continuously adopt new tools, cloud platforms, and automation frameworks to ensure clients always benefit from the latest innovations.",
      points: [
        "Adoption of cutting-edge AI, cloud & telemetry automation",
        "Continuous benchmarking against global IT performance metrics",
        "Modular infrastructure allowing frictionless next-gen upgrades"
      ]
    },
    {
      title: "Quality & Reliability",
      subtitle: "Engineered to Endure",
      icon: Award,
      color: "from-sky-500 to-blue-700",
      description:
        "We maintain strict quality controls across all services. From structured cabling to cybersecurity and server clusters, we ensure every deployment is stable, secure, and built to last.",
      points: [
        "Original Tier-1 OEM parts, enterprise servers & genuine software",
        "Exhaustive pre-handover stress testing & validation",
        "Backed by strict 99.9% uptime and rapid Dubai emergency SLA"
      ]
    }
  ];

  const firstRow = values.slice(0, 4);
  const secondRow = values.slice(4, 7);

  const renderCard = (val: typeof values[0], index: number) => {
    const Icon = val.icon;
    return (
      <div
        key={index}
        className="w-full cyber-glass cyber-glass-hover rounded-3xl p-6 border border-sky-500/20 relative overflow-hidden flex flex-col justify-between shadow-xl group bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0 text-white group-hover:scale-110 transition-transform`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 block">
                {val.subtitle}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5 group-hover:text-cyan-200 transition-colors">
                {val.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed mb-4">
            {val.description}
          </p>

          {/* Bullet points */}
          <div className="space-y-2 pt-3 border-t border-slate-800/80">
            {val.points.map((pt, pIdx) => (
              <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px]">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="text-[11px] text-slate-400">Commitment to Excellence</span>
          <span className="text-cyan-300 font-bold font-mono text-[11px] bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
            0{index + 1} / 07
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="values" className="py-24 bg-slate-900/70 relative overflow-hidden border-t border-sky-950/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Foundations of Our Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Our 7 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Values & Commitments</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Guiding how we engineer systems, prioritize client data security, and build lasting corporate partnerships across the UAE.
          </p>
        </div>

        {/* First Row: 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRow.map((val, idx) => renderCard(val, idx))}
        </div>

        {/* Second Row: 3 Centered Cards on Desktop */}
        <div className="flex flex-wrap justify-center gap-6">
          {secondRow.map((val, idx) => (
            <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex">
              {renderCard(val, idx + 4)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

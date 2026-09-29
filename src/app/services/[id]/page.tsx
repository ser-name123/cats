import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { detailedServices, solutionPartners } from "@/data/services";
import PageHeader from "@/components/PageHeader";
import ServiceDetailClient from "./ServiceDetailClient";
import RelatedServices from "@/components/sections/RelatedServices";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import { serviceFaqs } from "@/data/pageContent";
import {
  Server,
  Layers,
  Wrench,
  ArrowRight,
  Cpu,
  PhoneCall,
  Check
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return detailedServices.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = detailedServices.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | CATS COMPUTERS L.L.C",
    };
  }

  return {
    title: `${service.title} | CATS COMPUTERS L.L.C Dubai`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = detailedServices.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  // Find relevant OEM partners based on category
  const relevantPartnerCategory = solutionPartners.find((p) => {
    if (service.category === "infrastructure" && p.category.includes("Infrastructure")) return true;
    if (service.category === "networking" && p.category.includes("Networking")) return true;
    if (service.category === "security" && (p.category.includes("Security") || p.category.includes("Cybersecurity"))) return true;
    if (service.category === "cloud" && p.category.includes("Cloud")) return true;
    if (service.category === "telecom" && (p.category.includes("Telephony") || p.category.includes("Conferencing"))) return true;
    return false;
  }) || solutionPartners[0];

  // Related other services
  const relatedServices = detailedServices
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Dynamic Subpage Hero */}
      <PageHeader
        badge={service.badge}
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <div className="site-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Overview Card */}
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-sky-500/20 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                <Cpu className="w-4 h-4" />
                <span>Enterprise Architecture Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Engineered for High Reliability & Zero-Downtime Operations
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                {service.keyHighlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-sky-950 flex flex-col justify-between">
                    <span className="text-xs text-slate-400 uppercase font-medium">{item.label}</span>
                    <span className="text-sm sm:text-base font-bold text-cyan-300 mt-1">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Technical Capabilities & Features */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">
                <Layers className="w-4 h-4" />
                <span>Core Engineering Specifications</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                What&apos;s Included in our {service.title} Deployments
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/60 hover:border-sky-500/40 transition-colors group"
                  >
                    <div className="p-1 rounded-lg bg-sky-950 text-cyan-400 shrink-0 mt-0.5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Turnkey 4-Step Engineering Lifecycle */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                <Wrench className="w-4 h-4" />
                <span>Deployment Methodology</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Turnkey Execution & Quality Assurance Pipeline
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    step: "01",
                    title: "Site Survey & Engineering Assessment",
                    desc: "Comprehensive on-ground audit in Dubai/UAE to map physical requirements, bandwidth loads, and security baselines."
                  },
                  {
                    step: "02",
                    title: "Bill of Materials (BOM) & Architecture",
                    desc: "Detailed blueprint design, OEM hardware selection, and guaranteed transparent UAE pricing proposal."
                  },
                  {
                    step: "03",
                    title: "Certified Installation & Commissioning",
                    desc: "Executed by Dubai Police SIRA / OEM certified engineers with precision cable dressing and firmware hardening."
                  },
                  {
                    step: "04",
                    title: "Fluke/OTDR Audit & 24/7 SLA Handover",
                    desc: "Complete documentation, certification test logs, staff onboarding, and activation of 24/7 Bur Dubai NOC support."
                  }
                ].map((st, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col gap-2 relative">
                    <span className="text-2xl font-mono font-bold text-sky-400/40">{st.step}</span>
                    <h4 className="text-sm sm:text-base font-bold text-white">{st.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Supported OEM Technologies */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-xl">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                  <Server className="w-4 h-4" />
                  <span>Authorized OEM Ecosystem</span>
                </div>
                <Link
                  href="/partners"
                  className="text-xs text-sky-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                >
                  <span>View All Partners</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Tier-1 Hardware & Software Partners Deployed
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {relevantPartnerCategory.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white">{partner.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {partner.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Client Interactive Quote CTA Box */}
            <ServiceDetailClient serviceTitle={service.title} />

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Direct Engineering Dispatch</span>
              </h4>
              <p className="text-xs text-slate-300">
                Need urgent site assessment or consultation at your Dubai office? Speak directly with our project leads:
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <a
                  href="tel:+97142273378"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500 text-slate-200 transition-colors"
                >
                  <span className="text-slate-400">Dubai Landline:</span>
                  <span className="font-semibold text-cyan-400">+971 4 227 3378</span>
                </a>
                <a
                  href="https://wa.me/971552273378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500 text-slate-200 transition-colors"
                >
                  <span className="text-slate-400">WhatsApp 24/7:</span>
                  <span className="font-semibold text-emerald-400">+971 55 227 3378</span>
                </a>
              </div>
            </div>

            {/* Compliance Badges Sidebar */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-sky-950 shadow-xl space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Official UAE Credentials
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Commercial Reg (CR):</span>
                  <span className="font-mono font-bold text-white">679611</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Dubai Chamber (DCCI):</span>
                  <span className="font-mono font-bold text-white">1912384</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">SIRA Security:</span>
                  <span className="font-semibold text-cyan-300">Approved Specs</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Federal Tax (VAT-TRN):</span>
                  <span className="font-mono text-indigo-300">100069325700003</span>
                </div>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Explore Other Services
              </h4>
              <div className="space-y-2">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/services/${rel.id}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 hover:border-sky-500/60 hover:bg-slate-900 transition-all text-xs group"
                  >
                    <span className="font-medium text-slate-300 group-hover:text-cyan-300 truncate mr-2">
                      {rel.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}

                <Link
                  href="/services"
                  className="block text-center py-2.5 mt-3 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-sky-950/40 rounded-xl border border-sky-800/40 transition-colors"
                >
                  View All 12 Services →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Related services (same category first) */}
      <RelatedServices current={service} all={detailedServices} />

      {/* Service-specific FAQs */}
      <FaqAccordion
        faqs={serviceFaqs(service)}
        title="Questions About"
        highlight={service.title}
        description="Answers to what clients usually ask about this service."
      />

      {/* CTA */}
      <CtaBanner
        eyebrow={service.badge}
        title={`Ready to get started with ${service.title}?`}
        description="Share your requirement and our engineers will get back with a tailored proposal, timeline and quotation."
        quoteFor={service.title}
      />
    </div>
  );
}

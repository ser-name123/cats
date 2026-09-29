"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import PartnersSection from "@/components/PartnersSection";
import CorporateGallery from "@/components/CorporateGallery";
import { useModal } from "@/context/ModalContext";
import {
  ShieldCheck,
  Award,
  CheckCircle2
} from "lucide-react";
import StatsBand from "@/components/sections/StatsBand";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import { solutionPartners } from "@/data/services";
import { procurementProcess, partnersFaqs } from "@/data/pageContent";

export default function PartnersPage() {
  const { openQuoteModal } = useModal();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Subpage Header */}
      <PageHeader
        badge="Authorized Technology Ecosystem"
        title="Global Technology Partners"
        description="We partner with world-renowned technology manufacturers to deliver authentic, high-performance, and enterprise-grade hardware and software."
        breadcrumbs={[{ label: "Solution Partners" }]}
        actionButton={{
          label: "Inquire OEM Hardware",
          onClick: () => openQuoteModal("OEM Hardware Supply & Licensing"),
        }}
      />

      {/* Main Partners Section */}
      <PartnersSection />

      {/* Official Huawei Elite Partner Award & Delegations Gallery */}
      <CorporateGallery />

      {/* OEM Partnership Assurance & Certification Strip */}
      <section className="py-16 bg-slate-950 border-t border-sky-950/60">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              Genuine Hardware Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why OEM Authorized Supply Matters
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Every server, switch, firewall, and camera supplied by CATS COMPUTERS L.L.C is sourced directly from certified authorized distribution channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950 text-cyan-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">100% Valid UAE Warranty</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct manufacturer warranties with guaranteed RMA replacement support, official firmware security updates, and authorized repair centers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Certified Field Engineers</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our in-house engineering team holds official certifications from Cisco, Fortinet, Microsoft, Huawei, and Sophos for compliant installations.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Genuine Software Licensing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Legitimate CSP licenses for Microsoft 365, Azure, Veeam, and FortiGuard subscriptions with full compliance protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner ecosystem numbers */}
      <StatsBand
        stats={[
          { value: solutionPartners.flatMap((c) => c.partners).length, suffix: "+", label: "Technology Brands", sub: "Across all domains" },
          { value: solutionPartners.length, label: "Solution Categories", sub: "Network to conferencing" },
          { value: 100, suffix: "%", label: "Vendor-Neutral", sub: "Right fit, not fixed brand" },
          { value: 24, suffix: "/7", label: "RMA Coordination", sub: "For AMC clients" },
        ]}
      />

      {/* Procurement process */}
      <ProcessTimeline
        badge="Procurement Process"
        title="How We Source the"
        highlight="Right Technology"
        description="From requirement to warranty support, we manage the entire hardware and licensing lifecycle."
        steps={procurementProcess}
      />

      {/* FAQs */}
      <FaqAccordion faqs={partnersFaqs} description="Questions about brands, warranty and licensing." />

      {/* CTA */}
      <CtaBanner
        eyebrow="Need a Specific Brand?"
        title="Get a vendor-neutral recommendation"
        description="Tell us what you need to achieve and we will compare the best-fit options across our partner brands."
        quoteFor="OEM Hardware & Licensing"
        buttonLabel="Request Brand Comparison"
      />
    </div>
  );
}

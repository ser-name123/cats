"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import IndustriesSection from "@/components/IndustriesSection";
import { useModal } from "@/context/ModalContext";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import BrandMarquee from "@/components/sections/BrandMarquee";
import { sectorOnboarding, industriesFaqs } from "@/data/pageContent";

export default function IndustriesPage() {
  const { openQuoteModal } = useModal();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Subpage Header */}
      <PageHeader
        badge="Industry-Tailored IT Solutions"
        title="Target Industries We Empower"
        description="From corporate offices to hospitality, retail, healthcare, and logistics — we tailor infrastructure, security, and networking architectures to specific sector compliance."
        breadcrumbs={[{ label: "Industries" }]}
        actionButton={{
          label: "Inquire for Your Sector",
          onClick: () => openQuoteModal("Industry Specific IT Architecture"),
        }}
      />

      {/* Main Interactive Industries Section */}
      <IndustriesSection onSelectSector={(sector) => openQuoteModal(`${sector} IT Infrastructure`)} />

      {/* Compliance & Standards Callout */}
      <section className="py-16 bg-slate-950 border-t border-sky-950/60">
        <div className="site-container">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                Dubai Regulatory Compliance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                SIRA, Dubai Municipality & Ministry Compliant Deployments
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Whether opening a new branch in DIFC, a warehouse in Dubai South, or a clinic in Dubai Healthcare City, our solutions pass governmental compliance audits smoothly.
              </p>
            </div>

            <button
              onClick={() => openQuoteModal("Compliance & Licensing Audit")}
              className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all cursor-pointer"
            >
              Request Compliance Audit
            </button>
          </div>
        </div>
      </section>

      {/* Sector onboarding */}
      <ProcessTimeline
        badge="Sector Onboarding"
        title="Tailored Rollouts That"
        highlight="Keep You Operating"
        description="We plan around how your industry actually works, so installations never get in the way of business."
        steps={sectorOnboarding}
      />

      {/* Service coverage */}
      <ServiceAreas />

      {/* Technology brands */}
      <BrandMarquee title="Trusted Technologies Across Every Sector" />

      {/* FAQs */}
      <FaqAccordion faqs={industriesFaqs} description="How we adapt our solutions to different sectors." />

      {/* CTA */}
      <CtaBanner
        eyebrow="Your Sector, Your Requirements"
        title="Let's design IT around how your business runs"
        description="Share your industry and scale, and our engineers will propose an architecture built for your daily operations."
        quoteFor="Industry Specific IT Architecture"
      />
    </div>
  );
}

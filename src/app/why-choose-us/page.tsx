"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useModal } from "@/context/ModalContext";
import {
  Check,
  X
} from "lucide-react";
import StatsBand from "@/components/sections/StatsBand";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import EngagementModels from "@/components/sections/EngagementModels";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { detailedServices as allServices, solutionPartners } from "@/data/services";
import { deliveryProcess, whyFaqs, uaeEmirates } from "@/data/pageContent";

export default function WhyChooseUsPage() {
  const { openQuoteModal } = useModal();

  const comparisonData = [
    {
      feature: "Project Delivery Scope",
      cats: "100% Turnkey (Survey, Design, Hardware, Cabling, SIRA & Commissioning)",
      others: "Fragmented vendors requiring multiple sub-contractors and separate coordination",
    },
    {
      feature: "Hardware Authenticity",
      cats: "100% Genuine Tier-1 OEM Direct with Valid Manufacturer UAE Warranty",
      others: "Grey market or refurbished hardware with dubious warranty coverage",
    },
    {
      feature: "Onsite Emergency Response",
      cats: "Guaranteed 2-4 Hour Emergency Onsite Engineer Dispatch in Dubai/Sharjah/Ajman",
      others: "Next business day or best-effort delayed response",
    },
    {
      feature: "Regulatory Compliance",
      cats: "Full Dubai Police SIRA, Dubai Municipality & TDRA Certification Support",
      others: "Often lack SIRA engineering certifications, causing audit failures",
    },
    {
      feature: "Post-Implementation Support",
      cats: "Dedicated 24/7/365 NOC Helpdesk, Remote Monitoring & Comprehensive AMC Tiers",
      others: "Basic 9-to-5 ticketing with no proactive monitoring or hardware standby",
    },
    {
      feature: "Pricing Transparency",
      cats: "Fixed-Price Detailed Bill of Materials (BOM) with Zero Hidden Surcharges",
      others: "Frequent cost overruns, unstated licensing fees, and scope creeps",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Subpage Header */}
      <PageHeader
        badge="Enterprise Trust & Reliability"
        title="Why Choose CATS COMPUTERS L.L.C"
        description="We combine engineering excellence, certified OEM partnerships, and a rapid 24/7 Dubai response SLA to provide worry-free IT environments."
        breadcrumbs={[{ label: "Why Choose Us" }]}
        actionButton={{
          label: "Book Free Site Survey",
          onClick: () => openQuoteModal("Onsite IT Assessment & Survey"),
        }}
      />

      {/* 6 Core Value Pillars */}
      <WhyChooseUs />

      {/* Head-to-Head Comparison Matrix */}
      <section className="py-20 bg-slate-950/80 border-t border-sky-950/60">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              Competitive Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              CATS COMPUTERS L.L.C vs Traditional IT Vendors
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              See why leading corporate offices, hotels, hospitals, and retail enterprises in Dubai partner with us.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-sky-500/20 shadow-2xl bg-slate-900/60 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-xs uppercase tracking-wider text-slate-400">
                  <th className="p-5 font-semibold">Evaluation Criteria</th>
                  <th className="p-5 font-bold text-cyan-300 bg-sky-950/40 border-x border-sky-800/40">
                    CATS COMPUTERS L.L.C
                  </th>
                  <th className="p-5 font-semibold text-slate-400">Traditional IT Providers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-medium text-white max-w-xs">{row.feature}</td>
                    <td className="p-5 font-semibold text-cyan-200 bg-sky-950/20 border-x border-sky-800/30">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.cats}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-sky-950/90 via-slate-900 to-slate-950 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">
                Ready to upgrade your enterprise infrastructure?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact our Dubai team today for a free on-site audit and consultation.
              </p>
            </div>

            <button
              onClick={() => openQuoteModal("Enterprise IT Assessment")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/20 hover:brightness-110 transition-all cursor-pointer shrink-0"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <StatsBand
        stats={[
          { value: allServices.length, label: "Services Under One Roof", sub: "One vendor, one contract" },
          { value: solutionPartners.flatMap((c) => c.partners).length, suffix: "+", label: "OEM Brands", sub: "Vendor-neutral advice" },
          { value: uaeEmirates.length, label: "Emirates Served", sub: "From our Bur Dubai base" },
          { value: 24, suffix: "/7", label: "AMC Support", sub: "Priority response" },
        ]}
      />

      {/* Proven process */}
      <ProcessTimeline
        badge="Proven Process"
        title="A Clear Path From"
        highlight="Idea to Handover"
        description="No surprises: each stage has clear deliverables and sign-offs."
        steps={deliveryProcess}
      />

      {/* Engagement models */}
      <EngagementModels title="Support That" highlight="Fits Your Budget" />

      {/* FAQs */}
      <FaqAccordion faqs={whyFaqs} description="What clients usually ask before choosing us." />
    </div>
  );
}

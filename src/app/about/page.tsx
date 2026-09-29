"use client";

import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import CorporateGallery from "@/components/CorporateGallery";
import MissionVisionSection from "@/components/MissionVisionSection";
import ValuesSection from "@/components/ValuesSection";
import { useModal } from "@/context/ModalContext";
import { leadershipTeam } from "@/data/services";
import {
  ShieldCheck,
  Building,
  ReceiptText,
  PhoneCall,
  Mail,
  MessageSquare,
  Clock
} from "lucide-react";
import StatsBand from "@/components/sections/StatsBand";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import { detailedServices as allServices, solutionPartners } from "@/data/services";
import { aboutFaqs, companyJourney, uaeEmirates } from "@/data/pageContent";

export default function AboutPage() {
  const { openBrochureModal } = useModal();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Subpage Header */}
      <PageHeader
        badge="Corporate Profile & Roots"
        title="About CATS COMPUTERS L.L.C"
        description="Established in Bur Dubai, UAE, CATS COMPUTERS L.L.C is a premier enterprise IT infrastructure and technology systems provider delivering end-to-end engineering excellence."
        breadcrumbs={[{ label: "About Us" }]}
        actionButton={{
          label: "Download Corporate Deck",
          onClick: openBrochureModal,
        }}
      />

      {/* Main Corporate Overview & 5-Step Lifecycle */}
      <AboutSection />

      {/* Official Huawei Award & Real Milestone Gallery */}
      <CorporateGallery />

      {/* Corporate Registration & Trust Stats Section */}
      <section className="py-12 border-y border-sky-950/60 bg-slate-950/80">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-950 text-sky-400 shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400">Commercial Registration</span>
                <p className="text-lg font-mono font-bold text-white mt-0.5">CR: 679611</p>
                <span className="text-[11px] text-emerald-400">Government of Dubai</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400">Dubai Chamber Member</span>
                <p className="text-lg font-mono font-bold text-white mt-0.5">DCCI: 1912384</p>
                <span className="text-[11px] text-cyan-300">Verified Member</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-950 text-indigo-400 shrink-0">
                <ReceiptText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400">Federal Tax Authority</span>
                <p className="text-sm font-mono font-bold text-indigo-300 mt-0.5 break-all">100069325700003</p>
                <span className="text-[11px] text-slate-400">Standard 5% VAT</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400">SLA Response Time</span>
                <p className="text-lg font-bold text-emerald-400 mt-0.5">&lt; 15 Mins</p>
                <span className="text-[11px] text-slate-400">2-4hr Onsite Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Team Section */}
      <section className="py-16 bg-[#030712]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Meet the Leaders Powering CATS COMPUTERS L.L.C
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Decades of combined technical and management experience delivering complex technology architectures across the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {leader.image ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)] mb-4 bg-slate-950">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                      {leader.name.charAt(0)}
                    </div>
                  )}

                  <h3 className="text-base font-bold text-white">{leader.name}</h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-0.5">{leader.role}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{leader.department}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <a
                    href={`tel:${leader.mobile.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{leader.mobile}</span>
                  </a>
                  <a
                    href={`https://wa.me/${leader.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp Direct</span>
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{leader.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* 7 Core Corporate Values */}
      <ValuesSection />

      {/* Company at a glance (live counters) */}
      <StatsBand
        stats={[
          { value: allServices.length, label: "Core Service Domains", sub: "Infrastructure to software" },
          { value: solutionPartners.flatMap((c) => c.partners).length, suffix: "+", label: "Technology Brands", sub: "Supplied & supported" },
          { value: uaeEmirates.length, label: "Emirates Covered", sub: "On-site across the UAE" },
          { value: 24, suffix: "/7", label: "Support Availability", sub: "For AMC clients" },
        ]}
      />

      {/* How we work */}
      <ProcessTimeline
        badge="Our Approach"
        title="How We"
        highlight="Work With You"
        description="A simple, accountable way of working that has shaped every engagement since day one."
        steps={companyJourney}
      />

      {/* Service coverage */}
      <ServiceAreas />

      {/* FAQs */}
      <FaqAccordion faqs={aboutFaqs} description="Quick answers about who we are and how we work." />

      {/* Final CTA */}
      <CtaBanner
        title="Partner with a team that stays accountable"
        description="From your first consultation to years of maintenance, CATS COMPUTERS L.L.C remains your single point of contact for IT."
        quoteFor="Corporate IT Partnership"
      />
    </div>
  );
}

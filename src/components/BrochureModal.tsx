"use client";

import React, { useState } from "react";
import {
  X,
  Download,
  CheckCircle2,
  Printer,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText,
  Building
} from "lucide-react";
import Logo from "./Logo";
import { detailedServices, solutionPartners, leadershipTeam } from "@/data/services";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const slides = [
    {
      title: "Cover & Brand Identity",
      render: () => (
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          <Logo size="xl" showTagline={true} className="mb-6" />
          <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950 border border-sky-600/50 text-cyan-300 text-xs font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Capabilities & Technology Profile 2026</span>
          </div>
          <p className="mt-6 max-w-lg text-slate-300 text-sm leading-relaxed">
            Enterprise IT Solutions • Structured Cabling • Cybersecurity • Cloud & Software • SIRA CCTV • Telephony • Audio-Visual Boardrooms
          </p>
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-300">
            <span className="font-semibold text-white">Bur Dubai, UAE</span>
            <span>•</span>
            <span>CR: <strong className="text-cyan-300 font-mono">679611</strong></span>
            <span>•</span>
            <span>DCCI: <strong className="text-cyan-300 font-mono">1912384</strong></span>
            <span>•</span>
            <span>VAT-TRN: <strong className="text-indigo-300 font-mono">100069325700003</strong></span>
          </div>
        </div>
      )
    },
    {
      title: "About Us & Specialization",
      render: () => (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed py-2">
          <div className="p-4 rounded-2xl bg-sky-950/70 border border-sky-800 shadow-inner">
            <h4 className="text-white font-bold text-base mb-1">CATS COMPUTERS L.L.C</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              A premier UAE technology solutions provider delivering turnkey IT services across enterprise infrastructure, structured cabling, cybersecurity, cloud, and bespoke software development.
            </p>
          </div>
          <p>
            We specialize in <strong>designing, supplying, installing, and commissioning</strong> advanced technology systems tailored to each client&apos;s operational requirements and lifestyle.
          </p>
          <p>
            With a strong focus on <strong>quality, innovation, and reliability</strong>, we help organizations modernize their IT environments, enhance zero-trust security, and achieve long-term digital transformation.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <p className="font-semibold text-cyan-400 mb-1">Key Sectors Empowered in UAE:</p>
            <p className="text-slate-300 leading-relaxed">Corporate Offices, Shopping Malls & Retail Chains, Luxury Hospitality, Industrial & Logistics Warehouses, and Government Institutions.</p>
          </div>
        </div>
      )
    },
    {
      title: "Mission, Vision & Objectives",
      render: () => (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 py-2">
          <div className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-800/60 shadow-inner">
            <h5 className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Our Mission</h5>
            <p className="italic text-white text-xs sm:text-sm leading-relaxed">
              &ldquo;To deliver Innovative, Reliable, and Secure Technology Solutions that empower businesses to operate efficiently, adapt quickly, and grow confidently in a rapidly evolving digital world.&rdquo;
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/50 border border-blue-800/60 shadow-inner">
            <h5 className="font-bold text-sky-300 text-xs uppercase tracking-wider mb-1">Our Vision</h5>
            <p className="italic text-white text-xs sm:text-sm leading-relaxed">
              &ldquo;To be recognized as a trusted technology partner in the region, known for delivering cutting-edge IT solutions, exceptional service quality, and long-term value to our clients.&rdquo;
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-2">Our Key Strategic Objectives:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Tailored end-to-end IT solutions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Secure, scalable & future-ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Certified professional engineers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>24/7 support & downtime minimization</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our 7 Core Values",
      render: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 py-2">
          {[
            { name: "Professional Excellence", desc: "Certified experts committed to exceptional results & continuous skill training." },
            { name: "Security First", desc: "Zero-Trust protection for clients' data, systems and operations at all times." },
            { name: "Commitment to Long-Term Success", desc: "Scalable technology roadmaps that support future business expansion." },
            { name: "Integrity & Transparency", desc: "Honesty, accountability, clear communication with no shortcuts." },
            { name: "Customer-Centric Approach", desc: "Understanding operational challenges to build lasting partnerships." },
            { name: "Innovation & Continuous Improvement", desc: "Rapid adoption of emerging AI, cloud & infrastructure platforms." },
            { name: "Quality & Reliability", desc: "Strict quality standards across Tier-1 hardware and 99.9% uptime SLAs." },
          ].map((v, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <h5 className="font-semibold text-cyan-300 text-xs mb-0.5">{v.name}</h5>
              <p className="text-slate-400 text-[11px] leading-snug">{v.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "12 Master Service Domains",
      render: () => (
        <div className="py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {detailedServices.map((s, idx) => (
              <div key={s.id} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                <span className="font-mono text-cyan-400 font-bold text-[11px] mt-0.5">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                </span>
                <div>
                  <h5 className="font-semibold text-white text-xs">{s.title}</h5>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{s.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Authorized Solution Partners",
      render: () => (
        <div className="space-y-3 py-2 text-xs text-slate-300">
          <p className="text-slate-400 text-xs">CATS COMPUTERS L.L.C is an authorized system integrator for leading Tier-1 global technology brands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {solutionPartners.map((cat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h5 className="font-semibold text-cyan-400 text-xs mb-1">{cat.category}</h5>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {cat.partners.map(p => p.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Registered Dubai HQ & Leadership",
      render: () => (
        <div className="space-y-4 text-xs text-slate-300 py-2">
          <div className="p-4 rounded-2xl bg-slate-900 border border-sky-800/60 shadow-inner">
            <h5 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-cyan-400" />
              <span>Dubai Registered Head Office</span>
            </h5>
            <p className="text-slate-300"><strong>Post Box:</strong> 118562 | <strong>Office No:</strong> #6, Water Tank Building</p>
            <p className="text-slate-300"><strong>Landmark:</strong> Near Souq Al Fahidi, Al Musallah Street, Bur Dubai, Dubai, UAE</p>
            <p className="text-slate-300 mt-1"><strong>CR No:</strong> 679611 | <strong>DCCI No:</strong> 1912384 | <strong>VAT-TRN:</strong> 100069325700003</p>
            <p className="text-slate-300"><strong>Tel:</strong> +971 4 227 3378 | <strong>Email:</strong> info@catscomputers.com</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {leadershipTeam.map((lead, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <p className="font-bold text-white">{lead.name}</p>
                <p className="text-cyan-400 text-[10px] font-semibold">{lead.role}</p>
                <p className="text-slate-400 text-[10px] mt-1">{lead.mobile}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div data-lenis-prevent className="relative w-full max-w-3xl bg-slate-950 border border-sky-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto flex flex-col justify-between bg-gradient-to-br from-slate-900/95 via-slate-950/98 to-slate-900/95">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-bold text-white">Digital Corporate Profile</h3>
              <p className="text-xs text-slate-400">
                Slide {currentSlide + 1} of {slides.length}: <span className="text-cyan-300 font-semibold">{slides[currentSlide].title}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Content Area */}
        <div className="my-6 min-h-[300px]">
          {slides[currentSlide].render()}
        </div>

        {/* Slide Pagination Controls & Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              disabled={currentSlide === 0}
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-cyan-300 bg-sky-950 px-3 py-1 rounded-lg border border-sky-800">
              0{currentSlide + 1} / 0{slides.length}
            </span>

            <button
              disabled={currentSlide === slides.length - 1}
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print Profile</span>
            </button>

            <a
              href="mailto:info@catscomputers.com?subject=Request%20for%20Official%20CATS%20Computers%20Brochure"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-lg shadow-sky-600/35 hover:from-sky-400 hover:to-blue-500 transition-all cursor-pointer hover:scale-102"
            >
              <Download className="w-3.5 h-3.5 text-cyan-200" />
              <span>Request PDF Brochure</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

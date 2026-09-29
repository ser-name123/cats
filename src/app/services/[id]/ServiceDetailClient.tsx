"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { Sparkles, Download, CheckCircle2, ChevronRight } from "lucide-react";

interface ServiceDetailClientProps {
  serviceTitle: string;
}

export default function ServiceDetailClient({ serviceTitle }: ServiceDetailClientProps) {
  const { openQuoteModal, openBrochureModal } = useModal();

  return (
    <div className="p-7 rounded-3xl bg-gradient-to-br from-sky-950/90 via-slate-900 to-slate-950 border border-sky-500/40 shadow-2xl relative overflow-hidden space-y-6">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

      <div>
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
          Turnkey Quote & Consultation
        </span>
        <h3 className="text-xl font-bold text-white leading-snug">
          Request Tailored Proposal for {serviceTitle}
        </h3>
        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
          Get a transparent bill of materials (BOM), on-site engineering assessment, and competitive pricing within 24 hours.
        </p>
      </div>

      <div className="space-y-2.5 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Free site survey across Dubai & UAE</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>100% Genuine Tier-1 OEM Hardware</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>SIRA & Dubai Municipality standards</span>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <button
          onClick={() => openQuoteModal(serviceTitle)}
          className="w-full relative group overflow-hidden rounded-xl p-px font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-sky-600/30 hover:shadow-sky-500/60"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-xl animate-shimmer" />
          <span className="relative flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-950 rounded-[11px] text-white transition-all group-hover:bg-slate-900">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Get Customized Quote</span>
            <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <button
          onClick={openBrochureModal}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 text-slate-200 text-xs font-medium transition-all cursor-pointer"
        >
          <Download className="w-4 h-4 text-cyan-400" />
          <span>Download Corporate Brochure</span>
        </button>
      </div>
    </div>
  );
}

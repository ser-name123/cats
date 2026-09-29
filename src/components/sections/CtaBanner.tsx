"use client";

import React from "react";
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  quoteFor?: string;
  buttonLabel?: string;
}

// Page ke end me bada call-to-action: quote, call aur WhatsApp
export default function CtaBanner({
  eyebrow = "Let's Build It Together",
  title,
  description,
  quoteFor,
  buttonLabel = "Request Free Consultation",
}: CtaBannerProps) {
  const { openQuoteModal } = useModal();

  return (
    <section className="py-20 bg-slate-950 border-t border-sky-950/60">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 px-6 py-12 sm:px-12 sm:py-14 shadow-2xl">
          <div aria-hidden className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow" />
          <div aria-hidden className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div aria-hidden className="absolute inset-0 cyber-grid-pattern opacity-20" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs text-cyan-400 uppercase tracking-widest">{eyebrow}</span>
              <h2 className="mt-2 text-2xl sm:text-3xl text-white">{title}</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
              <button
                onClick={() => openQuoteModal(quoteFor)}
                className="group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-shadow cursor-pointer"
              >
                <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/25 blur-sm group-hover:translate-x-[450%] transition-transform duration-700 ease-out" />
                <Sparkles className="w-4 h-4 text-cyan-100" />
                {buttonLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+97142273378"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-sky-400/60 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" /> Call Now
              </a>
              <a
                href="https://wa.me/971552273378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm text-emerald-300 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

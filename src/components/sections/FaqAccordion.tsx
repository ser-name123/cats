"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, PhoneCall, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { FaqItem } from "@/data/pageContent";

interface FaqAccordionProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  faqs: FaqItem[];
}

// FAQ: left me heading + contact card, right me animated accordion
export default function FaqAccordion({
  badge = "Frequently Asked Questions",
  title = "Answers to",
  highlight = "Common Questions",
  description,
  faqs,
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#030712] relative overflow-hidden border-t border-sky-950/60">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading badge={badge} title={title} highlight={highlight} description={description} align="left" />

            <div className="cyber-glass rounded-2xl p-6 border border-sky-500/20">
              <p className="text-sm text-slate-300">Still have a question? Talk to our team directly.</p>
              <div className="mt-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <a
                  href="tel:+97142273378"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-950/60 border border-sky-800/60 text-cyan-300 text-sm hover:bg-sky-900/60 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" /> +971 4 227 3378
                </a>
                <a
                  href="https://wa.me/971552273378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-sm hover:bg-emerald-900/50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "bg-sky-950/40 border-cyan-500/40 shadow-[0_0_25px_rgba(56,189,248,0.12)]"
                      : "bg-slate-900/50 border-slate-800 hover:border-sky-700/60"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
                  >
                    <span className={`text-sm sm:text-base ${isOpen ? "text-white" : "text-slate-200"}`}>{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                        isOpen ? "bg-gradient-to-br from-sky-500 to-blue-600 text-white" : "bg-slate-800 text-cyan-400"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

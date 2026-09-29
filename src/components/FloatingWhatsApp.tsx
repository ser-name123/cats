"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971552273378?text=Hello%20CATS%20Computers%20L.L.C,%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-[0_6px_30px_rgba(16,185,129,0.5)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.7)] hover:scale-105 transition-all duration-300 group cursor-pointer border border-emerald-300/30"
      aria-label="Chat on WhatsApp with Dubai IT Team"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <MessageSquare className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline">WhatsApp 24/7 Support</span>
    </a>
  );
}

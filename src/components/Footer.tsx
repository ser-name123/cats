"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ChevronRight,
  ArrowUp,
  ShieldCheck,
  Building,
  ReceiptText,
  Award,
  Sparkles,
  CheckCircle2,
  Lock,
  Headphones,
  Check,
  Copy
} from "lucide-react";
import { detailedServices } from "@/data/services";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openQuoteModal, openBrochureModal } = useModal();
  const [dubaiTime, setDubaiTime] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setDubaiTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-sky-950/80 text-slate-300 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[350px] bg-gradient-to-r from-sky-600/10 via-cyan-500/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* 1. Top Call-to-Action Pre-Footer Ribbon */}
      <div className="border-b border-sky-950/90 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 relative z-10">
        <div className="site-container py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-sky-500/30 shadow-[0_10px_40px_rgba(2,132,199,0.15)] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-1.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-500/40 text-cyan-300 text-xs font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dubai & Northern Emirates Turnkey IT Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                Have an Upcoming IT Infrastructure or SIRA CCTV Project?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Book a free on-site engineering assessment across Dubai, Sharjah & Abu Dhabi with transparent BOM proposals.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => openQuoteModal("Turnkey IT Infrastructure Audit")}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Request Custom Quote</span>
              </button>

              <button
                onClick={openBrochureModal}
                className="px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Corporate Profile
              </button>

              <a
                href="https://wa.me/971552273378"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-300 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp 24/7</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Multi-Column Directory */}
      <div className="site-container pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & UAE Legal Accreditations (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg">
              <Logo size="lg" showTagline={true} />
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
              Premier technology solutions provider delivering turnkey IT services across enterprise infrastructure, structured cabling, cybersecurity, SIRA CCTV surveillance, and bespoke cloud & telecom systems in Dubai and across the UAE.
            </p>

            {/* Official Registration Cards */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block border-b border-slate-800/80 pb-1.5">
                Verified Government of Dubai Credentials:
              </span>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <Building className="w-3.5 h-3.5 text-sky-400" />
                  <span>Commercial Reg (CR):</span>
                </span>
                <button
                  onClick={() => copyToClipboard("679611", "cr")}
                  className="font-mono font-bold text-white hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  title="Click to copy CR"
                >
                  <span>679611</span>
                  {copiedField === "cr" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dubai Chamber (DCCI):</span>
                </span>
                <button
                  onClick={() => copyToClipboard("1912384", "dcci")}
                  className="font-mono font-bold text-white hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  title="Click to copy DCCI"
                >
                  <span>1912384</span>
                  {copiedField === "dcci" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <ReceiptText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Federal VAT-TRN:</span>
                </span>
                <button
                  onClick={() => copyToClipboard("100069325700003", "trn")}
                  className="font-mono text-[11px] text-indigo-300 hover:text-white flex items-center gap-1 cursor-pointer truncate"
                  title="Click to copy VAT-TRN"
                >
                  <span>100069325700003</span>
                  {copiedField === "trn" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                </button>
              </div>
            </div>

            {/* Live Dubai Clock */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">Dubai HQ Live GST:</span>
              </div>
              <span className="font-mono font-bold text-xs text-cyan-300 bg-sky-950 px-2.5 py-0.5 rounded-md border border-sky-800 shadow-sm">
                {dubaiTime || "Active GST"}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation & Company (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5 text-cyan-400">
              <span>Navigation</span>
            </h4>
            {[
              { name: "Home", href: "/" },
              { name: "All 12 Services", href: "/services" },
              { name: "Why Choose Us", href: "/why-choose-us" },
              { name: "Solution Partners", href: "/partners" },
              { name: "About Company", href: "/about" },
              { name: "Target Industries", href: "/industries" },
              { name: "Contact Dubai HQ", href: "/contact" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-xs text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition-colors py-0.5 group"
              >
                <ChevronRight className="w-3 h-3 text-sky-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Huawei Award Highlight */}
            <div className="mt-4 p-3 rounded-xl bg-sky-950/60 border border-sky-800/40 text-[11px] text-slate-300 space-y-1">
              <span className="flex items-center gap-1 text-cyan-300 font-semibold">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Huawei eKit Award</span>
              </span>
              <p className="text-[10px] text-slate-400 leading-tight">
                Authorized Elite Distribution Partner for UAE.
              </p>
            </div>
          </div>

          {/* Column 3: 12 Master Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-cyan-400">
              12 Master Services
            </h4>
            {detailedServices.slice(0, 9).map((srv) => (
              <Link
                key={srv.id}
                href={`/services/${srv.id}`}
                className="text-xs text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition-colors py-0.5 truncate group"
              >
                <ChevronRight className="w-3 h-3 text-cyan-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                <span className="truncate">{srv.title}</span>
              </Link>
            ))}
            <Link
              href="/services"
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold pt-1 flex items-center gap-1"
            >
              <span>Explore All 12 Domains →</span>
            </Link>
          </div>

          {/* Column 4: Dubai HQ Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 text-cyan-400">
              Dubai Headquarters
            </h4>
            
            <div className="text-xs text-slate-300 space-y-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">CATS COMPUTERS L.L.C</p>
                  <p className="text-[11px] text-slate-400">P.O.Box: 118562, Office No #6</p>
                  <p className="text-[11px] text-slate-400">Water Tank Bldg, Near Souq Al Fahidi</p>
                  <p className="text-[11px] text-cyan-300 font-medium">Al Musallah St, Bur Dubai, UAE</p>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+97142273378"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500 text-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Landline:</span>
                  </span>
                  <span className="font-semibold text-cyan-400">+971 4 227 3378</span>
                </a>

                <a
                  href="https://wa.me/971552273378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60 hover:border-emerald-500 text-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2 text-emerald-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp 24/7:</span>
                  </span>
                  <span className="font-semibold text-emerald-300">+971 55 227 3378</span>
                </a>

                <a
                  href="mailto:info@catscomputers.com"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500 text-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>Email:</span>
                  </span>
                  <span className="font-semibold text-slate-200 truncate">info@catscomputers.com</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-400 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Onsite Engineers Active & On-Call Across UAE</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Technology & Compliance Assurance Badges Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>SIRA Compliant CCTV</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Zero-Trust Cybersecurity</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>100% Genuine OEM Hardware</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Headphones className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>24/7/365 NOC Helpdesk</span>
          </div>
        </div>

        {/* 4. Bottom Legal & Back to Top Strip */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left text-[11px] sm:text-xs">
            © {new Date().getFullYear()} <strong className="text-slate-200">CATS COMPUTERS L.L.C</strong> (CR: 679611 | DCCI: 1912384 | VAT-TRN: 100069325700003). All Rights Reserved. Integrating Technology. Empowering Business.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-sky-500/60 transition-all cursor-pointer shadow-sm hover:scale-105 shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Copy, Check } from "lucide-react";

export default function TopBar() {
  const [dubaiTime, setDubaiTime] = useState<string>("");
  const [copied, setCopied] = useState(false);

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
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText("Office #6, Water Tank Bldg, Near Souq Al Fahidi, Al Musallah St, Bur Dubai, UAE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950/95 border-b border-sky-950/80 text-xs text-slate-300 py-2 hidden md:block backdrop-blur-md relative z-50">
      <div className="site-container flex flex-wrap items-center justify-between gap-4">
        {/* Left Side: Address & Dubai Status */}
        <div className="flex items-center gap-5">
          <button
            onClick={copyAddress}
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer group"
            title="Click to copy Bur Dubai address"
          >
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="truncate max-w-md">Office #6, Water Tank Bldg, Near Souq Al Fahidi, Bur Dubai</span>
            <span className="text-[10px] bg-slate-900 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 rounded font-mono flex items-center gap-1">
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />}
              <span>{copied ? "Copied" : "CR: 679611"}</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-2 text-slate-400 border-l border-slate-800 pl-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] text-emerald-300 font-medium">Dubai Chamber: 1912384</span>
          </div>

          <div className="hidden xl:flex items-center gap-2 text-slate-400 border-l border-slate-800 pl-4">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Dubai GST: <span className="text-cyan-300 font-mono font-medium">{dubaiTime || "Active"}</span></span>
          </div>
        </div>

        {/* Right Side: Phone & Direct Links */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+97142273378"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:text-cyan-300 transition-all text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-medium text-slate-200">+971 4 227 3378</span>
          </a>

          <a
            href="https://wa.me/971552273378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950 transition-all text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium">+971 55 227 3378</span>
          </a>

          <a
            href="mailto:info@catscomputers.com"
            className="hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>info@catscomputers.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Sparkles, ShieldCheck } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
  actionButton,
}: PageHeaderProps) {
  return (
    <div className="relative pt-12 pb-14 overflow-hidden border-b border-sky-950/60 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-r from-sky-600/10 via-cyan-500/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-cyan-300 transition-colors py-1 px-1.5 rounded-md hover:bg-slate-900/60"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-cyan-300 transition-colors py-1 px-1.5 rounded-md hover:bg-slate-900/60"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-cyan-300 font-medium py-1 px-1.5 bg-sky-950/50 rounded-md border border-sky-800/40">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-cyan-300 text-xs font-medium mb-4 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Bur Dubai, UAE
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
              {description}
            </p>
          </div>

          {actionButton && (
            <div className="shrink-0">
              <button
                onClick={actionButton.onClick}
                className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-sky-600/25 hover:shadow-sky-500/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-xl animate-shimmer" />
                <span className="relative flex items-center gap-2 px-5 py-3 bg-slate-950 rounded-[11px] text-white transition-all group-hover:bg-slate-900/80">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>{actionButton.label}</span>
                  <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

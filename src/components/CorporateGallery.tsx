"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Sparkles,
  Maximize2,
  X,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Award & Certification" | "Executive Leadership" | "Global Summit" | "Strategic Alliance";
  image: string;
  description: string;
  badge: string;
  date?: string;
  featured?: boolean;
}

export const corporateMilestones: GalleryItem[] = [
  {
    id: "huawei-award",
    title: "Huawei Enterprise BG Sales Partner Program Award",
    subtitle: "Authorized Elite Distribution Partner – UAE Territory",
    category: "Award & Certification",
    image: "/images/huawei-elite-partner-award.png",
    description: "Official award presented to CATS COMPUTERS L.L.C recognizing outstanding distribution excellence and engineering capabilities in Data Communication across the United Arab Emirates.",
    badge: "Official Huawei Award",
    featured: true,
  },
  {
    id: "ceo-huawei-hq",
    title: "Executive Leadership at Huawei Global HQ",
    subtitle: "Strategic Enterprise Technology Alignment",
    category: "Executive Leadership",
    image: "/images/cats-ceo-huawei-headquarters.png",
    description: "Mr. Thaufiq Sheik (CEO) visiting Huawei headquarters to align upcoming AI, enterprise routing, switching, and cloud infrastructure roadmaps for UAE clients.",
    badge: "CEO & Global HQ",
    featured: true,
  },
  {
    id: "huawei-summit",
    title: "HUAWEI eKit Summit Delegation",
    subtitle: "'Making AI Effortless For Every Startup' Exhibition",
    category: "Global Summit",
    image: "/images/cats-huawei-summit-team.png",
    description: "The CATS COMPUTERS engineering leadership delegation representing UAE enterprise clients at the global Huawei eKit technology summit.",
    badge: "Huawei eKit Summit",
  },
  {
    id: "executive-delegation",
    title: "International Technology Convention Delegation",
    subtitle: "Enterprise Networking & Cloud Infrastructure Forum",
    category: "Strategic Alliance",
    image: "/images/cats-executive-delegation.jpg",
    description: "CATS COMPUTERS executive directors and technical project managers meeting international hardware and telecom principals.",
    badge: "Global Delegation",
  },
  {
    id: "partner-celebration",
    title: "Partner Alliance & Milestone Celebration",
    subtitle: "Strengthening Ecosystem Partnerships in the Middle East",
    category: "Strategic Alliance",
    image: "/images/cats-partner-celebration.jpg",
    description: "Celebrating strategic milestones, high-volume hardware deliveries, and expanding multi-vendor turnkey distribution across UAE.",
    badge: "Alliance Celebration",
  },
];

interface CorporateGalleryProps {
  showTitle?: boolean;
  limit?: number;
}

export default function CorporateGallery({ showTitle = true, limit }: CorporateGalleryProps) {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const displayItems = limit ? corporateMilestones.slice(0, limit) : corporateMilestones;

  return (
    <section className="py-20 bg-[#030712] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Corporate Credentials & Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Excellence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Industry Recognition</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Official awards, executive delegations, and strategic technology summits highlighting our position as an authorized elite technology provider in Dubai and the UAE.
            </p>
          </div>
        )}

        {/* Featured Award Showcase Banner */}
        <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 border border-sky-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Award Image with 3D Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setActiveModalItem(corporateMilestones[0])}
                className="relative w-72 sm:w-80 h-96 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] group cursor-pointer bg-slate-950"
              >
                <Image
                  src="/images/huawei-elite-partner-award.png"
                  alt="Huawei eKit Authorized Elite Distribution Partner Award - CATS COMPUTERS LLC"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="flex items-center gap-1 text-xs font-semibold text-cyan-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-cyan-500/50">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Enlarge Award</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Award Details Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Flagship OEM Accolade</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Authorized Elite Distribution Partner Award
              </h3>
              <p className="text-sm font-semibold text-cyan-400">
                Huawei Enterprise BG Sales Partner Program • Territory: United Arab Emirates
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Presented to <strong>CATS COMPUTERS L.L.C</strong> in recognition of engineering excellence, high-volume distribution, and turnkey enterprise deployment in <strong>Data Communication, Routing & Switching</strong> across the UAE.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Product Category</span>
                    <span className="text-xs font-bold text-white">Data Communication</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Territory Authority</span>
                    <span className="text-xs font-bold text-white">United Arab Emirates</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid of Real Corporate Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayItems.slice(1).map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/60 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 border border-sky-500/40 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                  {item.badge}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Corporate Details CTA Button */}
        <div className="flex items-center justify-center">
          <Link
            href="/about"
            className="relative group overflow-hidden rounded-2xl p-px font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-sky-600/25 hover:shadow-sky-500/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-2xl animate-shimmer" />
            <span className="relative flex items-center gap-2 px-8 py-3.5 bg-slate-950 rounded-[15px] text-white transition-all group-hover:bg-slate-900/80">
              <Award className="w-4 h-4 text-cyan-300" />
              <span>View Complete Corporate Profile & Leadership</span>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

      </div>

      {/* Lightbox / Modal for Full View */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl bg-slate-900 border border-sky-500/40 shadow-2xl p-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-slate-800">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Information */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-md bg-sky-950 border border-sky-500/40 text-cyan-300 text-xs font-semibold">
                {activeModalItem.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-cyan-400">
                {activeModalItem.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

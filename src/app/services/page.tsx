"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { detailedServices } from "@/data/services";
import { useModal } from "@/context/ModalContext";
import {
  Server,
  Network,
  Shield,
  Cloud,
  Headphones,
  PhoneCall,
  Search,
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu,
  Video,
  KeyRound,
  HardDrive,
  FileCheck,
  Tv
} from "lucide-react";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import EngagementModels from "@/components/sections/EngagementModels";
import BrandMarquee from "@/components/sections/BrandMarquee";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { deliveryProcess, servicesFaqs } from "@/data/pageContent";

export default function ServicesPage() {
  const { openQuoteModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All 12 Services", icon: Layers },
    { id: "infrastructure", label: "Infrastructure & Servers", icon: Server },
    { id: "networking", label: "Networking & Cabling", icon: Network },
    { id: "security", label: "Cybersecurity & CCTV", icon: Shield },
    { id: "cloud", label: "Cloud & Software", icon: Cloud },
    { id: "telecom", label: "Telephony & AV", icon: PhoneCall },
    { id: "support", label: "IT AMC & Support", icon: Headphones },
  ];

  const filteredServices = detailedServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "it-infrastructure": return Server;
      case "networking-structured-cabling": return Network;
      case "cybersecurity-solutions": return Shield;
      case "cloud-virtualization": return Cloud;
      case "software-automation": return Cpu;
      case "it-support-managed-services": return Headphones;
      case "cctv-security-systems": return Video;
      case "access-control-time-attendance": return KeyRound;
      case "servers-storage-backup": return HardDrive;
      case "annual-maintenance-contract": return FileCheck;
      case "telephony-ip-pbx": return PhoneCall;
      case "audio-video-conferencing": return Tv;
      default: return Server;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Dynamic Subpage Hero */}
      <PageHeader
        badge="Enterprise IT Solutions"
        title="12 Master Service Domains"
        description="Comprehensive, turnkey technology infrastructure, security, cloud, and telecommunication solutions designed for modern UAE enterprises."
        breadcrumbs={[{ label: "Services" }]}
        actionButton={{
          label: "Request Custom Architecture",
          onClick: () => openQuoteModal("Enterprise IT Infrastructure"),
        }}
      />

      <div className="site-container py-12">
        
        {/* Search & Category Filter Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/50 scale-102"
                      : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-sky-500/40"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-cyan-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 text-xs text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-6 border border-slate-800 hover:border-sky-500/50 shadow-xl hover:shadow-[0_10px_35px_rgba(2,132,199,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glowing subtle hover layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-cyan-400 shadow-md group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-950/70 border border-sky-800/50 text-[11px] font-medium text-cyan-300 mb-2.5">
                    {service.badge}
                  </span>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-400/90 mt-1">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Top 3 Features */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:underline"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-600 text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">No services matched your query &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              Need Multi-Domain Turnkey IT Setup?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Bundle Infrastructure, Networking, CCTV & AMC for Maximum ROI
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our Dubai engineers provide unified blueprints reducing vendor sprawl and maintenance costs.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("Enterprise Turnkey Bundle")}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all cursor-pointer"
          >
            Request Turnkey Audit
          </button>
        </div>

      </div>

      {/* Delivery process */}
      <ProcessTimeline
        badge="Delivery Methodology"
        title="From First Visit to"
        highlight="Ongoing Support"
        description="Every service follows the same proven five-stage process, so you always know what happens next."
        steps={deliveryProcess}
      />

      {/* Engagement models */}
      <EngagementModels />

      {/* Technology brands */}
      <BrandMarquee />

      {/* FAQs */}
      <FaqAccordion faqs={servicesFaqs} description="Common questions about scope, timelines and support." />
    </div>
  );
}

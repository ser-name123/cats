"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Download,
  Sparkles,
  PhoneCall,
  Shield,
  Server,
  Network,
  Lock,
  Cloud,
  Cpu,
  Headphones,
  Video,
  KeyRound,
  HardDrive,
  FileCheck,
  Tv,
  ArrowRight,
  Award,
  CheckCircle2
} from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenBrochureModal: () => void;
}

export default function Navbar({ onOpenQuoteModal, onOpenBrochureModal }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Partners", href: "/partners" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 220);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Structured categorized services for the mega menu
  const menuCategories = [
    {
      title: "Infrastructure & Cabling",
      tag: "Hardware & Cables",
      items: [
        {
          id: "it-infrastructure",
          title: "IT Infrastructure Solutions",
          desc: "Rack servers, blade systems & SAN",
          icon: Server,
        },
        {
          id: "networking-structured-cabling",
          title: "Networking & Structured Cabling",
          desc: "Cat6/Cat7 & 10G/100G fiber optics",
          icon: Network,
        },
        {
          id: "servers-storage-backup",
          title: "Servers, Storage & Backup",
          desc: "Dell, HPE, Synology & Veeam",
          icon: HardDrive,
        },
        {
          id: "annual-maintenance-contract",
          title: "IT AMC & Maintenance",
          desc: "Preventive care & guaranteed SLA",
          icon: FileCheck,
        },
      ],
    },
    {
      title: "Security & SIRA Surveillance",
      tag: "Protection & Access",
      items: [
        {
          id: "cctv-security-systems",
          title: "CCTV & Security Systems",
          desc: "SIRA compliant 4K IP cameras & NVR",
          icon: Video,
        },
        {
          id: "cybersecurity-solutions",
          title: "Cybersecurity Solutions",
          desc: "Fortinet NGFW & zero-trust defense",
          icon: Lock,
        },
        {
          id: "access-control-time-attendance",
          title: "Access Control & Biometrics",
          desc: "Face recognition & smart barriers",
          icon: KeyRound,
        },
        {
          id: "it-support-managed-services",
          title: "IT Support & Managed NOC",
          desc: "24/7 helpdesk & Dubai onsite dispatch",
          icon: Headphones,
        },
      ],
    },
    {
      title: "Cloud & Communication",
      tag: "VoIP & Automation",
      items: [
        {
          id: "telephony-ip-pbx",
          title: "Telephony & IP PBX Systems",
          desc: "Cisco, Yeastar, Grandstream & Teams",
          icon: PhoneCall,
        },
        {
          id: "audio-video-conferencing",
          title: "Audio & Video Conferencing",
          desc: "Logitech, Poly & Zoom/Teams rooms",
          icon: Tv,
        },
        {
          id: "cloud-virtualization",
          title: "Cloud Services & Virtualization",
          desc: "Azure, AWS & VMware migration",
          icon: Cloud,
        },
        {
          id: "software-automation",
          title: "Software & Web Apps",
          desc: "Custom ERP, portals & automation",
          icon: Cpu,
        },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-2xl border-b border-sky-500/25 shadow-[0_8px_32px_rgba(2,132,199,0.18)] py-2.5"
          : "bg-slate-950/85 backdrop-blur-md py-3.5 border-b border-white/5"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg group shrink-0"
        >
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5 ml-auto mr-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-xs font-semibold py-2 px-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                      active || servicesDropdownOpen
                        ? "text-cyan-300 bg-sky-950/80 border border-sky-500/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        servicesDropdownOpen ? "rotate-180 text-cyan-400" : "text-slate-400"
                      }`}
                    />
                  </Link>

                  {/* Mega-Menu Luxury Dropdown Window */}
                  {servicesDropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[920px] rounded-3xl bg-slate-950/98 border border-sky-500/35 shadow-[0_25px_70px_rgba(0,0,0,0.9)] backdrop-blur-3xl p-6 animate-fadeIn z-50 overflow-hidden"
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      {/* Ambient background glow orb */}
                      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -top-1 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                      {/* Header Strip inside Dropdown */}
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-sky-950 border border-sky-500/40 text-cyan-400">
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                              12 Master Enterprise IT & Security Domains
                            </h4>
                            <p className="text-[11px] text-slate-400">
                              Turnkey design, hardware supply, certified SIRA installation & 24/7 SLA support
                            </p>
                          </div>
                        </div>

                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-xs font-semibold text-cyan-300 hover:text-white transition-all shadow-sm group"
                        >
                          <span>Explore Services Directory</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* 3 Domain Columns + Right Featured Action Card */}
                      <div className="grid grid-cols-12 gap-5">
                        
                        {/* 3 Main Categorized Columns (9 cols) */}
                        <div className="col-span-9 grid grid-cols-3 gap-4 border-r border-slate-800/80 pr-5">
                          {menuCategories.map((cat, cIdx) => (
                            <div key={cIdx} className="space-y-3">
                              {/* Category Header */}
                              <div className="pb-1">
                                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                                  {cat.tag}
                                </span>
                                <h5 className="text-xs font-bold text-white leading-tight mt-0.5">
                                  {cat.title}
                                </h5>
                              </div>

                              {/* Service Sublinks */}
                              <div className="space-y-1.5">
                                {cat.items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.id}
                                      href={`/services/${item.id}`}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="p-2 rounded-xl bg-slate-900/50 hover:bg-sky-950/80 border border-slate-800/60 hover:border-sky-500/50 transition-all flex items-start gap-2.5 group"
                                    >
                                      <div className="p-1.5 rounded-lg bg-slate-950 text-sky-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 transition-colors shrink-0 mt-0.5 border border-slate-800">
                                        <Icon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <p className="text-[11px] font-bold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug truncate">
                                          {item.title}
                                        </p>
                                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                                          {item.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Right Spotlight Column (3 cols) */}
                        <div className="col-span-3 flex flex-col justify-between space-y-3">
                          
                          {/* Huawei Elite Partner Award Card */}
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 border border-sky-500/40 space-y-2 relative overflow-hidden shadow-md">
                            <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-700">
                              <Award className="w-3 h-3 text-cyan-400" />
                              <span>Huawei eKit Award</span>
                            </div>
                            <h6 className="text-xs font-bold text-white leading-tight">
                              Authorized Elite Distribution Partner
                            </h6>
                            <p className="text-[10px] text-slate-300 leading-relaxed">
                              Official UAE territory distribution for Enterprise Data Communication.
                            </p>
                          </div>

                          {/* Fast Action Box */}
                          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              Need an Onsite Audit?
                            </span>
                            <button
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                onOpenQuoteModal();
                              }}
                              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-sky-500/20 hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Get Fast Quote</span>
                            </button>
                            <a
                              href="tel:+97142273378"
                              className="text-[10px] text-cyan-400 hover:underline flex items-center justify-center gap-1 pt-1"
                            >
                              <PhoneCall className="w-3 h-3" />
                              <span>+971 4 227 3378 (Dubai HQ)</span>
                            </a>
                          </div>

                        </div>

                      </div>

                      {/* Bottom Quick-Trust Strip inside Dropdown */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>100% Genuine OEM Hardware</span>
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-cyan-300">SIRA Security Compliant</span>
                          <span className="text-slate-600">•</span>
                          <span>2-4hr Emergency Onsite Dispatch</span>
                        </div>
                        <span className="text-slate-500">CR: 679611</span>
                      </div>

                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold py-2 px-3 rounded-xl transition-all duration-200 relative ${
                  active
                    ? "text-cyan-300 bg-sky-950/70 border border-sky-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenBrochureModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 shadow-sm transition-all duration-200 cursor-pointer"
            title="Download Corporate Profile PDF"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Brochure</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs transition-all duration-300 cursor-pointer shadow-lg shadow-sky-600/20 hover:shadow-sky-500/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-xl animate-shimmer" />
            <span className="relative flex items-center gap-2 px-4 py-2 bg-slate-950/90 rounded-[11px] text-white transition-all group-hover:bg-slate-900/70">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Request Quote</span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Action Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenQuoteModal}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-600/30 cursor-pointer"
          >
            Get Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-sky-500/20 backdrop-blur-2xl px-6 py-6 transition-all animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between border ${
                    active
                      ? "text-cyan-300 bg-sky-950/70 border-sky-500/40"
                      : "text-slate-200 hover:text-cyan-400 border-transparent hover:bg-slate-900/60"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? "text-cyan-400" : "text-slate-600"}`} />
                </Link>
              );
            })}

            {/* Quick Categorized Service Sublinks in Mobile */}
            <div className="pt-3 pb-1 border-t border-slate-800/80 space-y-3">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block px-2">
                All 12 Service Domains:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {menuCategories.flatMap((c) => c.items).map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl bg-slate-900/80 text-xs text-slate-200 hover:text-cyan-300 border border-slate-800 flex items-center gap-2"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{srv.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochureModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-medium cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Corporate Brochure</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-sky-600/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Request Instant Quote</span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
                <a href="tel:+97142273378" className="flex items-center gap-1.5 text-cyan-400">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>+971 4 227 3378</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>CR: 679611</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  Building,
  UserCheck,
  PhoneCall,
  ReceiptText
} from "lucide-react";
import { detailedServices, leadershipTeam } from "@/data/services";

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: initialService || detailedServices[0].title,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/80 relative overflow-hidden border-t border-sky-950/80">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/35 text-cyan-300 text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Dubai Headquarters & Key Contacts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">CATS COMPUTERS L.L.C</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Connect directly with our executive leadership, technical estimation, and project engineering management in Bur Dubai, UAE.
          </p>
        </div>

        {/* Dubai Chamber, CR & VAT-TRN Official Registration Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-sky-800/50 flex items-center justify-between shadow-lg group hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Company Registration</p>
                <p className="text-sm font-bold text-white font-mono mt-0.5">CR: 679611</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("679611", "cr")}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 cursor-pointer"
              title="Copy CR"
            >
              {copiedField === "cr" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/90 border border-sky-800/50 flex items-center justify-between shadow-lg group hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Dubai Chamber of Commerce</p>
                <p className="text-sm font-bold text-cyan-300 font-mono mt-0.5">DCCI: 1912384</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("1912384", "dcci")}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 cursor-pointer"
              title="Copy DCCI"
            >
              {copiedField === "dcci" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/90 border border-sky-800/50 flex items-center justify-between shadow-lg group hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <ReceiptText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">VAT-TRN (Federal Tax)</p>
                <p className="text-xs font-bold text-indigo-300 font-mono mt-0.5 truncate max-w-[130px]">100069325700003</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("100069325700003", "vat")}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 cursor-pointer"
              title="Copy VAT TRN"
            >
              {copiedField === "vat" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/90 border border-sky-800/50 flex items-center justify-between shadow-lg group hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Direct Landline</p>
                <a href="tel:+97142273378" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5">
                  +971 4 227 3378
                </a>
              </div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        </div>

        {/* Executive Management Directory Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Direct Department Contacts</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">Leadership & Technical Project Management</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipTeam.map((lead, idx) => (
              <div
                key={idx}
                className="cyber-glass rounded-2xl p-5 border border-sky-900/60 hover:border-cyan-400/60 transition-all flex flex-col justify-between shadow-lg group bg-gradient-to-br from-slate-900/90 to-slate-950/90"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300 bg-sky-950 px-2.5 py-0.5 rounded border border-sky-800">
                      {lead.department.split(" ")[0]}
                    </span>
                    <UserCheck className="w-4 h-4 text-cyan-400" />
                  </div>

                  <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-cyan-200 transition-colors">{lead.name}</h4>
                  <p className="text-xs text-sky-300 font-medium mb-3">{lead.role}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                  <a
                    href={`tel:${lead.mobile.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-cyan-300 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{lead.mobile}</span>
                  </a>

                  <a
                    href={`https://wa.me/${lead.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp Direct</span>
                  </a>

                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{lead.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: Location & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Official Contact Card & Location Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="cyber-glass rounded-3xl p-8 border border-sky-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">CATS COMPUTERS L.L.C</h3>
                  <p className="text-xs text-cyan-400 uppercase tracking-wider font-semibold mt-0.5">
                    Computer Accessories & Technical Services
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md bg-sky-950 text-cyan-300 border border-sky-700/70 text-xs font-mono font-semibold">
                  Bur Dubai, UAE
                </span>
              </div>

              {/* Contact Items */}
              <div className="space-y-5">
                
                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Registered Dubai Address</p>
                    <p className="text-sm text-slate-200 font-medium leading-relaxed mt-0.5">
                      P.O.Box: 118562, Office No #6, Water Tank Building, Near Souq Al Fahidi, Al Musallah Street, Bur Dubai, Dubai, UAE.
                    </p>
                    <button
                      onClick={() => handleCopy("P.O.Box: 118562, Office No #6, Water Tank Building, Near Souq Al Fahidi, Al Musallah Street, Bur Dubai, Dubai, UAE", "address")}
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 mt-2 font-medium cursor-pointer"
                    >
                      {copiedField === "address" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedField === "address" ? "Full Address Copied!" : "Copy Full Address"}</span>
                    </button>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Central Landline</p>
                    <a
                      href="tel:+97142273378"
                      className="text-base text-white font-bold hover:text-cyan-300 transition-colors block mt-0.5"
                    >
                      +971 4 227 3378
                    </a>
                  </div>
                </div>

                {/* General Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Email Inquiries</p>
                    <a
                      href="mailto:info@catscomputers.com"
                      className="text-sm text-cyan-300 hover:underline font-medium block mt-0.5"
                    >
                      info@catscomputers.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Web Portal</p>
                    <a
                      href="https://www.catscomputers.com"
                      className="text-sm text-cyan-300 hover:underline font-medium block mt-0.5"
                    >
                      www.catscomputers.com
                    </a>
                  </div>
                </div>

              </div>

              {/* WhatsApp Quick Chat CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/971552273378?text=Hello%20CATS%20Computers,%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+971 55 227 3378)</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Consultation / Quote Form */}
          <div className="lg:col-span-7">
            <div className="cyber-glass rounded-3xl p-8 sm:p-10 border border-sky-500/30 shadow-2xl relative bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out to <strong>CATS COMPUTERS L.L.C</strong>. Our Dubai project management team will review your requirements for <strong>{formData.service}</strong> and contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", companyName: "", email: "", phone: "", service: detailedServices[0].title, message: "" });
                    }}
                    className="px-6 py-3 rounded-xl bg-slate-800 text-cyan-400 text-xs font-semibold hover:bg-slate-700 cursor-pointer transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Request Technical Proposal / Quote
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Select your target service domain from our 12 specialized enterprise categories.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Mohammed Al Hashmi"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Global Logistics"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +971 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Required Service Domain (12 Master Domains) *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      {detailedServices.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify number of nodes/users, site location in UAE, timeline, or equipment requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-600/35 flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:scale-101"
                  >
                    <Send className="w-4 h-4 text-cyan-200" />
                    <span>Submit Request to Technical Team</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Strict UAE confidentiality guaranteed. We do not share your company details with third parties.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

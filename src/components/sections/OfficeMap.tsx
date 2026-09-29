"use client";

import React, { useEffect, useState } from "react";
import { Clock, MapPin, Navigation, PhoneCall, Mail, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ADDRESS = "Water Tank Building, Al Musallah St, Near Souq Al Fahidi, Bur Dubai, Dubai, UAE";
const MAP_QUERY = encodeURIComponent(ADDRESS);

const HOURS = [
  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "Closed (WhatsApp messages answered next working day)" },
];

// Dubai time me abhi office khula hai ya nahi (Mon–Sat, 9 AM – 8 PM)
function useOfficeOpen() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const check = () => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dubai",
        weekday: "short",
        hour: "numeric",
        hour12: false,
      }).formatToParts(new Date());
      const day = parts.find((p) => p.type === "weekday")?.value;
      const hour = Number(parts.find((p) => p.type === "hour")?.value);
      setOpen(day !== "Sun" && hour >= 9 && hour < 20);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);
  return open;
}

// Contact page: Google Map + office hours + direct channels
export default function OfficeMap() {
  const open = useOfficeOpen();

  const channels = [
    { icon: PhoneCall, label: "Office Line", value: "+971 4 227 3378", href: "tel:+97142273378" },
    { icon: MessageSquare, label: "WhatsApp", value: "+971 55 227 3378", href: "https://wa.me/971552273378" },
    { icon: Mail, label: "Email", value: "info@catscomputers.com", href: "mailto:info@catscomputers.com" },
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-sky-950/60">
      <div className="site-container">
        <SectionHeading
          badge="Visit Our Office"
          title="Find Us in"
          highlight="Bur Dubai"
          description="Walk in during business hours or plan your visit with directions below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative min-h-[380px] rounded-3xl overflow-hidden border border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
            <iframe
              title="CATS COMPUTERS L.L.C office location"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.8)_brightness(0.9)]"
            />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-600/40 hover:brightness-110 transition"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="cyber-glass rounded-3xl p-6 border border-sky-500/20">
              <div className="flex items-center justify-between">
                <h3 className="text-base text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" /> Business Hours
                </h3>
                {open !== null && (
                  <span
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] border ${
                      open
                        ? "text-emerald-300 bg-emerald-950/60 border-emerald-800"
                        : "text-amber-300 bg-amber-950/40 border-amber-800/60"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                    {open ? "Open now" : "Closed now"}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-3">
                {HOURS.map((h) => (
                  <li key={h.day} className="text-sm">
                    <p className="text-slate-200">{h.day}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{h.time}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] text-slate-500">All times in Gulf Standard Time (GST).</p>
            </div>

            <div className="cyber-glass rounded-3xl p-6 border border-sky-500/20 flex-1">
              <h3 className="text-base text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" /> Reach Us Directly
              </h3>
              <div className="mt-4 space-y-3">
                {channels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-lg bg-sky-950 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-cyan-300" />
                      </span>
                      <span>
                        <span className="block text-[11px] text-slate-500">{c.label}</span>
                        <span className="block text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">{c.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

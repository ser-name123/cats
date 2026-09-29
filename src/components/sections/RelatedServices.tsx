import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { ServiceItem } from "@/data/services";

// Isi category ki (aur baaki) related services ke image cards
export default function RelatedServices({ current, all }: { current: ServiceItem; all: ServiceItem[] }) {
  const sameCategory = all.filter((s) => s.id !== current.id && s.category === current.category);
  const others = all.filter((s) => s.id !== current.id && s.category !== current.category);
  const related = [...sameCategory, ...others].slice(0, 3);

  return (
    <section className="py-20 bg-[#030712] border-t border-sky-950/60">
      <div className="site-container">
        <SectionHeading
          badge="Explore More"
          title="Related"
          highlight="Services"
          description="Clients who choose this service often combine it with the following solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.id}`}
              data-tilt
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[11px] text-cyan-300 bg-slate-950/80 border border-sky-800/60 backdrop-blur">
                  {s.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg text-white group-hover:text-cyan-300 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan-400">
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

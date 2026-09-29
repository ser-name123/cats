import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}

// Inner pages ke naye sections ka common heading block
export default function SectionHeading({ badge, title, highlight, description, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-medium mb-3">
        <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">{highlight}</span>
        )}
      </h2>
      {description && <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">{description}</p>}
    </div>
  );
}

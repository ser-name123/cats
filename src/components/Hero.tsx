"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  animate,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import {
  ShieldCheck,
  Cpu,
  Network,
  Lock,
  Cloud,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Layers
} from "lucide-react";
import ParticleNetwork from "./motion/ParticleNetwork";

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenBrochureModal: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: EASE } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.0, ease: EASE } },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 14 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 20 } },
};

// Number 0 se target tak count karta hai jab screen pe aata hai
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: EASE,
      onUpdate: (v) => (node.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Button cursor ki taraf halka sa khinchta hai
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      className="w-full sm:w-auto"
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Hero height calculation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const measure = () => {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      section.style.setProperty("--hero-offset", `${Math.round(offset)}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll parallax: background dheere, content upar fade out
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Mouse ke peeche chalne wala dynamic spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(700px circle at ${smx}% ${smy}%, rgba(56,189,248,0.22), transparent 60%)`;

  const onPointerMove = (e: React.PointerEvent) => {
    const r = sectionRef.current!.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const pillars = [
    { title: "IT Infrastructure", icon: Cpu, desc: "End-to-End Enterprise Racks" },
    { title: "Enterprise Networking", icon: Network, desc: "High-Speed Switching & Cabling" },
    { title: "Security Systems", icon: ShieldCheck, desc: "SIRA IP CCTV & Access Control" },
    { title: "Cybersecurity", icon: Lock, desc: "Zero-Trust Threat Protection" },
    { title: "Cloud & Software", icon: Cloud, desc: "Scalable Apps & Automation" },
  ];

  const stats = [
    { value: <CountUp to={100} suffix="%" />, label: "Turnkey Execution", sub: "Design to 24/7 SLA Handover" },
    { value: <><CountUp to={24} />/7</>, label: "Mission-Critical SLA", sub: "Rapid Dubai Response & Monitoring" },
    { value: "Bur Dubai, UAE", label: "Registered Head Office", sub: "Water Tank Bldg, Near Souq Al Fahidi" },
    { value: "Tier-1 OEM", label: "Certified Engineers", sub: "Cisco, Fortinet, Microsoft, Dell" },
  ];

  return (
    <section
      ref={sectionRef}
      data-no-reveal
      onPointerMove={onPointerMove}
      style={{ minHeight: "calc(100svh - var(--hero-offset, 0px))" }}
      className="relative flex items-center justify-center overflow-hidden py-12 lg:pt-10 lg:pb-24 [@media(max-height:820px)]:lg:pt-5 [@media(max-height:820px)]:lg:pb-16"
    >
      {/* Background Graphic with Cyber Grid and Ambient Lights */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 z-0 select-none">
        <motion.div style={reduce ? undefined : { scale: bgScale }} className="absolute inset-0">
          <Image
            src="/images/hero-network.jpg"
            alt="CATS Computers Global Network Hologram"
            fill
            priority
            className="object-cover object-center opacity-30 sm:opacity-40 mix-blend-screen filter brightness-110"
          />
        </motion.div>
        {/* Deep tech gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />
        
        {/* Animated aura light orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-sky-500/18 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none animate-float-subtle" />
      </motion.div>

      {/* Mouse-follow spotlight */}
      <motion.div aria-hidden style={{ background: spotlight }} className="absolute inset-0 z-0 pointer-events-none hidden md:block" />

      {/* Cyber Grid Lines & Dots */}
      <motion.div
        style={reduce ? undefined : { y: gridY }}
        className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none z-0"
      />

      {/* Live interactive particle network */}
      <ParticleNetwork className="z-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(0,0,0,0.4),black_85%)]" />

      {/* Main Content Container */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 site-container w-full"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Top Floating High-Tech Verified Badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-sky-500/35 text-sky-300 text-xs sm:text-sm font-medium mb-6 [@media(max-height:820px)]:mb-4 shadow-[0_0_24px_rgba(56,189,248,0.25)] backdrop-blur-xl animate-float">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-white font-semibold">Dubai, UAE</span>
              <span className="text-slate-600">|</span>
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300">
                CR: 679611 • DCCI: 1912384 • SIRA & Enterprise IT
              </span>
            </div>
          </motion.div>

          {/* Hero Title — kinetic mask reveal */}
          <h1 className="max-w-5xl text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12] sm:leading-[1.1]">
            <span className="block overflow-hidden">
              <motion.span
                variants={lineReveal}
                className="block pb-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300 drop-shadow-sm font-semibold"
              >
                CATS COMPUTERS L.L.C
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={lineReveal}
                className="block pb-[0.16em] text-2xl sm:text-4xl lg:text-5xl font-[350] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]"
              >
                Integrating Technology. Empowering Business.
              </motion.span>
            </span>
          </h1>

          {/* Subtitle / Core Description */}
          <motion.p variants={fadeUp} className="mt-6 [@media(max-height:820px)]:mt-3 max-w-3xl text-sm sm:text-lg text-slate-300 font-normal leading-relaxed">
            Delivering comprehensive turnkey IT services across enterprise infrastructure, structured networking, zero-trust cybersecurity, SIRA CCTV surveillance, and custom cloud software development across Dubai & the UAE.
          </motion.p>

          {/* 5 Core Pillars Bar */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-8 [@media(max-height:820px)]:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl"
          >
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={popIn}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/85 border border-sky-500/25 text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-md hover:border-cyan-400/60 hover:bg-slate-850 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all cursor-default"
                >
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.title}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div variants={fadeUp} className="mt-10 [@media(max-height:820px)]:mt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Magnetic>
              <motion.button
                onClick={onOpenQuoteModal}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden w-full sm:w-auto px-8 py-4 [@media(max-height:820px)]:py-3 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                {/* Laser shine sweep */}
                <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/30 blur-sm translate-x-0 group-hover:translate-x-[450%] transition-transform duration-700 ease-out" />
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Magnetic>

            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-4 [@media(max-height:820px)]:py-3 rounded-xl font-medium text-sm sm:text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400/60 shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <Layers className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Explore 12 Services</span>
            </Link>

            <a
              href="tel:+97142273378"
              className="w-full sm:w-auto px-6 py-4 [@media(max-height:820px)]:py-3 rounded-xl font-medium text-sm sm:text-base text-cyan-300 bg-sky-950/50 hover:bg-sky-950/80 border border-sky-800/60 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>+971 4 227 3378</span>
            </a>
          </motion.div>

          {/* High-Tech Trust Badges / Stats Strip */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            className="mt-14 [@media(max-height:820px)]:mt-7 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="cyber-glass cyber-glass-hover rounded-2xl p-5 [@media(max-height:820px)]:p-4 text-center flex flex-col items-center justify-center border border-sky-500/20 shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-300 tabular-nums">
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{s.label}</span>
                </span>
                <span className="text-[11px] text-slate-400 mt-1">{s.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-5 [@media(max-height:820px)]:bottom-2 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400 hover:text-cyan-300 transition-colors"
      >
        <span>Scroll to Explore</span>
        <span className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5">
          <motion.span
            className="w-1 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

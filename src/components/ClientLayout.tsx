"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import SmoothScroll from "./motion/SmoothScroll";
import ScrollProgress from "./motion/ScrollProgress";
import ScrollEffects from "./motion/ScrollEffects";
import PageLoader from "./motion/PageLoader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {/* Advanced Cyber Preloader & Page Transition Progress */}
      <PageLoader />

      {/* Smooth scrolling, scroll progress bar aur scroll animations */}
      <SmoothScroll />
      <ScrollProgress />
      <ScrollEffects />
      <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 relative selection:bg-cyan-500 selection:text-white">
        {/* Global Persistent Header (TopBar + Navbar) */}
        <Header />

        {/* Dynamic Page Body */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Persistent Footer */}
        <Footer />

        {/* 24/7 WhatsApp Quick Support Button */}
        <FloatingWhatsApp />
      </div>
    </ModalProvider>
  );
}

"use client";

import React from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersSection from "@/components/PartnersSection";
import CorporateGallery from "@/components/CorporateGallery";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ValuesSection from "@/components/ValuesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import { useModal } from "@/context/ModalContext";

export default function Home() {
  const { openQuoteModal, openBrochureModal } = useModal();

  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        onOpenQuoteModal={() => openQuoteModal()}
        onOpenBrochureModal={openBrochureModal}
      />

      {/* 2. 12 Master Service Domains */}
      <ServicesSection onSelectServiceForQuote={(service) => openQuoteModal(service)} />

      {/* 3. Why Choose Us (6 Pillars) */}
      <WhyChooseUs />

      {/* 4. Global Solution Partners (7 OEM Categories) */}
      <PartnersSection />

      {/* 5. Verified Corporate Credentials & Huawei Award Gallery */}
      <CorporateGallery />

      {/* 6. About Company & 5-Step Delivery Lifecycle */}
      <AboutSection />

      {/* 7. Mission, Vision & 6 Strategic Objectives */}
      <MissionVisionSection />

      {/* 8. 7 Core Values */}
      <ValuesSection />

      {/* 9. Target Industries Empowered */}
      <IndustriesSection onSelectSector={(sector) => openQuoteModal(`${sector} IT Infrastructure`)} />

      {/* 10. Contact, Leadership Team & Interactive Quote Form */}
      <ContactSection />
    </>
  );
}

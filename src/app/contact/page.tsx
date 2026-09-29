"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { useModal } from "@/context/ModalContext";
import OfficeMap from "@/components/sections/OfficeMap";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { contactJourney, contactFaqs } from "@/data/pageContent";

export default function ContactPage() {
  const { openBrochureModal } = useModal();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Subpage Header */}
      <PageHeader
        badge="Direct Enterprise Connect"
        title="Contact Dubai Headquarters"
        description="Connect with our certified system engineers, solutions architects, and executive leadership team at our Bur Dubai headquarters for inquiries, site audits, and 24/7 SLA support."
        breadcrumbs={[{ label: "Contact Us" }]}
        actionButton={{
          label: "Download Corporate Brochure",
          onClick: openBrochureModal,
        }}
      />

      {/* Main Contact Section with interactive quote form & executive leadership cards */}
      <ContactSection />

      {/* Map, hours & direct channels */}
      <OfficeMap />

      {/* What happens after you contact us */}
      <ProcessTimeline
        badge="What Happens Next"
        title="From Enquiry to"
        highlight="Proposal"
        description="A straightforward process so you know exactly what to expect after reaching out."
        steps={contactJourney}
      />

      {/* FAQs */}
      <FaqAccordion faqs={contactFaqs} description="Everything you need to know before getting in touch." />
    </div>
  );
}

"use client";

import React, { createContext, useContext, useState } from "react";
import QuoteModal from "@/components/QuoteModal";
import BrochureModal from "@/components/BrochureModal";

interface ModalContextType {
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;
  openBrochureModal: () => void;
  closeBrochureModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("IT Infrastructure Solutions");

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openBrochureModal = () => setBrochureModalOpen(true);
  const closeBrochureModal = () => setBrochureModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openQuoteModal,
        closeQuoteModal,
        openBrochureModal,
        closeBrochureModal,
      }}
    >
      {children}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        defaultService={selectedService}
      />
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={closeBrochureModal}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

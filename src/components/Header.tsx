"use client";

import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const { openQuoteModal, openBrochureModal } = useModal();

  return (
    <>
      <TopBar />
      <Navbar
        onOpenQuoteModal={() => openQuoteModal()}
        onOpenBrochureModal={openBrochureModal}
      />
    </>
  );
}

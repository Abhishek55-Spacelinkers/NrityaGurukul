"use client"

import dynamic from "next/dynamic";

import { Toaster } from "@/components/ui/toaster";
import { Poppins, Cinzel } from "next/font/google";

import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
const Footer = dynamic(() => import("@/components/layout/Footer"));
import EventPopup from "@/components/layout/EventPopup";

const MusicPlayer = dynamic(() => import("@/components/gallery/Musicplayer"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
      <Toaster />
      <WhatsAppButton />
      <MusicPlayer/>
    </>
  );
}

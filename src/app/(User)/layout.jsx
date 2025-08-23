"use client"

import dynamic from "next/dynamic";

import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/layout/Header1";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
const Footer = dynamic(() => import("@/components/layout/Footer"));
import EventPopup from "@/components/layout/EventPopup";

const MusicPlayer = dynamic(() => import("@/components/gallery/Musicplayer"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <>
      {/* <TopBar /> */}
      <Header />
      <div className="w-full h-[150px]"></div>
      {children}
      <Footer />
      <Toaster />
      <WhatsAppButton />
      <MusicPlayer/>
    </>
  );
}

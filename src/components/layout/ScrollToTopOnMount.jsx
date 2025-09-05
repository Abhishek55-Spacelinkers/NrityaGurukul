// components/ScrollToTopOnMount.tsx
"use client";
import { useEffect } from "react";

export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth"
  }, []);

  return null; // nothing to render
}

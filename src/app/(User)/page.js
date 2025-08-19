
export const metadata = {
  title: "Nritya Gurukul | Bharatnatyam Dance Classes in Noida",
  description:
    "Welcome to Nritya Gurukul! Join our Bharatnatyam dance classes in Noida to learn the ancient art of classical Indian dance with expert instructors.",
};

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import InquiryForm from "@/components/sections/InquiryForm";
import Contact from "@/components/sections/Contact";
import ImageCarousel from "@/components/sections/ImageCarousel";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
        <Hero />
        <ImageCarousel />
        <Features />
        <Testimonials />
        <InquiryForm />
        <Contact />
    </>
  );
}

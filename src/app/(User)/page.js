
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
import AboutAndWhy from "@/components/sections/AboutAndWhy";
import ButtonG from "@/components/gallery/ButtonG";
import FeaturedStudents from "@/components/sections/FeaturedStudents";
import ScrollToTopOnMount from "@/components/layout/ScrollToTopOnMount";

export default function Home() {
  return (
    <> 
    <ScrollToTopOnMount/>
        <Hero />
        <AboutAndWhy/>
        <ImageCarousel />
        <Features />
        <Testimonials />
        <ButtonG/>
        <FeaturedStudents/>
        <InquiryForm />
        <Contact />
    </>
  );
}

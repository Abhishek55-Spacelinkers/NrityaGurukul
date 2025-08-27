import { Front, Headabout, Mission } from "@/components/Animation/About";
import ImageCarousel from "@/components/sections/ImageCarousel";

export const metadata = {
  title: "About Us | Nritya Gurukul",
  description:
    "Learn about the mission, vision, and values of Nritya Gurukul. Discover our passion for preserving and promoting the art of Bharatnatyam.",
};

export default function About() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Headabout />

        {/* Founder Section */}
        <Front />
        
        {/* Carousel */}
        <ImageCarousel />
        
        {/* Mission, Vision, Values */}
        <Mission/>

      </div>
    </div>
  );
}
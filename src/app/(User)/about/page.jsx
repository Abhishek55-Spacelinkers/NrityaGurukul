import { Front, Headabout, Mission } from "@/components/Animation/About";
import ImageCarousel from "@/components/sections/ImageCarousel";

export const metadata = {
  title: "About Us | Nritya Gurukul",
  description:
    "Learn about the mission, vision, and values of Nritya Gurukul. Discover our passion for preserving and promoting the art of Bharatnatyam.",
  openGraph: {
    title: "About Us | Nritya Gurukul",
    description:
      "Learn about the mission, vision, and values of Nritya Gurukul. Discover our passion for preserving and promoting the art of Bharatnatyam.",
    type: "website",
    url: "https://yourwebsite.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1699097725162-b25fed939369",
        width: 1200,
        height: 800,
        alt: "Founder of Nritya Gurukul performing Bharatnatyam",
      },
    ],
  },
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
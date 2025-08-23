import { Front, Headabout } from "@/components/Animation/About";
import { Award, BookOpen, Heart } from "lucide-react";
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
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-orange-200 hover:scale-105 duration-300">
            <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold font-['Cinzel'] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To preserve and promote the authentic techniques of Bharatnatyam
              through high-quality instruction and performance.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-orange-200  hover:scale-105 duration-300">
            <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold font-['Cinzel'] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a leading center for classical dance excellence, fostering a
              community of passionate and skilled artists.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-orange-200  hover:scale-105 duration-300">
            <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold font-['Cinzel'] mb-2">
              Our Values
            </h3>
            <p className="text-gray-600">
              Discipline, Respect, Passion, and a commitment to lifelong
              learning and artistic integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
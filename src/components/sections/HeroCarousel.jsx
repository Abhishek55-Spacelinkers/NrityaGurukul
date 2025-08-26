"use client";

import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star, Calendar } from "lucide-react";

const dancerImages = [
  "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g5_kkoxvd.jpg",
  "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g4_e84hcb.jpg",
  "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586892/1a_fgek0z.jpg",
  "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586894/a2_lap8ar.jpg",
  "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586892/a3_wqnlek.jpg",
  "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/a4_ufyomg.jpg",
];

export default function HeroCarousel() {
  return (
    <motion.div
      className="relative "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="relative floating-animation">
        {/* Carousel */}
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="rounded-3xl shadow-2xl overflow-hidden"
        >
          <CarouselContent>
            {dancerImages.map((src, i) => (
              <CarouselItem key={i}>
                <img
                  src={src}
                  alt={`Dancer pose ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-[600px] rounded-3xl object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Background circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
      </div>

      {/* Floating Cards */}
      <motion.div
        className="hidden md:block absolute top-10 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="font-semibold text-sm">Expert Instructors</div>
            <div className="text-xs text-gray-600">
              Certified & Experienced
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-10 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      >
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-orange-500" />
          <div>
            <div className="font-semibold text-sm">Flexible Timings</div>
            <div className="text-xs text-gray-600">
              Morning & Evening
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

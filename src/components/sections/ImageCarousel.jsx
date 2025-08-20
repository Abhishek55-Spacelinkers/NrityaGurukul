"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586895/b1_ypxdyo.jpg",
    alt: "Students learning basic steps in a bright studio",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg",
    alt: "A close-up shot of a dancer's intricate hand gestures (Hastas)",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b3_nwp4fz.jpg",
    alt: "A group of dancers performing in colorful costumes on stage",
  },
  // {
  //   src: "/image/b1.",
  //   alt: "An instructor providing personalized feedback to a student",
  // },
  // {
  //   src: "/image/b1.",
  //   alt: "Dancers practicing in front of large mirrors",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1653670469019-242e9a73c4a5",
  //   alt: "A solo performer in a dramatic pose under stage lights",
  // },
];

export default function ImageCarousel() {
  return (
    <section className="py-20 max-[1000px]:px-4 px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title Animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Moments from</span> Our Gurukul
          </h2>
        </motion.div>

        {/* Carousel with Autoplay */}
        <Carousel
          className="w-full"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-orange-500 border-orange-500 hover:bg-orange-100 left-10 " />
          <CarouselNext className="text-orange-500 border-orange-500 hover:bg-orange-100 right-10" />
        </Carousel>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285526/b1_s2n93r.jpg",
    alt: "Students learning basic steps in a bright studio",
  },
  
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img4_cu6jiy.jpg",
    alt: "Students learning basic steps in a bright studio",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg",
    alt: "A close-up shot of a dancer's intricate hand gestures (Hastas)",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img3_yauyf3.jpg",
    alt: "A close-up shot of a dancer's intricate hand gestures (Hastas)",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285658/b3_gzt2ol.jpg",
    alt: "A group of dancers performing in colorful costumes on stage",
  },
];

export default function ImageCarousel() {
  return (
    <section className="py-10 sm:py-20 px-4">
      {/* <img src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755863490/1_r_khohba.svg" alt=""  className=""/> */}
      <div className="max-w-[1350px] mx-auto grid lg:grid-cols-[20%_60%_20%]">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755865033/left_wwmysk.png"
          alt=""
          className="hidden lg:block"
        />
        {/* Title Animation */}
        <div>
          <motion.div
            className="text-center mb-9"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-['Cinzel']">
              <span className="dance-ornament">Moments from</span> Our Gurukul
            </h2>
          </motion.div>

          {/* Carousel with Autoplay */}
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000 , stopOnMouseEnter: true })]}
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
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755865033/right_llu4g0.png"
          alt=""
          className="hidden lg:block"
        />
        <div></div>
      </div>
    </section>
  );
}

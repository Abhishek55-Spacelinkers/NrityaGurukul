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
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6535_jsokme.jpg",
    alt: "Students learning basic steps of Narayan Narayan",
  },
  
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6496_xkm20s.jpg",
    alt: "Students learning basic steps of Narayan Narayan",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6775_ftm4o9.jpg",
    alt: "Students learning basic steps of Narayan Narayan",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285477/VIN07280_endgol.jpg",
    alt: "A close-up shot of a dancer's intricate hand gestures (Prem Vinod)",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285475/VIN07247_p5bijm.jpg",
    alt: "Students learning basic steps of Prem Vinod",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img3_yauyf3.jpg",
    alt: "A close-up shot of a dancer's intricate hand gestures (Nine Night)",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img4_cu6jiy.jpg",
    alt: "Students learning basic steps of Prem Vinod",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756806095/5U6A1117_avvwho.jpg",
    alt: "A close-up shot of a dancer's intricate hand gestures (Arangetram)",
  },
  {
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756806095/5U6A1319_riebdw.jpg",
    alt: "Students learning basic steps of Arangetram",
  },
];

export default function ImageCarousel() {
  return (
    <section className="py-10 md:py-20 px-1 sm:px-4">
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
            <CarouselPrevious className="text-orange-500 border-orange-500 hover:bg-orange-100 left-2 sm:left-5 " />
            <CarouselNext className="text-orange-500 border-orange-500 hover:bg-orange-100 right-2 sm:right-5" />
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

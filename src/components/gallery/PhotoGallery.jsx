"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photoGalleryImages = [
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586892/ab2_gkljyb.jpg",
  },
  {
    alt: "A young student practicing a basic Bharatnatyam stance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg",
  },
  {
    alt: "Close-up of ornate traditional jewelry worn by a dancer",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586894/gallery1_zpvgdp.jpg",
  },
  {
    alt: "Dancers in vibrant silk sarees during a cultural event",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666075/g7_tfxxgk.jpg",
  },
  {
    alt: "An instructor demonstrating a complex footwork pattern",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666075/g9_ekmips.jpg",
  },
  {
    alt: "A candid moment of laughter between students during a break",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g6_dr9x41.jpg",
  },
  {
    alt: "A powerful, expressive pose by an advanced student",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g14_bfngtw.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g13_lytwkm.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g15_mfvcug.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g3_ec8lfq.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g11_kagpoi.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g2_cw2bvs.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g10_kjhk0b.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g12_y4wppi.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666071/g1_ubzkv5.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666071/g16_odcdet.jpg",
  },
  // { alt: "The entire Nritya Gurukul family together for a celebration", src: "" },
];

const PhotoGallery = () => {
  const showMore = 4;
  const [visible, setvisible] = useState(8);
  const max = 16;

  const handleClick = () => {
    setvisible((prev) => Math.min(prev + showMore, max));
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : photoGalleryImages.length - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev < photoGalleryImages.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Photo</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the life, culture, and art at Nritya Gurukul.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photoGalleryImages.slice(0, visible).map((image, index) => {
            return (
              <motion.div
                key={index}
                className="relative aspect-square w-full rounded-xl overflow-hidden shadow-xl border border-orange-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: (visible - index) * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </motion.div>
            );
          })}
        </div>
        {visible < max ? (
          <motion.div
            className="w-fit mx-auto"
            initial={{ opacity: 0.8, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={handleClick}
          >
            <button className="rounded-2xl text-xl mt-6 px-8 py-2 cursor-pointer mx-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Show More
            </button>
          </motion.div>
        ) : (
          ""
        )}
      </div>
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 flex z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-90"
              onClick={() => setSelectedIndex(null)}
            ></div>
            <div className="flex items-center mt-0 min-h-screen px-4 z-20 mx-auto">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 md:top-14 md:right-14 text-white cursor-pointer"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="text-5xl" size={35} />
              </button>

              {/* Prev Button */}
              <button
                className="absolute left-4 md:left-14 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={handlePrev}
              >
                <ChevronLeft size={50} />
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={photoGalleryImages[selectedIndex].src}
                  alt={photoGalleryImages[selectedIndex].alt}
                  className="mx-auto max-h-[80vh] rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.95, x: 200 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -200 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Next Button */}
              <button
                className="absolute right-4 md:right-14 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={handleNext}
              >
                <ChevronRight size={50} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;

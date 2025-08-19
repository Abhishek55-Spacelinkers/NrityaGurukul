'use client'

import { motion } from 'framer-motion';

const photoGalleryImages = [
  { alt: "Group of students posing after a successful performance", src: "https://images.unsplash.com/photo-1635402689379-545b134e58ed" },
  { alt: "A young student practicing a basic Bharatnatyam stance", src: "https://images.unsplash.com/photo-1528415784548-1850e0fc8c57" },
  { alt: "Close-up of ornate traditional jewelry worn by a dancer", src: "https://images.unsplash.com/photo-1601121141461-920cb1993441" },
  { alt: "Dancers in vibrant silk sarees during a cultural event", src: "https://images.unsplash.com/photo-1699097726583-bf156db74c06" },
  { alt: "An instructor demonstrating a complex footwork pattern", src: "https://images.unsplash.com/photo-1549349824-ed81166c3138" },
  { alt: "A candid moment of laughter between students during a break", src: "https://images.unsplash.com/photo-1605407896441-ad4ad4be994d" },
  { alt: "A powerful, expressive pose by an advanced student", src: "https://images.unsplash.com/photo-1690267647311-eeeac21df6c4" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://images.unsplash.com/photo-1600899588538-c124364dbf43" },
];

const PhotoGallery = () => {
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
          {photoGalleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square w-full rounded-xl overflow-hidden shadow-xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              <img 
                className="w-full h-full object-cover" 
                alt={image.alt} 
                src={image.src} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
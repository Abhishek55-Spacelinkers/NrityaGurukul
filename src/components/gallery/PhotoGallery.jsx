'use client'

import { motion } from 'framer-motion';

const photoGalleryImages = [
  { alt: "Group of students posing after a successful performance", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586892/ab2_gkljyb.jpg" },
  { alt: "A young student practicing a basic Bharatnatyam stance", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg" },
  { alt: "Close-up of ornate traditional jewelry worn by a dancer", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586894/gallery1_zpvgdp.jpg" },
  { alt: "Dancers in vibrant silk sarees during a cultural event", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666075/g7_tfxxgk.jpg" },
  { alt: "An instructor demonstrating a complex footwork pattern", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666075/g9_ekmips.jpg" },
  { alt: "A candid moment of laughter between students during a break", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g6_dr9x41.jpg" },
  { alt: "A powerful, expressive pose by an advanced student", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g14_bfngtw.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g13_lytwkm.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g15_mfvcug.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g3_ec8lfq.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g11_kagpoi.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g2_cw2bvs.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g10_kjhk0b.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g12_y4wppi.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666071/g1_ubzkv5.jpg" },
  { alt: "The entire Nritya Gurukul family together for a celebration", src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666071/g16_odcdet.jpg" },
  // { alt: "The entire Nritya Gurukul family together for a celebration", src: "" },
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
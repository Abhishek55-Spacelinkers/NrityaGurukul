'use client'
import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  "https://www.youtube.com/embed/ktkK6g6JQzM?si=-jbX8_mUjPRvoiy1",
  "https://www.youtube.com/embed/L8wzWvDo8FU?si=2LBkjX_eJznQ-DeP",
  "https://www.youtube.com/embed/Q9DesevdZMU?si=6SMHcF5sljaGX6Cp",
  "https://www.youtube.com/embed/Sm1RDBhnkQQ?si=TPne54uqUJWrCvRU",
  "https://www.youtube.com/embed/cMDIzOqkOao?si=zNup-gzJuohY5uSs",
  "https://www.youtube.com/embed/xGyJjF9cfe0?si=E9LDSLfiZAt5su41",
  "https://www.youtube.com/embed/GCeY0ILzws4?si=y-lJUDRcC6B97IZD",
  "https://www.youtube.com/embed/rdHU5DzPkis?si=uEYQCd-PhtJ06SB_",
  "https://www.youtube.com/embed/oYYsibfXcKY?si=5IbSsKHnpzjdG_ie"
];

const VideoGallery = () => {
  return (
    <section className="py-20 px-4 scroll-mt-20" id="Our_Performances">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Our</span> Performances
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Witness the grace, beauty, and passion of Bharatanatyam through our captivating dance performances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((videoSrc, index) => (
            <motion.div
              key={index}
              className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

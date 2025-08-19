"use client";

import { motion } from "framer-motion";

export function Headabout() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl font-bold font-['Cinzel'] mb-4">
        <span className="dance-ornament">Our Story</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Nritya Gurukul was founded with a singular vision: to create a sanctuary
        for the timeless art of Bharatnatyam, where tradition meets passion and
        dedication.
      </p>
    </motion.div>
  );
}

export function Front() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto"
      >
        <img
          src="/image/ab1.JPG"
          alt="Founder of Nritya Gurukul in a graceful pose"
          className="  rounded-2xl shadow-2xl h-[550px]"
        />
      </motion.div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold font-['Cinzel']">
          The Heart of the Gurukul
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our founder, a disciple of legendary gurus, brings over 15 years of
          performance and teaching experience. Her journey is fueled by a
          deep-rooted love for Bharatnatyam and a desire to impart its spiritual
          and artistic depth to the next generation. At Nritya Gurukul, we
          believe dance is not just a skill but a form of devotion and
          self-expression.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We are committed to providing authentic training that honors the rich
          lineage of this classical dance form while nurturing the individual
          creativity of each student.
        </p>
      </motion.div>
    </>
  );
}


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GalleryIntro() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold font-['Cinzel'] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="dance-ornament">The Stage is Calling</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At Nritya Gurukul, we believe performance is the culmination of
          dedication, passion, and artistry. Our gallery is a testament to the
          vibrant community we've built—a place where every student, from
          beginner to advanced, gets a chance to shine. Witness the grace,
          emotion, and power of Bharatnatyam as our students bring stories to
          life on stage.
        </motion.p>

        <motion.p
          className="text-xl text-gray-700 font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          This could be you. Your journey to the stage starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link href="/book-class">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold pulse-glow"
            >
              Join Our Performers
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

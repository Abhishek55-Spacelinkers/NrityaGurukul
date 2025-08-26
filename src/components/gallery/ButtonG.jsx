"use client";
import { Camera, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ButtonG() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 sm:py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-cinzel dance-ornament">
            Your Moment Awaits
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every performance begins with a single step. Explore our gallery of
            timeless poses and live performances that bring{" "}
            <span className="font-semibold">Bharatanatyam</span> to life.
          </p>
          <p className="text-md text-gray-600">
            Whether you want to relive the energy of the stage or see the beauty
            behind the scenes, start your journey right here.
          </p>
        </motion.div>

        {/* Right Action Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <Link
            href={"/gallery#photos"}
            className="cursor-pointer border border-orange-600 rounded-2xl p-6 bg-gray-50 hover:bg-red-50 transition transform hover:scale-105 shadow-sm"
          >
            <motion.div
              className="inline-block "
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-10 h-10 text-orange-500 mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">View Gallery</h3>
            <p className="text-gray-600 text-sm">
              Step into the world of elegance through our photo collections.
            </p>
          </Link>
          {/* Card 2 */}
          <Link
            href={"/gallery#Our_Performances"}
            className="cursor-pointer border border-orange-600 rounded-2xl p-6 bg-gray-50 hover:bg-red-50 transition transform hover:scale-105 shadow-sm"
          >
            <motion.div
              className="inline-block "
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <PlayCircle className="w-10 h-10 text-orange-500 mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Watch Performances</h3>
            <p className="text-gray-600 text-sm">
              Experience the magic of live recitals and stage moments.
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

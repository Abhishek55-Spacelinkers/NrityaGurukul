"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6 -mt-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3">
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-orange-600 font-semibold text-sm">
                  🎭 Join Nritya Gurukul Now!
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold font-cinzel leading-17">
                <span className="dance-ornament">Bharatanatyam</span>
                <br />
                <span className="text-gray-800">Dance Classes</span>
              </h1>

              <p className="text-[18px] text-gray-600 leading-6  text-justify">
                Discover the divine art of Bharatnatyam - where every movement
                tells a story, every gesture speaks the language of gods, and
                every step connects you to ancient traditions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="text-center p-4 backdrop-blur-sm rounded-xl border bg-orange-400/30 border-orange-200"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">100+</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
              </motion.div>

              <motion.div
                className="text-center p-4 backdrop-blur-sm rounded-xl border bg-orange-400/30 border-orange-200"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">13+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/book-class">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full pulse-glow"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book A Class
                </Button>
              </Link>

              <Link href="/gallery#Our_Performances">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full"
                >
                  Watch Performances
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <HeroCarousel/>
        </div>
      </div>
    </section>
  );
}

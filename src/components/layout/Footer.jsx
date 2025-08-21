"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Pinterest,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const { toast } = useToast();

  return (
    <footer className="relative py-12 px-4 bg-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[35%_15%_15%_35%] gap-8">
          {/* Logo & description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🕉</span>
              </div>
              <div>
                <span className="text-xl font-bold font-['Cinzel']">
                  Nritya Gurukul
                </span>
              </div>
            </Link>
            <p className="text-gray-400">
              Preserving the ancient art of Bharatnatyam through dedicated
              teaching and passionate learning.
            </p>
            <div className="flex gap-5 text-gray-400">
              <Link className="text-sm underline" href="/terms">Terms</Link>
              <Link className="text-sm underline" href="/privacy">Privacy</Link>
              <Link className="text-sm underline" href="/contact">Contact</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold block">Quick Links</span>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold block">Courses</span>
            <div className="space-y-2">
              <Link
                href="/courses#arangetram"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Arangetram
              </Link>
              <Link
                href="/courses#levels"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Course Levels
              </Link>
              <Link
                href="/courses#format"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Theory Progression
              </Link>
              <Link
                href="/courses#faqs"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <span className="text-lg font-semibold">Follow Us</span>
              <div className="flex space-x-4 ">
                <a
                  href="https://www.facebook.com/spacelinkers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="hover:scale-125 duration-200 cursor-pointer hover:text-[#F58634]" />
                </a>
                <a
                  href="https://www.instagram.com/_spacelinkers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="hover:scale-125 duration-200 cursor-pointer hover:text-[#F58634]" />
                </a>

                <a
                  href="https://wa.me/919266579793"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="hover:scale-125 duration-200 cursor-pointer hover:text-[#F58634]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/spacelinkers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="hover:scale-125 duration-200 cursor-pointer hover:text-[#F58634]" />
                </a>
              </div>
            </div>
            <motion.div
              className="relative h-[150px]  rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.126623790769!2d77.38848879999999!3d28.530279499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8a34fda2d37%3A0x6fe5212e1ec479ba!2sNritya%20Gurukul!5e1!3m2!1sen!2sin!4v1755075221594!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nritya Gurukul. All rights reserved. |
            <span className="ml-2">
              Powered by{" "}
              <a
                href="https://spacelinkers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Spacelinkers Infotech
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

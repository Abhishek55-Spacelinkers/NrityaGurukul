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
    <footer className="relative py-12 px-4 bg-[#ECD9BA] text-gray-900 overflow-hidden">
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
        <div className="grid grid-cols-1 w-full md:w-[70%] mx-auto lg:w-[100%] lg:grid-cols-[35%_29%_32%] gap-8 relative p-5">
          {/* Logo & description */}
          <div className="space-y-1">
            <Link href="/" className="flex w-fit mx-auto lg:ml-0 items-center space-x-3">
              <img src="/assets/logo.svg" alt="Logo" className="h-28" />
            </Link>
            <p className="text-gray-700 text-center lg:text-justify w-[96%]">
              Preserving the ancient art of Bharatanatyam through dedicated
              teaching and passionate learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-7 mx-auto w-fit lg:w-full">
        
            <div className="space-y-4 w-fit ">
              <span className="text-lg font-semibold block">Quick Links</span>
              <div className="space-y-1 ">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/gallery"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="space-y-4 w-fit">
              <span className="text-lg font-semibold block">Courses</span>
              <div className="space-y-1 ">
                <Link
                  href="/courses#arangetram"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  Arangetram
                </Link>
                <Link
                  href="/courses#levels"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  Course Levels
                </Link>
                <Link
                  href="/courses#faqs"
                  className="block text-gray-700 hover:text-[#F58634]  transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="/book-class#payfees"
                  className="block text-gray-700 hover:text-[#F58634] transition-colors"
                >
                  Pay Fees
                </Link>
              </div>
            </div>
              
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-2 lg:ml-7">
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
              className="relative h-[150px]  rounded-2xl overflow-hidden shadow-lg hidden lg:block"
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
        <div className="flex gap-5 text-gray-700 mb-1 mt-2 mx-auto w-fit lg:ml-0">
              <Link className="text-sm hover:text-[#F58634]" href="/terms">Terms & Conditions</Link>
              <Link className="text-sm hover:text-[#F58634] border-l pl-5" href="/privacy">Privacy Policy</Link>
            </div>
        {/* Footer bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-700">
            © {new Date().getFullYear()} Nritya Gurukul. All rights reserved. |
            <span className="ml-2">
              Powered by{" "}
              <a
                href="https://spacelinkers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 transition-colors"
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

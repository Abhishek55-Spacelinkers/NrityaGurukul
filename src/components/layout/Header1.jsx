"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Details } from "@/lib/data";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "/courses", text: "Courses" },
  { href: "/gallery", text: "Gallery" },
  { href: "/contact", text: "Contact Us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🔑 States for scroll behavior
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setShow(true); // always show at very top
      } else if (window.scrollY > lastScrollY + 10) {
        setIsOpen(false)
        setShow(false); // scrolling down enough → hide
      } else if (window.scrollY < lastScrollY - 12) {
        setShow(true); // scrolling up enough → show
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 90) {
        setShow(true); // show when cursor near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // from-[#ff6b35] via-[#f7931e] to-[#ffd700]
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r  to-yellow-400 via-orange-500 from-red-600  text-white text-xs py-2 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1  cursor-pointer">
              <Phone size={14} />
              <a href={`tel:${Details.cphone}`}>{Details.phone}</a>
            </div>
            <div className="hidden sm:flex items-center space-x-1 font-poppins  cursor-pointer">
              <MapPin size={14} />
              <span>Kendriya Vihar II, Sector 82, Noida</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="font-medium text-black">
              Join the best Bharatanatyam classes in Noida!
            </span>
          </div>
          <div className="sm:hidden block">
            <span className="font-medium text-black">
              Bharatanatyam in Noida
            </span>
          </div>
        </div>
      </motion.div>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 w-full bg-white backdrop-blur-sm z-40 shadow-md transition-all duration-500 ease-in-out ${
          show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ top: "32px" }}
      >
        {/* Topbar */}

        {/* Navbar */}
        <div className="max-w-7xl mx-auto flex justify-between items-center py-0.5 px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <img
              src="/assets/logo.svg"
              alt="Nritya Gurukul Logo"
              className="h-28"
              loading="lazy"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden mob:flex items-center space-x-4"
            role="navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 lg:px-4 py-2 font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link href="/book-class">
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full pulse-glow"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Class
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="mob:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-orange-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mob:hidden mt-4"
            >
              <nav
                className="flex flex-col items-end w-[95%]"
                role="navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-right w-fit px-4 py-3 rounded-md font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-orange-50 text-orange-500"
                        : "text-gray-700 hover:bg-orange-50"
                    }`}
                  >
                    {link.text}
                  </Link>
                ))}
                <Link href="/book-class" className="w-fit mt-2 mb-5">
                  <Button
                    size="lg"
                    onClick={() => setIsOpen(false)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full w-full"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Class
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Sparkles, Target, Users } from "lucide-react";
import { Details } from "@/lib/data";

export function WhyJoinUs() {
  const whyUsPoints = [
    {
      icon: <Sparkles className="w-8 h-8 text-orange-500" />,
      title: "Authentic Lineage",
      description:
        "Learn from instructor trained in pure, traditional styles passed down through generations of gurus.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Personalized Attention",
      description:
        "Our small batch sizes ensure every student receives individual feedback and guidance to flourish.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Holistic Development",
      description:
        "We focus on both practical dance skills and the rich theoretical and spiritual aspects of Bharatnatyam.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Why Join</span> Nritya Gurukul?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a transformative journey into the world of classical dance
            with our expert guidance and nurturing environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {whyUsPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 sm:p-8 rounded-2xl text-center shadow-lg border border-orange-100 hover:bg-orange-500/70 group hover:text-white duration-150"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-4 rounded-full w-fit p-2 group-hover:bg-white mx-auto">
                {point.icon}
              </div>
              <h3 className="text-2xl font-semibold font-['Cinzel'] mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/book-class">
            <Button
              className="py-6 sm:py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full text-md  font-semibold pulse-glow"
            >
              Begin Your Dance Journey Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Front() {
  return (
    <>
      <motion.div
        className="text-center py-12 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold font-['Cinzel'] mb-5">
          <span className="dance-ornament">Get In Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are here to answer any questions you may have. Reach out to us and
          we'll respond as soon as we can.
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-12 sm:mb-12 overflow-hidden">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-orange-200 space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-1">Our Location</h3>
                <p className="text-gray-700 max-w-[290px]">{Details.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-1">Contact Number</h3>
                <div className="flex">
                  <a href={`tel:${Details.cphone}`}>
                    <p className="text-gray-700">{Details.phone}</p>
                  </a>
                  ,
                  <a href={`tel:${Details.cphone2}`}>
                    <p className="text-gray-700 ml-2">{Details.phone2}</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                <a href="mailto:info@spacelinkers.com">
                  <p className="text-gray-700">{Details.email}</p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-orange-200"
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
    </>
  );
}

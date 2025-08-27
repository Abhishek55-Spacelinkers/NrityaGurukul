"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Details } from "@/lib/data";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">Get In Touch</h2>
              <p className="text-xl opacity-90">
                Ready to begin your Bharatanatyam journey? Contact us for more information about our upcoming classes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Our Location</h3>
                  <p className="opacity-90 max-w-[340px]">
                    {Details.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Contact Number</h3>
                  <div className="flex">
                  <a href={`tel:${Details.cphone}`}>
                    <p className="opacity-90">{Details.phone}</p>
                  </a>
                  ,
                  <a href={`tel:${Details.cphone2}`}>
                    <p className="opacity-90 ml-2">{Details.phone2}</p>
                  </a>
                </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <a href="mailto:info@spacelinkers.com">
                    <p className="opacity-90">{Details.email}</p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl transform scale-x-[-1]"
              alt="Bharatanatyam dance academy location"
              src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586894/git_zskcze.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

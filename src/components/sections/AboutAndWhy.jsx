"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutAndWhy() {
  return (
    <section className=" text-gray-800">
      {/* Section 2: About the School */}
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg hidden md:block"
        >
          <img
            src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg"
            alt="Bharatanatyam Dance"
            className="object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-4 font-cinzel dance-ornament">
            About Our Bharatanatyam Dance Classes
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg md:hidden block my-1"
          >
            <img
              src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg"
              alt="Bharatanatyam Dance"
              className="object-cover"
            />
          </motion.div>
          <p className="text-lg text-gray-600 mb-6 mt-1.5">
            We are dedicated to preserving the timeless art of Bharatanatyam
            while creating a nurturing environment for learners of all levels.
            With experienced guru, certified programs, and global accessibility,
            we aim to help every student embrace this classical dance with grace
            and confidence.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Experienced Guru",
              "Certified Courses",
              "Global Online Classes",
              "Cultural Performances",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={22} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 3: Why Learn Bharatanatyam with Us */}
      <div className="py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cinzel">
            <span className="dance-ornament">Why Learn </span>Bharatanatyam with
            Us?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover a holistic learning experience that blends traditional
            wisdom with modern techniques, empowering you to become a skilled
            performer and an ambassador of culture.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Mentorship",
                desc: "Learn under the guidance of experienced guru with one-on-one attention.",
                icon: "🎯",
              },
              {
                title: "International Certification",
                desc: "Earn globally recognized certificates that validate your skills.",
                icon: "📜",
              },
              {
                title: "Performance Opportunities",
                desc: "Showcase your talent at cultural events and stage performances.",
                icon: "🌟",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border hover:scale-105 border-orange-200 hover:shadow-xl  transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredStudents = [
  { 
    id: 2, 
    name: "Rudrakshi_Kushwah", 
    level: "Beginner", 
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054836/Rudrakshi_Kushwah_-_Beginner_fyqbw5.jpg" 
  },
  { 
    id: 3, 
    name: "Ojistha Das Biswas", 
    level: "Intermediate", 
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054829/Ojistha_Das_Biswas_-_Intermediate_Level_bc5c0h.jpg" 
  },
  { 
    id: 1, 
    name: "Tanishtha_Mandal", 
    level: "Adavanced", 
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054954/Tanishtha_Mandal-_Adavance_Level_orztag.jpg" 
  },
  { 
    id: 4, 
    name: "Daraksha Sinha", 
    level: "Advanced", 
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054811/Daraksha_Sinha_-_Advance_Level_axoalz.jpg" 
  },
];

export default function FeaturedStudents() {
  return (
    <section className="my-10 md:my-16  text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4 font-cinzel dance-ornament"
        >
          Our Students
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 mb-8"
        >
          A glimpse of the shining stars at Nritya Gurukul. From first steps to
          stage, every student’s journey is inspiring.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <motion.img
                src={student.img}
                alt={student.name}
                className="w-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {student.name}
                </h3>
                <p className="text-sm text-orange-600">{student.level}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="mt-8"
        >
          <Link
            href="/gallery#Our_students"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-full shadow-md hover:bg-orange-700 transition"
          >
            See All Students →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

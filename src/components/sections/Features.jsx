"use client"
import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    icon: "🎭",
    title: "Traditional Training",
    description: "Learn authentic Bharatanatyam techniques passed down through generations of master dancers"
  },
  {
    icon: "👥",
    title: "Small Batch Sizes",
    description: "Personalized attention with maximum 8 students per batch for effective learning"
  },
  {
    icon: "🏆",
    title: "Performance Opportunities",
    description: "Regular recitals and cultural events to showcase your progress and build confidence"
  },
  {
    icon: "📚",
    title: "Theory & Practice",
    description: "Comprehensive curriculum covering dance theory, mythology, and practical techniques"
  },
  {
    icon: "🎵",
    title: "Live Music Training",
    description: "Learn to dance with live Carnatic music and understand rhythm patterns"
  },
  {
    icon: "🌟",
    title: "Certification Program",
    description: "Structured levels with certificates upon completion of each grade"
  }
];

const Features = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Why Choose Our</span> Gurukul?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience authentic Bharatanatyam training with traditional techniques and modern teaching methods
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 hover:shadow-xl hover:bg-orange-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
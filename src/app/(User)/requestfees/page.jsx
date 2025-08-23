"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const classes = [
  { id: "beginner-foundation", title: "Beginner Foundation Course" },
  { id: "intermediate-level", title: "Intermediate Level Program" },
  { id: "advanced-masterclass", title: "Advanced Masterclass" },
  { id: "prarambhik", title: "Prarambhik" },
  { id: "praveshika-pratham", title: "Praveshika Pratham" },
  { id: "praveshika-purna", title: "Praveshika Purna" },
  { id: "madhyama-pratham", title: "Madhyama Pratham" },
  { id: "madhyama-purna", title: "Madhyama Purna" },
  { id: "visharad-pratham", title: "Visharad Pratham" },
  { id: "visharad-purna", title: "Visharad Purna" },
  { id: "arangetram", title: "Arangetram Training" },
];

export default function RequestFeesForm() {
  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="fees-form" className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading + Subheading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold font-['Cinzel'] mb-4">
              <span className="dance-ornament">Request</span> Fees Information
            </h1>
            <p className="text-xl text-gray-600">
              Curious about course fees? Fill in the details below and we’ll get
              back to you with complete information.
            </p>
          </motion.div>

          {/* Form Box */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formspree.io/f/xovlrzvq"
              method="POST"
              className="space-y-6"
            >
              {/* Select Course */}
              <div className="space-y-2">
                <Label htmlFor="course" className="text-gray-700 font-medium">
                  Select Course *
                </Label>
                <select
                  id="course"
                  name="Selected Course"
                  required
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full border border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg px-3 py-2"
                >
                  <option value="">-- Choose a course --</option>
                  {classes.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Additional Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 min-h-[100px]"
                  placeholder="Ask about discounts, batch timings, or any specific questions..."
                />
              </div>

              {/* Submit */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold pulse-glow"
                >
                  Request Fees
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

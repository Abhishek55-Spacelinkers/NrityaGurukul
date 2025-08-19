"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Star,
  Zap,
  ChevronsRight,
  FileText,
  QrCode,
  MessageSquare,
} from "lucide-react";

export function BookingGuide() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: "Fill the Form",
      description:
        "Select your desired class and fill out the booking form with your details.",
    },
    {
      icon: <QrCode className="w-8 h-8 text-orange-500" />,
      title: "Pay the Fees",
      description:
        "Scan the QR code provided to complete the payment for the class fees.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Share & Confirm",
      description:
        "Share the payment screenshot with us on WhatsApp to confirm your admission.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-orange-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-cinzel mb-4">
            <span className="dance-ornament">How to Book</span> Your Class
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to secure your spot at Nritya Gurukul.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl text-center shadow-lg border border-orange-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold font-cinzel mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <img
            className="mx-auto rounded-xl shadow-md border-4 border-white"
            alt="QR Code for payment"
            src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf"
          />
          <p className="mt-4 text-gray-600">
            Scan the QR code with any UPI app to pay.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Front() {
  const [selectedClass, setSelectedClass] = useState("");
  const router = useRouter();

  const handleBookNow = () => {
    if (selectedClass) {
      router.push(`/booking-form?class=${selectedClass}`);
    }
  };

  const classes = [
    {
      id: "beginner-foundation",
      title: "Beginner Foundation Course",
      description:
        "Perfect for absolute beginners. Learn the fundamental Adavus (steps), Hastas (hand gestures), and basic theory.",
      level: "Beginner",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: "intermediate-level",
      title: "Intermediate Level Program",
      description:
        "For students with basic knowledge. Focus on complex compositions, Abhinaya (expressions), and performance skills.",
      level: "Intermediate",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
    },
    {
      id: "advanced-masterclass",
      title: "Advanced Masterclass",
      description:
        "For experienced dancers. Delve into advanced choreography, Nattuvangam, and preparing for solo performances (Arangetram).",
      level: "Advanced",
      icon: <ChevronsRight className="w-6 h-6 text-red-500" />,
    },
  ];
  
  return (
    <>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold font-cinzel mb-4">
          <span className="dance-ornament">Choose Your Class</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Select the program that best fits your skill level and begin your
          journey into the world of Bharatnatyam.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <RadioGroup onValueChange={setSelectedClass} className="space-y-6">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Label htmlFor={classItem.id} className="block cursor-pointer">
                <div
                  className={`flex items-center space-x-4 p-6 rounded-2xl border-2 transition-all ${
                    selectedClass === classItem.id
                      ? "bg-orange-50 border-orange-500 shadow-lg"
                      : "bg-white/70 border-orange-200 hover:border-orange-400"
                  }`}
                >
                  <RadioGroupItem value={classItem.id} id={classItem.id} />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold font-cinzel flex items-center gap-2">
                        {classItem.icon}
                        {classItem.title}
                      </h3>
                      <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        {classItem.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      {classItem.description}
                    </p>
                  </div>
                </div>
              </Label>
            </motion.div>
          ))}
        </RadioGroup>
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold pulse-glow"
          disabled={!selectedClass}
          onClick={handleBookNow}
        >
          Proceed to Booking Form
        </Button>
        {!selectedClass && (
          <p className="text-sm text-gray-500 mt-2">
            Please select a class to proceed.
          </p>
        )}
      </motion.div>
    </>
  );
}

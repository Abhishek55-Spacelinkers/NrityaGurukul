"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";

const InquiryForm = () => {
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, changen] = useState("");

  const [phone, setPhone] = useState("");
  const [active, changea] = useState(false);

  const phoneUtil = PhoneNumberUtil.getInstance();
  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
  const isValidp = isPhoneValid(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidp) return;
    setLoading(true);


    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Failed to submit. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry-form" className="py-16 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Have a Question</span> or Need
            Assistance?
          </h2>
          <p className="text-xl text-gray-600">
            Fill out this form if you’d like to inquire about classes, timings,
            or payment options. Our team will get back to you shortly.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
            key="success"
              className=" py-20 h-full bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto px-2 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                  <p className="text-sm font-light ">
                    We’ve received your message and will contact you shortly.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
            key="form"
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="subject" value="Inquery Form" />
                <input type="hidden" name="from_name" value={name}></input>
                {/* Honeypot Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Radio Group */}
                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium text-lg font-['Cinzel']">
                    I'm a{" "}
                  </Label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="I'm a "
                        value="Parent/Guardian"
                        defaultChecked
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span>Parent/Guardian</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="I'm a "
                        value="Student"
                        required
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span>Student</span>
                    </label>
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(event) => changen(event.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 ">
                  <Label htmlFor="phone">Phone Number *</Label>
                    {/* <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      /> */}

                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    id="phone"
                    required
                    onChange={(phone) => setPhone(phone)}
                    inputProps={{
                      name: "phone",
                      required: true,
                      className: `!font-medium border-b-2 ml-1 !pl-1 !py-1.5 !w-full !text-sm placeholder-white  border border-gray-300 rounded ${
                        active
                        ? isValidp
                        ? "!border-gray-300 !text-black"
                        : "!border-red-600 !text-red-600"
                        : null
                      }`,
                    }}
                    />

                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Dance Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    placeholder="e.g., Beginner, 2 years classical dance, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your interest, timings, or any questions..."
                  />
                </div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                     onClick={() => changea(true)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold pulse-glow"
                  >
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InquiryForm;

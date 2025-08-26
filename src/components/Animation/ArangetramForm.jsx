"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ArangetramForm() {
  const steps = ["Student Details", "Event Details", "Add-ons"];
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    yearsTrained: "",
    guruName: "",
    preferredDate: "",
    location: "",
    auditoriumType: "",
    estimatedGuests: "",
    costumeCount: "",
    includeJewelry: false,
    includePhotoVideo: false,
    includeMakeup: false,
  });

  const handleNext = () => step < steps.length - 1 && setStep(step + 1);
  const handleBack = () => step > 0 && setStep(step - 1);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const formsubmit = (e) => {
    setShowPopup(true);
  };

  return (
    <>
      <motion.div
        className="p-8 rounded-2xl shadow-2xl md:w-[800px] bg-white  relative text-gray-600 mx-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Progress */}
        <div className="flex justify-between mb-6">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`flex-1 text-center text-[17px] font-semibold cursor-default rounded-xl  ${
                index === step ? "text-orange-600 border" : "text-gray-400"
              } ${index < step && " cursor-pointer"}`}
              onClick={() => index < step && setStep(index)}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 */}
          {step === 0 && (
            <div className="space-y-4">
              <Label className="font-medium">Student Name *</Label>
              <Input
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                placeholder="Enter Student Name"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />

              <Label className="font-medium">Age *</Label>
              <Input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Enter Age"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />

              <Label className="font-medium">Years of Training *</Label>
              <Input
                type="number"
                name="yearsTrained"
                value={formData.yearsTrained}
                onChange={handleChange}
                required
                placeholder="Enter Years of Training"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />

              <Label className="font-medium">Guru's Name *</Label>
              <Input
                name="guruName"
                value={formData.guruName}
                onChange={handleChange}
                required
                placeholder="Enter Guru's Name"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="space-y-4">
              <Label className="font-medium">Preferred Date *</Label>
              <Input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />

              <Label className="font-medium">Event Location *</Label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter Event Location"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />

              <Label className="font-medium">Auditorium Type *</Label>
              <select
                name="auditoriumType"
                value={formData.auditoriumType}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-xl border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Auditorium</option>
                <option value="private">Private</option>
                <option value="government">Government</option>
                <option value="openStage">Open Stage</option>
              </select>

              <Label className="font-medium">Estimated Guests *</Label>
              <Input
                type="number"
                name="estimatedGuests"
                value={formData.estimatedGuests}
                onChange={handleChange}
                required
                placeholder="Enter Guest Count"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div className="space-y-4">
              <Label className="font-medium">Number of Costumes</Label>
              <Input
                type="number"
                name="costumeCount"
                value={formData.costumeCount}
                onChange={handleChange}
                placeholder="Enter Costume Count"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="includeJewelry"
                  checked={formData.includeJewelry}
                  onChange={handleChange}
                />
                <span>Include New Jewelry with Ghungroo</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="includePhotoVideo"
                  checked={formData.includePhotoVideo}
                  onChange={handleChange}
                />
                <span>Photo & Videography (Pre-event & Event Day)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="includeMakeup"
                  checked={formData.includeMakeup}
                  onChange={handleChange}
                />
                <span>Makeup Artist for Both Days</span>
              </label>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            {step > 0 ? (
              <Button
                type="button"
                onClick={handleBack}
                className="bg-gray-900 hover:bg-gray-700 duration-200 text-white px-6 py-2 rounded-full"
              >
                Back
              </Button>
            ) : (
              <div></div>
            )}
            {step < steps.length - 1 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={formsubmit}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </motion.div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-700">
              Our team will get in touch with you soon. <br />
              For urgent queries, call us at{" "}
              <span className="font-semibold">+91-XXXXXXXXXX</span>
            </p>
            <Button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full"
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
}

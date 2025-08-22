"use client";
import React, { useState } from "react";

const BudgetRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "", // Class or Performance
    experienceLevel: "",
    budgetRange: "",
    inclusions: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // 👉 connect to Firebase / API / Email service
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center font-['Cinzel'] mb-4">
          Request for Budget & Inclusions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Interested in joining our Bharatanatyam classes or inviting us for a
          performance? Fill out this form to receive budget details and available
          inclusions.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Request Type */}
          <select
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">I am interested in *</option>
            <option value="class">Bharatanatyam Classes</option>
            <option value="performance">Booking a Performance</option>
          </select>

          {/* Experience Level (if class selected) */}
          <input
            type="text"
            name="experienceLevel"
            placeholder="Dance Experience (Beginner, Intermediate, Advanced)"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Budget */}
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Budget Range *</option>
            <option value="below-10k">Below ₹10,000</option>
            <option value="10k-25k">₹10,000 - ₹25,000</option>
            <option value="25k-50k">₹25,000 - ₹50,000</option>
            <option value="50k+">₹50,000 & above</option>
          </select>

          {/* Inclusions */}
          <textarea
            name="inclusions"
            placeholder="What inclusions do you need? (e.g. costumes, music, stage setup, practice sessions...)"
            value={formData.inclusions}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Additional Notes */}
          <textarea
            name="message"
            placeholder="Any additional details or requirements..."
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BudgetRequestForm;

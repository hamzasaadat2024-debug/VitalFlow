// src/Components/Contact/Contact.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const isFormValid =
    formData.name && formData.email && formData.phone && formData.date && formData.message;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <h6 className="text-sm font-semibold text-white">Contact</h6>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Contact us for more information & get started
          </h2>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Full Name + Email side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Phone + Date side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message or additional details"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full rounded-md py-2 font-semibold transition ${
              isFormValid
                ? "bg-white text-blue-600 hover:bg-gray-100"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

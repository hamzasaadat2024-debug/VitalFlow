// src/Components/Testimonials/Testimonials.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import testimonialsData from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Dot + Small Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h6 className="text-black text-sm font-semibold">Testimonials</h6>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What our satisfied and happy clients have to say
        </h2>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-xl shadow-md p-6 flex flex-col items-start text-left"
            >
              {/* Profile Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-blue-500"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

              {/* Review Text */}
              <p className="text-gray-700 mb-4">{item.text}</p>

              {/* Star Rating */}
              <div className="flex justify-start">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {[...Array(5 - item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// src/Components/FAQ/FAQ.jsx
import React, { useState } from "react";
import faqData from "./faqData";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Dot + Small Header (centered) */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h6 className="text-black text-sm font-semibold">FAQ's</h6>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Frequently asked questions for quick answers
        </h2>

        {/* Accordion */}
        <div className="space-y-6 text-left">
          {faqData.map((item, index) => (
            <div key={index}>
              {/* Question Row */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                {openIndex === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}
              </div>

              {/* Small hr under each question */}
              <hr className="my-2 border-gray-300" />

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

// src/Components/HowItWorks/HowItWorks.jsx
import React from "react";
import uni from "../../assets/islam.jpg";
import profile1 from "../../assets/uni.jpg";
import profile2 from "../../assets/zips.jpg";
import profile3 from "../../assets/khani.jpg";

const HowItWorks = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Dot + Small Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h6 className="text-black text-sm font-semibold">How it works</h6>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Step-by-step process for seamless user experience
        </h2>

        {/* Grid of Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Step 01 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold mb-4 shadow-md">
              01
            </div>
            <h3 className="text-xl font-semibold mb-3">Share your preferences</h3>
            <p className="text-gray-700 mb-4">
              Tell us about your unique needs and preferences to help us create a personalized plan for your care.
            </p>
            <img
              src={uni}
              alt="Share your preferences"
              className="rounded-lg w-full max-w-xs mx-auto"
            />
          </div>

          {/* Step 02 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold mb-4 shadow-md">
              02
            </div>
            <h3 className="text-xl font-semibold mb-3">Customized solutions</h3>
            <img
              src={profile1}
              alt="Customized solutions"
              className="rounded-lg w-full max-w-xs mx-auto mb-4"
            />
            <p className="text-gray-700">
              We analyze your requirements and craft tailored solutions designed specifically for your goals.
            </p>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold mb-4 shadow-md">
              03
            </div>
            <h3 className="text-xl font-semibold mb-3">Achieve your vision</h3>
            <p className="text-gray-700 mb-4">
              Experience seamless results as we bring your perfect vision to life with precision and care.
            </p>
            <img
              src={profile2}
              alt="Achieve your vision"
              className="rounded-lg w-full max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

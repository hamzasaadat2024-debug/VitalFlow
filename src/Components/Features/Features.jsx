// src/Components/Features/Features.jsx
import React from "react";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h6 className="text-black text-sm font-semibold">Features</h6>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Innovative solutions to enhance medical service
        </h2>

        {/* Grid with borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl">
                    <Icon />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

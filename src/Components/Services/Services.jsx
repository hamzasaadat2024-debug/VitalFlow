// src/Components/Services/Services.jsx
import React from "react";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Dot + Heading */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h6 className="text-black text-sm font-semibold">Services</h6>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Personalized solutions for better oral health
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon; // reference the icon component
            return (
              <div
                key={index}
                className="bg-blue-100 rounded-xl p-8 text-center transition"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl transform transition hover:-translate-y-1">
                    <Icon />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-700 mb-4">{service.description}</p>

                {/* Link */}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {service.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

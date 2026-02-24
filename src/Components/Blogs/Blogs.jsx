// src/Components/Blog/Blog.jsx
import React from "react";
import blogData from "./blogData";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Dot + Small Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h6 className="text-black text-sm font-semibold">Blog</h6>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Insights and tips for better healthcare decisions
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((item, index) => (
            <div key={index} className="text-left">
              {/* Image with hover zoom */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

              {/* Horizontal line */}
              <hr className="my-2 border-gray-300" />

              {/* Date + Time */}
              <div className="flex items-center gap-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-blue-600" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-blue-600" />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

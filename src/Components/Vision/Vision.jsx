// src/Components/Vision/Vision.jsx
import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import visionData from "./visionData";
import uni from "../../assets/islam.jpg";
import profile1 from "../../assets/uni.jpg";
import profile2 from "../../assets/zips.jpg";
import profile3 from "../../assets/khani.jpg";


const Vision = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Side - Image */}
        <div>
          <img
            src={profile2}
            alt="Healthcare professionals working"
            className="rounded-lg w-full max-w-sm mx-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          {/* Dot + Heading */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <h6 className="text-black text-sm font-semibold">{visionData.heading}</h6>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {visionData.subheading}
          </h2>

          {/* Mission */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-md text-xl">
              <FaCheck />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{visionData.missionTitle}</h3>
              <p className="text-gray-700">{visionData.missionText}</p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-md text-xl">
              <FaStar />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{visionData.visionTitle}</h3>
              <p className="text-gray-700">{visionData.visionText}</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            {visionData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;

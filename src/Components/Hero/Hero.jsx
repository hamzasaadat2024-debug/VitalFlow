import React from "react";
import HeroData from "./HeroData";
import uni from "../../assets/islam.jpg";
import profile1 from "../../assets/uni.jpg";
import profile2 from "../../assets/zips.jpg";
import profile3 from "../../assets/khani.jpg";

const Hero = () => {
  return (
    <section className="w-full mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
       
        <div className="space-y-6">
          <p className="text-yellow-500 font-bold">{HeroData.reviews}</p>
          <h1 className="text-4xl font-bold text-gray-800">{HeroData.heading}</h1>
          <p className="text-gray-600">{HeroData.description}</p>

         
          <div className="flex space-x-4">
            {HeroData.buttons.map((btn) =>
              btn.type === "primary" ? (
                <button
                  key={btn.id}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  {btn.label}
                </button>
              ) : (
                <button
                  key={btn.id}
                  className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-100 transition"
                >
                  {btn.label}
                </button>
              )
            )}
          </div>

         
          <div className="mt-6">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                <img src={profile1} alt="Patient 1" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <img src={profile2} alt="Patient 2" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <img src={profile3} alt="Patient 3" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{HeroData.stats.number}</h2>
                <p className="text-gray-600">{HeroData.stats.text}</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img
            src={uni}
            alt="Healthcare Professional"
            className="w-full md:w-[470px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    
  );
};

export default Hero;

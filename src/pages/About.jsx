// src/pages/About.jsx
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";
import profile1 from "./../assets/islam.jpg"
import profile2 from "./../assets/khani.jpg";
import profile3 from "./../assets/uni.jpg";
import doctorImg from "./../assets/zips.jpg";
import handsImg from "./../assets/islam.jpg";
import { FaHeart, FaStethoscope } from "react-icons/fa";


const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16  text-center">
        <h6 className="text-sm font-semibold mb-2">About us</h6>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A modern dental care home for families
        </h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Images Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={profile1} alt="Dentist handshake" className="w-full h-64 object-cover rounded-lg" />
          <img src={profile2} alt="Dentist on phone" className="w-full h-64 object-cover rounded-lg" />
          <img src={profile3} alt="Dentist preparing procedure" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-600">98%</h2>
            <p className="text-black mt-2">Satisfaction rate</p>
          </div>
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">30+</h2>
            <p className="text-black mt-2">Years of experience</p>
          </div>
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">1000</h2>
            <p className="text-black mt-2">Patients Treated</p>
          </div>
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">80+</h2>
            <p className="text-black mt-2">Expert Doctors</p>
          </div>
        </div>
      </section>

     <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side - Overlapping Images */}
    <div className="relative flex justify-center">
      {/* Back Image (Oval) */}
      <img
        src={doctorImg}
        alt="Doctor"
        className="w-[300px] h-[400px] rounded-[150px] object-cover"
      />
      {/* Front Image (Circle) */}
      <img
        src={handsImg}
        alt="Blood Pressure"
        className="w-[200px] h-[290px] rounded-[150px] object-cover absolute bottom-0 left-10 z-10 border-4 border-white shadow-lg"
      />
    </div>

    {/* Right Side - Content */}
    <div>
      {/* Dot + Small Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <h5 className="text-sm font-semibold">Our Mission</h5>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
        Transforming lives <br /> with medical solutions
      </h2>

      {/* Feature 1 - Icon + Text */}
      <div className="flex items-start gap-4 mb-6">
  <FaHeart className="text-blue-600 text-3xl shadow-md rounded-full p-2" />
  <div>
    <h4 className="font-semibold text-lg">Compassionate care</h4>
    <p className="text-gray-600">
      Our mission is to provide personalized and empathetic healthcare for individuals.
    </p>
  </div>
</div>

<div className="flex items-start gap-4 mb-6">
  <FaStethoscope className="text-blue-600 text-3xl shadow-md rounded-full p-2" />
  <div>
    <h4 className="font-semibold text-lg">Excellence in service</h4>
    <p className="text-gray-600">
      We strive to deliver high-quality, reliable, and innovative medical solutions.
    </p>
  </div>
</div>


      {/* Button */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Book a call
      </button>
    </div>
  </div>
</section>

< ContactForm/>
      <Footer />
    </>
  );
};

export default About;

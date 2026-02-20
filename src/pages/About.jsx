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
import { FaHeart, FaStethoscope, FaCheck,FaStar, FaShieldAlt,FaArrowRight   } from "react-icons/fa";


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
    
    
    <div className="relative flex justify-center">
     
      <img
        src={doctorImg}
        alt="Doctor"
        className="w-[300px] h-[400px] rounded-[150px] object-cover"
      />
    
      <img
        src={handsImg}
        alt="Blood Pressure"
        className="w-[200px] h-[290px] rounded-[150px] object-cover absolute bottom-0 left-10 z-10 border-4 border-white shadow-lg"
      />
    </div>

   
    <div>
    
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <h5 className="text-sm font-semibold">Our Mission</h5>
      </div>

     
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
        Transforming lives <br /> with medical solutions
      </h2>

     
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


     
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Book a call
      </button>
    </div>
  </div>
</section>


<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <div>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <h5 className="text-sm font-semibold">Our Vision</h5>
      </div>

      
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
        Passionate about creating <br /> healthier, happier lives
      </h2>

      {/* Feature 1 */}
      <div className="flex items-start gap-4 mb-6">
        <FaCheck className="text-blue-600 text-2xl border-2 border-blue-600 rounded-full p-2 shadow-md" />
        <div>
          <h4 className="font-semibold text-lg">Innovating for better healthcare futures</h4>
          <p className="text-gray-600">
            We constantly explore new solutions to improve patient outcomes.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-start gap-4 mb-6">
        <FaCheck className="text-blue-600 text-2xl border-2 border-blue-600 rounded-full p-2 shadow-md" />
        <div>
          <h4 className="font-semibold text-lg">Leading with patient-focused care solutions</h4>
          <p className="text-gray-600">
            Our approach centers around empathy and personalized treatment.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-start gap-4 mb-6">
        <FaCheck className="text-blue-600 text-2xl border-2 border-blue-600 rounded-full p-2 shadow-md" />
        <div>
          <h4 className="font-semibold text-lg">Building healthier and stronger communities</h4>
          <p className="text-gray-600">
            We aim to empower communities with accessible healthcare.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-start gap-4 mb-6">
        <FaCheck className="text-blue-600 text-2xl border-2 border-blue-600 rounded-full p-2 shadow-md" />
        <div>
          <h4 className="font-semibold text-lg">Transforming lives through medical excellence</h4>
          <p className="text-gray-600">
            Our vision is to deliver world-class care with compassion and innovation.
          </p>
        </div>
      </div>

     
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Book a call
      </button>
    </div>

   
    <div className="flex justify-center">
      <img
        src={profile1}
        alt="Doctor with patient"
        className="w-full max-w-md rounded-lg object-cover shadow-lg"
      />
    </div>
  </div>
</section>




<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    
    <div className="flex items-center justify-center gap-2 mb-2">
      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      <h5 className="text-sm font-semibold">Core Principles</h5>
    </div>

    
    <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug">
      Guiding our healthcare <br /> mission
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-left">
        <FaHeart className="text-white text-4xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">Compassion</h4>
        <p className="text-blue-100">
          We prioritize empathy and understanding, ensuring every patient feels valued,
          respected, and cared for in their healthcare journey.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-left">
        <FaStar className="text-white text-4xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">Excellence</h4>
        <p className="text-blue-100">
          We are committed to delivering the highest standards of quality in every aspect
          of our services, striving for continuous improvement.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-left">
        <FaShieldAlt className="text-white text-4xl mb-4" />
        <h4 className="font-semibold text-lg mb-2">Integrity</h4>
        <p className="text-blue-100">
          We uphold honesty and transparency in all interactions, building trust with
          patients, families, and the community through ethical practices.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <div className="flex items-center justify-center gap-2 mb-2">
      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      <h5 className="text-sm font-semibold">Our Team</h5>
    </div>

    <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug">
      Meet our dedicated and <br /> experienced team of experts
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">      
      {/* Card 1 */}
      <div className="group text-left cursor-pointer">
  <img src={profile1} alt="Jonathan Reed" className="w-full h-64 object-cover rounded-lg mb-4" />
  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold text-lg">Jonathan Reed</h4>
    <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
      <FaArrowRight className="text-blue-600 text-sm" />
    </div>
  </div>
  <p className="text-gray-600 text-sm">Gastroenterologist</p>
</div>

      {/* Card 2 */}
      <div className="group text-left cursor-pointer">
  <img src={profile1} alt="Jonathan Reed" className="w-full h-64 object-cover rounded-lg mb-4" />
  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold text-lg">Jonathan Reed</h4>
    <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
      <FaArrowRight className="text-blue-600 text-sm" />
    </div>
  </div>
  <p className="text-gray-600 text-sm">Gastroenterologist</p>
</div>

      {/* Card 3 */}
      <div className="group text-left cursor-pointer">
  <img src={profile1} alt="Jonathan Reed" className="w-full h-64 object-cover rounded-lg mb-4" />
  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold text-lg">Jonathan Reed</h4>
    <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
      <FaArrowRight className="text-blue-600 text-sm" />
    </div>
  </div>
  <p className="text-gray-600 text-sm">Gastroenterologist</p>
</div>

      {/* Card 4 */}
      <div className="group text-left cursor-pointer">
  <img src={profile1} alt="Jonathan Reed" className="w-full h-64 object-cover rounded-lg mb-4" />
  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold text-lg">Jonathan Reed</h4>
    <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
      <FaArrowRight className="text-blue-600 text-sm" />
    </div>
  </div>
  <p className="text-gray-600 text-sm">Gastroenterologist</p>
</div>

      {/* Card 5 */}
      <div className="group text-left cursor-pointer">
  <img src={profile1} alt="Jonathan Reed" className="w-full h-64 object-cover rounded-lg mb-4" />
  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold text-lg">Jonathan Reed</h4>
    <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
      <FaArrowRight className="text-blue-600 text-sm" />
    </div>
  </div>
  <p className="text-gray-600 text-sm">Gastroenterologist</p>
</div>

      {/* Card 6 */}
      <div className="group text-left cursor-pointer">
  <img src={profile1} alt="Jonathan Reed" className="w-full h-64 object-cover rounded-lg mb-4" />
  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold text-lg">Jonathan Reed</h4>
    <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
      <FaArrowRight className="text-blue-600 text-sm" />
    </div>
  </div>
  <p className="text-gray-600 text-sm">Gastroenterologist</p>
</div>
    </div>
  </div>
</section>



< ContactForm/>
      <Footer />
    </>
  );
};

export default About;

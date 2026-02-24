// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Consultation from "./Components/Consultation/Consultation";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Servicing from "./Components/Servicing/Servicing";
import Vision from "./Components/Vision/Vision";
import Features from "./Components/Features/Features";
import Works from "./Components/Works/HowItWorks";
import Testi from "./Components/Testi/Testimonials";
import Blog from "./Components/Blogs/Blogs";
import Faq from "./Components/Faq/FAQ";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

// Pages
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Service";
import DoctorsPage from "./pages/Doctors";
import BlogPage from "./pages/Blog";
import { FaQ } from "react-icons/fa6";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Consultation />
              <WhyChoose />
              <Servicing />
              <Vision />
              <Features />
              <Works />
              <Testi />
              <Blog/>
              <Faq/>
              <ContactForm/>
              
            </>
          }
        />
      
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

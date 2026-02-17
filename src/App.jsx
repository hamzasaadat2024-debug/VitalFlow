// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Consultation from "./Components/Consultation/Consultation";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Services from "./Components/Services/Services";
import Vision from "./Components/Vision/Vision";
import Features from "./Components/Features/Features";
import Works from "./Components/Works/HowItWorks";
import Testi from "./Components/Testi/Testimonials";
import Blog from "./Components/Blog/Blog";
import Faq from "./Components/Faq/FAQ";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

// Pages
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import DoctorsPage from "./pages/Doctors";
import BlogPage from "./pages/Blog";
import { FaQ } from "react-icons/fa6";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route with all sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Consultation />
              <WhyChoose />
              <Services />
              <Vision />
              <Features />
              <Works />
              <Testi />
              <Blog/>
              <Faq/>
              <ContactForm/>
              <Footer/>
            </>
          }
        />
        {/* Separate pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;

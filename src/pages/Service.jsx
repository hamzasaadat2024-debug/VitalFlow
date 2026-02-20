// src/pages/Services.jsx
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";
import Servicing from "../Components/Servicing/Servicing";
import Tesi from "../Components/Testi/Testimonials";

const Services = () => {
  return (
    <>
      <Navbar />
      <Servicing />
      <Tesi />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Services;

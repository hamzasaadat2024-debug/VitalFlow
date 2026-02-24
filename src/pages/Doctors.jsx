// src/pages/Doctors.jsx
import React from "react";
import Team from "../Components/Team/Team";
import Testi from "../Components/Testi/Testimonials"
import ContactForm from "../Components/ContactForm/ContactForm";

const Doctors = () => {
  return (
    <div className="p-8">
    <Team/>
    <Testi/>
    <ContactForm/>
    </div>
  );
};

export default Doctors;

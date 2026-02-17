// Components/WhyChoose/WhyChoose.jsx
import React from "react";
import "./WhyChoose.css";
import whyChooseData from "./WhyChooseData";
import uni from "../../assets/islam.jpg";
import profile1 from "../../assets/uni.jpg";
import profile2 from "../../assets/zips.jpg";
import profile3 from "../../assets/khani.jpg";

const WhyChoose = () => {
  return (
    <section className="whychoose">
      <div className="whychoose-container">
        {/* Left Side */}
        <div className="whychoose-left">
          <div className="dot-heading">
            <span className="dot"></span>
            <h6 className="subheading">Why us</h6>
          </div>
          <h2 className="main-heading">
            Why choose VitalFlow for your healthcare?
          </h2>

          {whyChooseData.map((item) => (
            <div key={item.id} className="whychoose-item">
              <div className="item-header">
                <div className="circle">{item.id}</div>
                <h3 className="item-title">{item.title}</h3>
              </div>
              <p className="item-desc">{item.description}</p>
            </div>
          ))}

          <button className="btn rounded">Get Started</button>
        </div>

        {/* Right Side */}
        <div className="whychoose-right">
          <img
            src={profile1}
            alt="Healthcare professional with patien"
            className="main-image"
          />
          <div className="doctor-card">
  <h5>Available Doctors</h5>
  <p className="choose">Choose Doctors</p>
  <ul>
    <li>
      <img src={profile1} alt="Jonathan Reed" className="doctor-img" />
      <h4>Jonathan Reed</h4>  <p> Gastroenterologist</p>
    </li>
    <li>
      <img src={profile1} alt="Olivia Bennett" className="doctor-img" />
      Olivia Bennett - Dermatologist
    </li>
  </ul>
  <button className="btn rounded">Meet Our Experts</button>
</div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

// src/Components/HowItWorks/howItWorksData.js
import uni from "../../assets/islam.jpg";
import profile1 from "../../assets/uni.jpg";
import profile2 from "../../assets/zips.jpg";
import profile3 from "../../assets/khani.jpg";

const howItWorksData = [
  {
    number: "01",
    title: "Share your preferences",
    description: "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
    image: {uni}, // replace with actual image path
    layout: "text-first", // left column: text then image
  },
  {
    number: "02",
    title: "Customized solutions",
    description: "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
    image: {profile1},
    layout: "image-first", // middle column: image then text
  },
  {
    number: "03",
    title: "Achieve your vision",
    description: "Experience seamless results as we bring your perfect vision to life with precision and care.",
    image: {profile2},
    layout: "text-first", // right column: text then image
  },
];

export default howItWorksData;

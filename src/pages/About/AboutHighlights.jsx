import React from "react";
import "./AboutHighlights.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Target, Eye, Users } from "lucide-react";

const data = [
  {
    icon: <Target size={26} />,  // 🔥 perfect match
    title: "Our Mission",
    desc: "To digitize and simplify society management for every residential community in India.",
  },
  {
    icon: <Eye size={26} />,
    title: "Our Vision",
    desc: "To be the most trusted society management platform, empowering transparent and efficient community living.",
  },
  {
    icon: <Users size={26} />,
    title: "Target Audience",
    desc: "Housing societies, builders, RWAs, and property management companies.",
  },
  {
    icon: <HiOutlineBuildingOffice2 />,
    title: "Our Impact",
    desc: "500+ societies, 50,000+ residents, and ₹100Cr+ in managed billing.",
  },
];

const AboutHighlights = () => {
  return (
    <section className="about-highlights-section">
         <div className="about-highlights-header">
    <h2>Our Values & Impact</h2>
    <p>
      We are committed to transforming society management through innovation,
      transparency, and efficiency.
    </p>
  </div>


      <div className="about-highlights-container">

        {data.map((item, index) => (
          <div className="about-highlight-card" key={index}>

            <div className="about-highlight-icon">
              {item.icon}
            </div>

            <h3 className="about-highlight-title">{item.title}</h3>

            <p className="about-highlight-desc">{item.desc}</p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutHighlights;
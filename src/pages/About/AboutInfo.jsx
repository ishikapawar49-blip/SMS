import React from "react";
import "./AboutInfo.css";
import aboutImg from "../../assets/about-info.jpg"; // jo image use kar rahi hai

const AboutInfo = () => {
  return (
    <section className="about-info-section">
      <div className="about-info-container">

        {/* Left Image */}
        <div className="about-info-image-wrapper">
          <img src={aboutImg} alt="About Society" />
        </div>

        {/* Right Content */}
        <div className="about-info-content">
          <h2 className="about-info-title">What is SocietyMS?</h2>

          <p className="about-info-text">
            SocietyMS is a comprehensive, cloud-based society management system that brings 
            automation, transparency, and seamless communication to residential complexes, 
            housing societies, and apartment communities. From maintenance billing to 
            complaint tracking, visitor management to notice boards — every aspect of society 
            operations is digitized and streamlined.
          </p>

          <p className="about-info-text">
            Our platform is trusted by hundreds of societies across India,
            serving thousands of residents with an intuitive, modern interface.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutInfo;
import React from "react";
import "./AboutInfo.css";
import aboutImg from "../../assets/gallery-51.jpg"; 

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
            SocietyMS is a comprehensive, cloud-based Society Management System designed to simplify 
            and automate the day-to-day operations of residential complexes, housing societies, and
             apartment communities. It brings together all essential functionalities into a single
              platform, ensuring efficiency, transparency, and seamless communication between residents
               and administrators.
               From maintenance billing and expense tracking to complaint management, visitor handling,
             and digital notice boards — every aspect of society operations is fully digitized and
              streamlined for better management and user experience.

          </p>

          <p className="about-info-text">
           Our platform is trusted by hundreds of societies across India and serves thousands
            of residents through an intuitive, modern, and user-friendly interface. SocietyMS
             empowers communities to operate smarter, faster, and more efficiently while enhancing
              the overall living experience.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutInfo;
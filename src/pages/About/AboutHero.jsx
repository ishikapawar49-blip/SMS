import React from "react";
import "./AboutHero.css";
import aboutBg from "../../assets/about-bg.jpg"; 

const AboutHero = () => {
  return (
    <section
      className="about-hero-section"
      style={{
        background: `url(${aboutBg}) no-repeat center/cover`,
      }}
    >
      <div className="about-hero-overlay"></div>

      <div className="about-hero-content">
        <h1 className="about-hero-title">About SocietyMS</h1>

        <p className="about-hero-desc">
          A cloud-based SaaS platform designed to automate and simplify society
          management for housing complexes across India.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
import React from "react";
import "./FeaturesHero.css";
import featureBg from "../../assets/feature-bg1.png"; // same bg ya new use kar sakti ho

const FeaturesHero = () => {
  return (
    <section
      className="features-hero-section"
      style={{
        background: `url(${featureBg}) no-repeat center/cover`,
      }}
    >
      <div className="features-hero-overlay"></div>

      <div className="features-hero-content">
        <h1 className="features-hero-title">Powering the Future of Society Management</h1>

        <p className="features-hero-desc">
          Everything you need to manage your society efficiently, all in one
          platform.
        </p>
      </div>
    </section>
  );
};

export default FeaturesHero;
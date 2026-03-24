import React from "react";
import "./GalleryHero.css";
import heroImg from "../../assets/gallery-1.jpg"; 

const GalleryHero = () => {
  return (
    <section
      className="galleryHero-section"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="galleryHero-overlay">
        <div className="galleryHero-content">
          <h1>Gallery & Events</h1>
          <p>Life at SocietyMS-powered communities.</p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
import React, { useState, useEffect, useRef } from "react";
import "./SuccessJourney.css";

const timelineData = [
  {
    year: "2022",
    title: "Idea Phase",
    desc1: "Identified challenges in traditional society management",
    desc2: "Planned a digital solution",
  },
  {
    year: "2023",
    title: "Development Start",
    desc1: "Designed system architecture",
    desc2: "Developed core modules",
  },
  {
    year: "2024",
    title: "Feature Expansion",
    desc1: "Added booking and service modules",
    desc2: "Improved UI/UX experience",
  },
  {
    year: "2025",
    title: "Smart System",
    desc1: "Integrated automation features",
    desc2: "Enabled real-time tracking",
  },
  {
    year: "Future",
    title: "Vision Ahead",
    desc1: "AI-based recommendations",
    desc2: "Mobile app launch",
  },
];

const SuccessJourney = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef();

  // 🔥 Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 🔥 Toggle logic
  const handleDotClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="journey-section" ref={containerRef}>
      <div className="journey-header">
        <p className="timeline-label">Our Journey</p>
        <h1>How SocietyMS Grew Over Time</h1>
        <p className="journey-desc">
        Our journey reflects continuous innovation, dedication, and growth. 
        From a simple idea to a powerful platform, we have evolved by solving
         real-world problems faced by residential communities.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>

            <p className="year">{item.year}</p>

            {activeIndex === index && (
              <div className="card">
                <h3>{item.title}</h3>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessJourney;
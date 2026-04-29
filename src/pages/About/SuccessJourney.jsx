import React, { useState, useEffect, useRef } from "react";
import "./SuccessJourney.css";

const timelineData = [
  {
    year: "2022",
    title: "Problem Identification",
    desc1: "Observed inefficiencies in manual society management systems",
    desc2: "Identified need for a centralized digital solution",
  },
  {
    year: "2023",
    title: "Platform Development",
    desc1: "Designed scalable architecture for society operations",
    desc2: "Developed core modules like billing, complaints, and residents",
  },
  {
    year: "2024",
    title: "Feature Enhancement",
    desc1: "Introduced visitor tracking and notice management",
    desc2: "Improved user experience with modern UI and workflows",
  },
  {
    year: "2025",
    title: "Smart Automation",
    desc1: "Automated maintenance billing and notifications",
    desc2: "Enabled real-time tracking and data insights",
  },
  {
    year: "Future",
    title: "Innovation & Expansion",
    desc1: "Planning AI-based insights and predictive management",
    desc2: "Expanding towards mobile app and advanced integrations",
  },
];

const SuccessJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();

  const handleHover = (index) => {
    if (window.innerWidth > 768) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const scrollAmount = container.clientWidth;

      setActiveIndex((prev) =>
        prev === timelineData.length - 1 ? 0 : prev + 1
      );

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      if (container.scrollLeft + scrollAmount >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="journey-section">
      <div className="journey-header">
        <p className="timeline-label">Our Journey</p>
        <h1>How SocietyMS Grew Over Time</h1>
        <p className="journey-desc">
          Our journey reflects continuous innovation, dedication, and growth.
          From a simple idea to a powerful platform, we have evolved by solving
          real-world problems faced by residential communities.
        </p>
      </div>

      <div className="timeline-container" ref={containerRef}>
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div
            className="timeline-item"
            key={index}
            onMouseEnter={() => handleHover(index)}
          >
            <div className={`dot ${activeIndex === index ? "active" : ""}`}></div>

            <p className="year">{item.year}</p>

            {(window.innerWidth <= 768 || activeIndex === index) && (
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
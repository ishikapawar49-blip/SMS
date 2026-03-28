import React from "react";
// import heroBg from "../../assets/bg-hero.png";
import heroBg from "../../assets/aboutbg1.png";
import "./Hero.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; 

const Hero = () => {
  const navigate = useNavigate(); //
  return (
    <section
      className="hero"
      
    >
      {/* <div className="overlay"></div> */}

      <div className="hero-content">
        
   
        {/* Heading */}
        <h1>
          Smart Society <br />
          Management <span>Made Easy</span>
        </h1>

        {/* Description */}
        <p>
          Automate maintenance billing, track complaints, manage visitors, and
          communicate seamlessly — all in one powerful platform.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
           <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Get Started Free <FiArrowRight />
          </button>

          {/* Button 2 */}
          <button
            className="secondary-btn"
            onClick={() => navigate("/contact")}
          >
            Request Demo
          </button>
        </div>

        {/* Features */}
        <div className="hero-features">
          <div><BsCheckCircle /> No setup fees</div>
          <div><BsCheckCircle /> 14-day free trial</div>
          <div><BsCheckCircle /> Cancel anytime</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
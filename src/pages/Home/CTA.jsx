import React from "react";
import "./CTA.css";
import ctaBg from "../../assets/bg-h.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // ✅ IMPORTANT

const CTA = () => {
  const navigate = useNavigate(); // ✅ REQUIRED

  return (
    <section
      className="cta"
      style={{
        background: `url(${ctaBg}) no-repeat center/cover`,
      }}
    >
      <div className="cta-overlay"></div>

      <div className="cta-content">
        <h2>Ready to Transform Your Society?</h2>

        <p>
          Join hundreds of societies already using SocietyMS to simplify their
          operations.
        </p>

        <div className="cta-buttons">

          {/* Button 1 */}
          <button
            className="cta-primary"
            onClick={() => navigate("/contact")}
          >
            Start Free Trial <FiArrowRight />
          </button>

          {/* Button 2 */}
          <button
            className="cta-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Sales
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTA;
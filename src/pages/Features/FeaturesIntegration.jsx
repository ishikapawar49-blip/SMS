import React from "react";
import "./FeaturesIntegration.css";
import { FiUsers, FiShield, FiUserCheck } from "react-icons/fi";

const FeaturesIntegration = () => {
  return (
    <section className="featInt-main">

      {/* HEADER */}
      <div className="featInt-header">
        <h2>Seamlessly Integrated</h2>
        <p>
          All features work together to create a unified experience for your entire community
        </p>
      </div>

      {/* CARD CONTAINER */}
      <div className="featInt-cardWrapper">

        {/* CARD 1 */}
        <div className="featInt-card">
          <div className="featInt-icon featInt-blue">
            <FiUsers />
          </div>
          <h3>Residents</h3>
          <p>
            Easy-to-use mobile app for residents to access all services
          </p>
        </div>

        {/* CARD 2 */}
        <div className="featInt-card">
          <div className="featInt-icon featInt-green">
            <FiShield />
          </div>
          <h3>Administrators</h3>
          <p>
            Powerful dashboard to manage all society operations
          </p>
        </div>

        {/* CARD 3 */}
        <div className="featInt-card">
          <div className="featInt-icon featInt-purple">
            <FiUserCheck />
          </div>
          <h3>Security</h3>
          <p>
            Dedicated tools for security staff and monitoring
          </p>
        </div>

      </div>

    </section>
  );
};

export default FeaturesIntegration;
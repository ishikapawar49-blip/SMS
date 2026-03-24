import React from "react";
import "./FeaturesDetailed.css";

import img1 from "../../assets/gallery-1.jpg";
import img2 from "../../assets/gallery-2.jpg";
import img3 from "../../assets/gallery-3.jpg";

const FeaturesDetailed = () => {
  return (
    <section className="featDet-section">

      {/* HEADER */}
      <div className="featDet-header">
        <h2>Powerful Features for Complete Control</h2>
        <p>
          Everything you need to manage your society efficiently and effortlessly
        </p>
      </div>

      {/* FEATURE 1 */}
      <div className="featDet-row">
        <div className="featDet-text">
          <h3>Smart Billing & Payments</h3>
          <p>
            Automate maintenance billing, track payments, and generate reports
            effortlessly with our intelligent billing system.
          </p>

          <ul>
            <li>✔ Auto invoice generation</li>
            <li>✔ Online payments (UPI, cards)</li>
            <li>✔ Payment reminders</li>
          </ul>
        </div>

        <div className="featDet-img">
          <img src={img1} alt="Billing" />
        </div>
      </div>

      {/* FEATURE 2 (reverse) */}
      <div className="featDet-row reverse">
        <div className="featDet-text">
          <h3>Complaint Management System</h3>
          <p>
            Easily raise, track, and resolve complaints with real-time updates
            and priority handling.
          </p>

          <ul>
            <li>✔ Real-time tracking</li>
            <li>✔ Priority system</li>
            <li>✔ Status updates</li>
          </ul>
        </div>

        <div className="featDet-img">
          <img src={img2} alt="Complaint" />
        </div>
      </div>

      {/* FEATURE 3 */}
      <div className="featDet-row">
        <div className="featDet-text">
          <h3>Visitor & Security Management</h3>
          <p>
            Ensure safety with digital visitor logs, approvals, and instant
            alerts for every entry.
          </p>

          <ul>
            <li>✔ Visitor approval system</li>
            <li>✔ Entry logs</li>
            <li>✔ Security alerts</li>
          </ul>
        </div>

        <div className="featDet-img">
          <img src={img3} alt="Security" />
        </div>
      </div>

    </section>
  );
};

export default FeaturesDetailed;
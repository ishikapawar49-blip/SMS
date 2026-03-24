import React from "react";
import "./ContactSection.css";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="contactSec-main">

      {/* HEADING */}
      <div className="contactSec-header">
        <h2>Get in Touch</h2>
        <p>Have a question or need support? We'd love to hear from you.</p>
      </div>

      {/* CONTENT */}
      <div className="contactSec-container">

        {/* LEFT SIDE */}
        <div className="contactSec-left">

          <div className="contactSec-card">
            <div className="contactSec-icon">
              <FiMail />
            </div>
            <div>
              <h4>Email</h4>
              <p className="contactSec-bold">info@societyms.com</p>
              <span>We respond within 24 hours</span>
            </div>
          </div>

          <div className="contactSec-card">
            <div className="contactSec-icon">
              <FiPhone />
            </div>
            <div>
              <h4>Phone</h4>
              <p className="contactSec-bold">+91 98765 43210</p>
              <span>Mon–Fri, 9am–6pm </span>
            </div>
          </div>

          <div className="contactSec-card">
            <div className="contactSec-icon">
              <FiMapPin />
            </div>
            <div>
              <h4>Office</h4>
              <p className="contactSec-bold">Nagpur</p>
              <span>Visit us in person</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contactSec-formBox">
          <h3>Send a Message</h3>

          <form className="contactSec-form">

            <div className="contactSec-row">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea placeholder="Your message..." rows="5"></textarea>

            <button type="submit" className="contactSec-btn">
              <FiSend /> Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
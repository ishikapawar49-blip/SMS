import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-col footer-left">
          <div className="footer-logo">
            <HiOutlineBuildingOffice2 className="footer-icon" />
            <span>SocietyMS</span>
          </div>

          <p>
            Smart Society Management Made Easy. Automate your society operations
            with our cloud-based platform.
          </p>

          <div className="social-icons">
            <div className="icon"><FaFacebookF /></div>
            <div className="icon"><FaTwitter /></div>
            <div className="icon"><FaInstagram /></div>
            <div className="icon"><FaYoutube /></div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li><Link to="/features">Billing & Payments</Link></li>
            <li><Link to="/features">Complaint Tracking</Link></li>
            <li><Link to="/features">Visitor Management</Link></li>
            <li><Link to="/features">Notices & Alerts</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@societyms.com">info@societyms.com</a></li>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><Link to="/contact">Nagpur, Maharashtra, India</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 SocietyMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
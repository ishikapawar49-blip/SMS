import React from "react";
import "./Footer.css";
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

          {/* Social Icons */}
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
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Features */}
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li>Billing & Payments</li>
            <li>Complaint Tracking</li>
            <li>Visitor Management</li>
            <li>Notices & Alerts</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>info@societyms.com</li>
            <li>+91 98765 43210</li>
            <li>Nagpur, Maharashtra, India</li>
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
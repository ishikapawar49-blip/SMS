import React, { useState } from "react";
import "./Navbar.css";
import { HiOutlineBuildingOffice2, HiBars3, HiXMark } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo" onClick={() => handleNavigate("/")}>
          <HiOutlineBuildingOffice2 className="logo-icon" />
          <span>SocietyMS</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => handleNavigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="nav-actions">
          <button className="demo-btn" onClick={() => handleNavigate("/contact")}>
            Demo
          </button>
        </div>

        {/* Hamburger */}
        <div 
  className={`hamburger ${menuOpen ? "open" : ""}`} 
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <HiXMark /> : <HiBars3 />}
</div>

      </div>

      {/* Mobile Menu */}
     <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <ul>
    {menuItems.map((item) => (
      <li key={item.name} onClick={() => handleNavigate(item.path)}>
        {item.name}
      </li>
    ))}
  </ul>

  <button
    className="mobile-demo-btn"
    onClick={() => handleNavigate("/contact")}
  >
    Schedule a Demo
  </button>
</div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
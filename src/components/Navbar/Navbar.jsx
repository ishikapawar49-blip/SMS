import React from "react";
import "./Navbar.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <HiOutlineBuildingOffice2 className="logo-icon" />
          <span>SocietyMS</span>
        </div>

        {/* Menu */}
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Demo Button */}
        <div className="nav-actions">
          <button
            className="demo-btn"
            onClick={() => navigate("/contact")}
          >
            Demo
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
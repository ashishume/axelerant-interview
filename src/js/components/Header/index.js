import React, { useState } from "react";
import "./style.scss";
const Header = () => {
  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div className="container" onClick={() => setToggle(!toggle)}>
      <div className="logo">
        <span className="company_logo_primary">COMPANY </span>
        <span className="company_logo_secondary">LOGO</span>
      </div>
      <div className="navbar">
        <div className="small_icons">
          <i className="fas fa-bars" onClick={() => toggleNavbar()}></i>
        </div>
        <div>
          <span className="nav_items">About</span>
          <span className="nav_items">Services</span>
          <span className="nav_items">Solutions</span>
          <span className="nav_items">Blog</span>
          <span className="get_in_touch">
            <i className="far fa-comment-alt"></i>Get In Touch
          </span>
        </div>
        <div style={{ display: toggle ? "block" : "none" }}>
          <span className="side_nav_items">About</span>
          <span className="side_nav_items">Services</span>
          <span className="side_nav_items">Solutions</span>
          <span className="side_nav_items">Blog</span>
          <span className="side_get_in_touch">
            <i className="far fa-comment-alt"></i>Get In Touch
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

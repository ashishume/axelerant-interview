import React from "react";
import "./style.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <span className="company_logo_primary">COMPANY </span>
        <span className="company_logo_secondary">LOGO</span>
      </div>
      <div className="navbar">
        <span className="nav_items">About</span>
        <span className="nav_items">Services</span>
        <span className="nav_items">Solutions</span>
        <span className="nav_items">Blog</span>
        <span className="get_in_touch">
          <i className="far fa-comment-alt"></i>Get In Touch
        </span>
      </div>
    </div>
  );
};

export default Header;

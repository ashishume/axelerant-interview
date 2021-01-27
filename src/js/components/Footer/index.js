import React from "react";
import "./styles.scss";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">&copy;2020 Company. All rights reserved</div>
      <div className="footer">
        Follow us on
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-twitter"></i>
      </div>
    </div>
  );
};

export default Footer;

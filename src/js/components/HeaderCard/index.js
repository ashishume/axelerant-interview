import React, { Fragment } from "react";
import "./styles.scss";
const HeaderCard = ({ title, iconName }) => {
  return (
    <div className="card_container">
      <i className={iconName} id="icon"></i>
      <p className="title">{title}</p>
    </div>
  );
};

export default HeaderCard;

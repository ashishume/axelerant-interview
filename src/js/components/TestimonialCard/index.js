import React from "react";
import Chat from "../../../assets/chat.jpg";
import User from "../../../assets/user.png";
import "./styles.scss";
const TestimonialCard = ({ message }) => {
  return (
    <div className="testimonials_card_container">
      <img src={Chat} alt="Chat" className="chat_container" />
      <div className="text_area">{message}</div>
      <div className="description_container">
        <img src={User} className="user_icon" />
        <div className="user_data">
          <p>CLIENT NAME</p>
          <p>Position, ORG</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

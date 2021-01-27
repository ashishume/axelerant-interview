import React from "react";
import "./styles.scss";
const ContactForm = () => {
  return (
    <div className="contact_container">
      <div className="layer">
        <h1>Convinced To Work With Us?</h1>
        <h2>Company has helped agencies keep their promises to clients since 2005</h2>
        <form className="form">
          <div className="small_input">
            <input className="input_field" placeholder="Full Name" />
            <input className="input_field" placeholder="Email Address" />
            <input className="input_field" placeholder="Phone Number" />
          </div>
          <div className="text_container">
            <textarea className="message" placeholder="Message in brief"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

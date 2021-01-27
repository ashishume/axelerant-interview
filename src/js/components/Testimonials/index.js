import React from "react";
import TestimonialCard from "../TestimonialCard";
import "./styles.scss";
const Testimonials = () => {
  const testimonials_data = [
    {
      id: 1,
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
    {
      id: 2,
      message:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
    },
    {
      id: 3,
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
  ];

  return (
    <div>
      <h2 className="testi_heading">Testimonials</h2>
      <div className="test_container">
        {testimonials_data.map((value) => {
          return <TestimonialCard message={value.message} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;

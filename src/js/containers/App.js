import React, { Fragment } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import HeaderBackground from "../components/HeaderBackground";
import Testimonials from "../components/Testimonials";
import WorldMapDescription from "../components/WorldMapDescription";

const App = () => {
  return (
    <Fragment>
      <Header />
      <HeaderBackground />
      <WorldMapDescription />
      <Testimonials />
      <ContactForm />
    </Fragment>
  );
};

export default App;

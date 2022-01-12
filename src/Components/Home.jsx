import React from "react";
import home from "../images/home.svg";
import Common from "./Common";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={home}
        isCompName={true}
        compName="Company Name"
        visit="/services"
        btnname="Get Started"
      />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;

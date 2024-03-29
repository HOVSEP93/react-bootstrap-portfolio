import React from "react";
import Header from "./header";
import About from "./about";
import ProgressBarComponent from "./progressbar";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Services from "./services";
import Contacts from "./contacts";
import Footer from "./footer";
import Navbar from "./navbar";

const Main = () => {
  return (
    <>
      <Header />
      <About />
      <ProgressBarComponent />
      <Resume />
      <Portfolio />
      <Services />
      <Contacts />
      <Footer />
      <Navbar />
    </>
  );
};

export default Main;

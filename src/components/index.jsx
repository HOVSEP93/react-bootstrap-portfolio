import React from "react";
import Header from "./header";
import About from "./about";
import ProgressBarComponent from "./progressbar";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Services from "./services";

const Main = () => {
  return (
    <>
      <Header />
      <About />
      <ProgressBarComponent />
      <Resume />
      <Portfolio />
      <Services />
    </>
  );
};

export default Main;

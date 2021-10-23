import React from "react";
import Header from "./header";
import About from "./about";
import ProgressBarComponent from "./progressbar";
import Resume from "./resume";
import Portfolio from "./portfolio";

const Main = () => {
  return (
    <>
      <Header />
      <About />
      <ProgressBarComponent />
      <Resume />
      <Portfolio />
    </>
  );
};

export default Main;

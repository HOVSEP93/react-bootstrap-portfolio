import React, { useEffect } from "react";
import Vivus from "vivus";

const MainTitle = () => {
  useEffect(() => {
    new Vivus("main-title", {
      duration: 200,
      file: "svg/mainTitle_animated.svg",
    });
  }, []);
  return <div id="main-title"></div>;
};

export default MainTitle;

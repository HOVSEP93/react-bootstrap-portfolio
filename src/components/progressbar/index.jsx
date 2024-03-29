import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarComponent = () => {
  const [htmlState, setHtmlState] = useState(0);
  const [cssState, setCssState] = useState(0);
  const [JSState, setJSState] = useState(0);
  const [reactState, setReactState] = useState(0);
  const [reduxState, setReduxState] = useState(0);
  const [nodeState, setNodeState] = useState(0);
  const [sassState, setSassState] = useState(0);
  const [gitState, setGitState] = useState(0);

  window.addEventListener("scroll", () => {
    const scrolledPosition = window.scrollY;
    if (Math.round(scrolledPosition) >= 1400) {
      setInterval(() => {
        setHtmlState(95);
        setCssState(85);
        setJSState(75);
        setReactState(60);
        setReduxState(70);
        setNodeState(50);
        setSassState(85);
        setGitState(75);
      }, 550);
    }
  });

  return (
    <div className="container-fluid px-0">
      <ProgressBar
        html={htmlState}
        css3={cssState}
        js={JSState}
        react={reactState}
        redux={reduxState}
        node={nodeState}
        sass={sassState}
        git={gitState}
      />
    </div>
  );
};

export default ProgressBarComponent;

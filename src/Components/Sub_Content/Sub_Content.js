import Resums from "./Resums";
import React, { useState } from "react";
import Footer from "./Footer";
import My_expertise from "./My_expertise/My_expertise";
import About_me from "./About_me/About_me";
import Languages from "./Languages";
import Projects from "./Projects/Projects";
function Sub_Content() {
  const [setArrow, setsetArrow] = useState(true);
  const onScroll = () => {
    setsetArrow(false);
    console.log("working");
  };
  return (
    <>
      <div onScroll={onScroll}>
        <About_me setArrow={setArrow} />
        <My_expertise />
        <Resums />
        <h1 className="heading_Of_Skills">Web Skills</h1>
        <Languages />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default Sub_Content;

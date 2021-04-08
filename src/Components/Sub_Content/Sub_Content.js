import Resums from "./Resums";
import React from "react";
import My_expertise from "./My_expertise/My_expertise";
import About_me from "./About_me/About_me";
import Languages from "./Languages";
function Sub_Content() {
  return (
    <>
      <div
        style={{
          height: "auto",
        }}
      >
        <About_me />
        <My_expertise />
        <Resums />
        <Languages />
      </div>
    </>
  );
}

export default Sub_Content;

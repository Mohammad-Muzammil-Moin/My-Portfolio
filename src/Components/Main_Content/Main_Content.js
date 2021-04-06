import Intro from "./Intro";
import React from "react";
import "./Main_Content.css";
import More from "../Sub_Content/Accordion";
import Sub_Content from "../Sub_Content/Sub_Content";
import { Hidden } from "@material-ui/core";
import Icons from "./Icons";
function Main_Content() {
  return (
    <>
      <div className="main">
        <div className="Intro">
          <div>
            <Intro />
          </div>
        </div>
        <div className="resum_content ">
          <Sub_Content />
        </div>
        <div className="Accordion">
          <More />
          <Icons />
        </div>
      </div>
    </>
  );
}

export default Main_Content;

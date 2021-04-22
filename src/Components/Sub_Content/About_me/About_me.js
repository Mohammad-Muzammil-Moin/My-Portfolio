import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import My_image from "../../Main_Content/My1.jpeg";
function About_me(props) {
  return (
    <>
      <div className="top_sect">
        <img src={My_image} alt="Person_image" className="image" />
        <div className="right_of_top">
          <h1>
            WEb <span>Developer</span>
          </h1>
          <h2>
            <span>Mohammad Muzammil</span>
          </h2>
          <p>
            I am a Front-End Web Developer. I am passionate about develope
            responsive user interfaces and create a new high-quality website or
            improve existing websites using the latest techniques and trends.
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohammad-muzammil-759b9b208/"
          >
            <button>Contact</button>
          </a>
        </div>
      </div>
      <div class="wrap">
        {props.setArrow && (
          <ExpandMoreIcon
            className="
          expandIcon img_arrow animated bounce"
          />
        )}
      </div>
    </>
  );
}

export default About_me;

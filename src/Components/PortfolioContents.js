import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import DevicesIcon from "@material-ui/icons/Devices";
import "./Resums/Education.css";
import React from "react";
import My_image from "./My1.jpeg";
import Projects from "./Resums/Project/Projects";
import Resums from "./Resums/Resums";
import { Link } from "react-router-dom";
function PortfolioContents() {
  return (
    <div id="about_me" className="contant">
      <div className="top_sect">
        <img src={My_image} alt="Person_image" className="image" />
        <div className="right_of_top">
          <h4>
            WEb <span>Developer</span>
          </h4>
          <h1>
            <span>Mohammad Muzammil</span>
          </h1>
          <p>
            I am a Front-End Web Developer. I am passionate about developing
            responsive user interfaces. I have skills that are enough to create
            a new high-quality website or improve existing websites for
            individuals and organizations, using the latest techniques and
            trends.
          </p>
          <div>
            <button>Contact</button>
          </div>
        </div>
      </div>
      <h4 className="haeding-sk">
        I<span> expertise in!</span>
      </h4>
      <div className="about_Skill">
        <div className="skill_description">
          <DevicesIcon
            style={{
              fontSize: "50px",
              color: "#03a9f4",
            }}
          />
          <h1>
            Web <span>Development</span>
          </h1>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
          bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
          sodales.
        </div>
        <div>
          <PermPhoneMsgIcon
            style={{
              fontSize: "50px",
              color: "#03a9f4",
            }}
          />
          <h1>
            Buisness <span>Development</span>
          </h1>
          Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
          bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
          sodales.
        </div>
      </div>

      <Resums />
      <Projects />
    </div>
  );
}

export default PortfolioContents;

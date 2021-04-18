import React from "react";
import "./My_expertise.css";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import DevicesIcon from "@material-ui/icons/Devices";
function My_expertise() {
  return (
    <>
      <div className="about_Skill">
        <div className="skill_description">
          <DevicesIcon
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              marginTop: "50px",
              textShadow: "2px 0px 1px #03a9f4 ",
              color: "gray",
            }}
          />
          <h1>
            Web <span>Development</span>
          </h1>
          <p>
            I am a front-end react js developer I have approximately two years
            of experience in web development and my performance is satisfactory
            while rendering all the duties of frontend development which you can
            see below for my skills.
          </p>
        </div>
        <div className="skill_description">
          <PermPhoneMsgIcon
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              marginTop: "50px",
              textShadow: "2px 0px 1px #03a9f4 ",
              color: "gray",
            }}
          />
          <h1>
            Telemarketing <span>Sales</span>
          </h1>
          <p>
            I worked in many telemarketing company and I demonstrated superb
            marketing knowledge and expertise. I have also made many efforts for
            training the junior marketing staff and keeping pace with the latest
            marketing needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default My_expertise;

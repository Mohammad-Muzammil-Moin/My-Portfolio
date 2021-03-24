import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./AboutMe.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import My_image from "./My1.jpeg";
import MailIcon from "@material-ui/icons/Mail";
import { Dashboard } from "./Dashboard";
function AboutMe() {
  const [checkWidth, setcheckWidth] = useState(false);

  return (
    <>
      <div className="About_me">
        <img src={My_image} alt="Person_image" width="190" height="200" />
        <h1 className="hidden my_Name">Mohammad Muzammil</h1>
        <h1 className="hidden profession_name">Web Developer</h1>
        <Contacts className="for_medium" />
      </div>

      {checkWidth && <Contacts />}
    </>
  );
}

export function Contacts() {
  return (
    <div>
      <div className="my_contacts">
        <a
          href="https://www.facebook.com/muzammilqureshi.moinali"
          target="_blank"
        >
          <FacebookIcon className="icon" />
        </a>
        <TwitterIcon className="icon" />
        <EmailIcon className="icon" />
        <YouTubeIcon className="icon" />
      </div>
    </div>
  );
}

export default AboutMe;

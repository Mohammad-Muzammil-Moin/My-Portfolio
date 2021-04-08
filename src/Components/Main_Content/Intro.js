import React, { useState } from "react";
import "./Intro.css";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import My_image from "./My1.jpeg";

function Intro() {
  return (
    <>
      <div
        className="intro_section"
        style={{
          color: "gray",
        }}
      >
        <img src={My_image} alt="Person_image" width="190" height="200" />
        <div className="name_sec">
          <h1 className=" my_Name">Mohammad Muzammil</h1>
          <h1 className="hidden profession_name">
            Web <span>Developer</span>
          </h1>
          <Contacts className="for_medium" />
        </div>
      </div>
    </>
  );
}
export function Contacts() {
  return (
    <div className="icon_section">
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

export default Intro;

import React, { useState } from "react";

import "./Intro.css";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import My_image from "./My1.jpeg";
import "../Sub_Content/Languages.css";
function Intro() {
  return (
    <>
      <div
        className="intro_section"
        style={{
          color: "gray",
        }}
      >
        <img
          className="my-img"
          src={My_image}
          alt="Person_image"
          width="190"
          height="200"
        />
        <div className="name_sec">
          <h1 className=" my_Name">Mohammad Muzammil</h1>
          <h1 className="hidden profession_name">
            Web <span>Developer</span>
          </h1>
          <Contacts className="for_medium" />
        </div>
        <div className="main_in_language">
          <div className="Languages_container language_in_itnro">
            <div className="center_circle HTML">
              <span className="f_HTML">HTML</span>
            </div>
            <div className="center_circle CSS">
              <span className="f_CSS">CSS</span>
            </div>

            <div className="center_circle JavaScript">
              <span className="f_JavaScript">JavaScript</span>
            </div>

            <div className="center_circle ES6">
              <span className="f_ES6">ES6</span>
            </div>

            <div className="center_circle transparent_circle">
              <h1>Web Skills</h1>
            </div>
            <div className="center_circle Material-ui Material-UI">
              <span className="f_Material-UI">Material-UI</span>
            </div>

            <div className="center_circle TailwindCss">
              <span className="f_TailwindCss">Tailwing CSS</span>
            </div>

            <div className="center_circle React_js">
              <span className="f_React_js">React js</span>
            </div>

            <div className="center_circle Responsive_UI">
              <span className="f_Responsive_UI">Responsive UI</span>
            </div>
          </div>
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
      {/*  */}
    </div>
  );
}

export default Intro;

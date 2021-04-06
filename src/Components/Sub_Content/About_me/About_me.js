import React from "react";

import My_image from "../../Main_Content/My1.jpeg";
function About_me() {
  return (
    <>
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
    </>
  );
}

export default About_me;

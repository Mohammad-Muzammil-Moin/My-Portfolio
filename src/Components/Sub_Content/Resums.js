import SkillsChart from "./SkillsChart";
import React from "react";
import Education from "./Education";
import "./Education.css";
import Experience from "./Experience";
function Resums() {
  return (
    <div className="container">
      <h2 className="top_heading">
        My <span>Resume!</span>
        <h2 className="heading_Of_Skills">Skills & Experiences </h2>
      </h2>
      <Experience />
      <div className="resume">
        <Education
          // year_1="2020"
          year_1="2020"
          para_2={
            <>
              <p>
                <li>
                  Supporting development, maintaining, and updating web portals
                  as well as websites
                </li>
                <li>writing codes for web based solutions </li>
                <li>
                  resolving complaints of customers and responding to their
                  suggestions to improve the products
                </li>
                {/* <li>writing codes for web-based solutions.</li> */}
                <li>
                  selecting techniques and methods for creating solutions using
                  different tools of programming languages
                </li>
              </p>
            </>
          }
          para_1={
            <>
              <p>
                Academic credentials are reinforced by programming experience
                gained during internship with <i> Mechotics </i> Company and now
                I am doing freelancing work on different websites like Fiver,
                Freelancer, and Upwork.
              </p>
            </>
          }
          heading_1={
            <>
              <h2>
                Frontend <span>Development</span>
              </h2>
            </>
          }
          heading_2={
            <>
              <h5>My Responsibilities</h5>
            </>
          }
        />
        <div className="height height-range">
          <SkillsChart
            heading="HTML"
            percentage="99%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_HTML">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="CSS"
            percentage="95%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_CSS">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="Tailwind CSS"
            percentage="85%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_Tailwind_CSS">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="Material UI"
            percentage="75%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_Material_UI">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="Java Script"
            percentage="78%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_Java_Script">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="React Js"
            percentage="90%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_expertise">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="Responsive UI"
            percentage="99%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_Responsive_UI">.</div>
                </div>
              </>
            }
          />
          <SkillsChart
            heading="Api Integration"
            percentage="65%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_Api_Integration">
                    .
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Resums;

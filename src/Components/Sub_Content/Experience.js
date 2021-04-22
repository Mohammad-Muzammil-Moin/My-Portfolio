import React from "react";
import Education from "./Education";
import SkillsChart from "./SkillsChart";
import "./Education.css";
function Experience() {
  return (
    <>
      <div className="resume resum_for_small">
        <Education
          year_1="2017"
          year_2="2019"
          para_1={
            <>
              <p>
                I worked at
                <b>
                  <i> Ion Resources Pvt LTD </i>
                </b>
                as a marketing executive from March of 2017 to December of 2019
              </p>
            </>
          }
          para_2={
            <div
              style={{
                padding: "10px",
              }}
            >
              <li>Connect with customers using phone call </li>
              <li>Respond to all inbound leads</li>
              <li>Document all daily activities</li>
              <li>
                Work closely with the sales team to accelerate sales cycle
                extend reach into target accounts
              </li>
              <li>Responsible for the generation of opportunities</li>
              <li>
                Keep data and information up to date; managing information on
                all lead prospects opportunities
              </li>
            </div>
          }
          heading_1={
            <>
              <h2>
                Telemarketing <span>Sales</span>
              </h2>
            </>
          }
          heading_2={
            <>
              <h5>Work Responsibilities - were to:</h5>
            </>
          }
        />

        <div className="height">
          <SkillsChart
            heading="Expertise"
            percentage="95%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_expertise">.</div>
                </div>
              </>
            }
          />

          <SkillsChart
            heading="Dealing"
            percentage="98%"
            div={
              <>
                <div className="skill_border">
                  <div className="skill_in_percent range_dealing">.</div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Experience;

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
        <h2 className="heading_Of_Skills">Skills</h2>
      </h2>
      <Experience />
      <div className="resume">
        <Education
          year_1="2020"
          year_2="2010"
          para_1="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis ante."
          para_2="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis ante."
          heading_1="Frontend "
          span="Development"
          heading_2="Business "
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

import React from "react";
import Education from "./Education";
import SkillsChart from "./SkillsChart";
function Experience() {
  return (
    <>
      <div className="resume">
        <div className="">
          {/* <Education />*/}
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
        </div>
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
            heading="Dealing with clients"
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

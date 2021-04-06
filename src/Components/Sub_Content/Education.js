// import "../AboutMe.css";
import React from "react";
import "./Education.css";
function Education(props) {
  return (
    <>
      <div className="front_dev">
        <div className="resume_year">
          <div className="year">
            <h4>{props.year_1}</h4>
          </div>
          <div className="year">
            <h4>{props.year_2}</h4>
          </div>
        </div>
        <div className="resume_second">
          <div className="margin">
            <h2>
              {props.heading_1}
              <span>{props.span}</span>
            </h2>
            <p>{props.para_1}</p>
          </div>
          <div className="margin">
            <h2>
              {props.heading_2}
              <span>{props.span}</span>
            </h2>
            <p>{props.para_2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

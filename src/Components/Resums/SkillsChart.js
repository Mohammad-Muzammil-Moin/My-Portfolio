import { PortraitSharp } from "@material-ui/icons";
import React from "react";
import "./Education.css";
function SkillsChart(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "25px",
          flexDirection: "column",
        }}
      >
        <div className="chart">
          <h2>{props.heading}</h2>
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {props.percentage}
          </span>
        </div>
        <div>{props.div}</div>
      </div>
      {/* <div className="chart_container">
        <div>
          
        </div>
      </div> */}
    </>
  );
}

export default SkillsChart;

import React from "react";
import "./ProjectsCard.css";
export default function ProjectsCard(props) {
  return (
    <div className="cardContainer">
      <h1 className="Card_heading">{props.name_of_project}</h1>
    </div>
  );
}

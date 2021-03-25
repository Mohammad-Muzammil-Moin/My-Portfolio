import React from "react";
import "../Education.css";
import ProjectsCard from "./ProjectsCard";
export default function Projects() {
  return (
    <div className="project_container">
      <h1 className="top_heading">
        My<span>Projects!</span>
      </h1>
      <div className="cards">
        <div className="card_row">
          <div className="project_card">
            <ProjectsCard name_of_project="Simple websites" />
          </div>
          <div className="project_card">
            <ProjectsCard name_of_project="Simple websites" />
          </div>
        </div>
        <div className="card_row">
          <div className="project_card">
            <ProjectsCard name_of_project="Simple websites" />
          </div>
          <div className="project_card">
            <ProjectsCard name_of_project="Simple websites" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

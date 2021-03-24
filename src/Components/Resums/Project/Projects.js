import React from "react";
import "../Education.css";
import ProjectsCard from "./ProjectsCard";
export default function Projects() {
  return (
    <div>
      <h1 className="top_heading">
        My<span>Projects!</span>
      </h1>
      <div className="cards">
        <div className="card_row">
          <div className="">
            <ProjectsCard name_of_project="Simple websites" />
          </div>
          <div>
            <ProjectsCard name_of_project="Simple websites" />
          </div>
        </div>
        <div className="card_row">
          <div>
            <ProjectsCard name_of_project="Simple websites" />
          </div>
          <div>
            <ProjectsCard name_of_project="Simple websites" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

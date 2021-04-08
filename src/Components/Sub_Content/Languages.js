import React from "react";
import "./Languages.css";
function Languages() {
  return (
    <div className="main_container_of_languages">
      <div className="Languages_container">
        <div className="center_circle HTML">
          <span className="for_HTML">HTML</span>
        </div>
        <div className="center_circle CSS">
          <span className="for_CSS">CSS</span>
        </div>

        <div className="center_circle JavaScript">
          <span className="for_JavaScript">JavaScript</span>
        </div>

        <div className="center_circle ES6">
          <span className="for_ES6">ES6</span>
        </div>

        <div className="center_circle transparent_circle">
          <h1>Web Skills</h1>
        </div>
        <div className="center_circle Material-ui Material-UI">
          <span className="for_Material-UI">Material-UI</span>
        </div>

        <div className="center_circle TailwindCss">
          <span className="for_TailwindCss">Tailwing CSS</span>
        </div>

        <div className="center_circle React_js">
          <span className="for_React_js">React js</span>
        </div>

        <div className="center_circle Responsive_UI">
          <span className="for_Responsive_UI">Responsive UI</span>
        </div>
      </div>
    </div>
  );
}

export default Languages;

import React from "react";

function Icons() {
  return (
    <>
      <div className="skills_icon">
        <h1>
          <span
            className="iconify width_icon "
            data-icon="logos:html-5"
            data-inline="false"
          ></span>
        </h1>
        <h1>
          <span
            className="iconify width_icon"
            data-icon="logos:css-3"
            data-inline="false"
          ></span>
        </h1>

        <span
          className="iconify"
          data-icon="logos:javascript"
          data-inline="false"
        ></span>
        <span
          className="iconify"
          data-icon="logos:react"
          data-inline="false"
        ></span>
        <span
          className="iconify"
          data-icon="logos:bootstrap"
          data-inline="false"
        ></span>
        <span
          className="iconify"
          data-icon="logos-material-ui"
          data-inline="false"
        ></span>
        <span
          className="iconify"
          data-icon="logos:tailwindcss-icon"
          data-inline="false"
        ></span>
      </div>
    </>
  );
}

export default Icons;

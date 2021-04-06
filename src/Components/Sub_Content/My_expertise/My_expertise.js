import React from "react";
import "./My_expertise.css";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import DevicesIcon from "@material-ui/icons/Devices";
function My_expertise() {
  return (
    <>
      <div className="about_Skill">
        <div className="skill_description">
          <DevicesIcon
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              marginTop: "50px",
              textShadow: "2px 0px 1px #03a9f4 ",
              color: "gray",
            }}
          />
          <h1>
            Web <span>Development</span>
          </h1>
          <p>
            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
            tortor bibendum massa, sit amet ultricies ex lectus scelerisque
            nibh. Ut non sodales.
          </p>
        </div>
        <div>
          <PermPhoneMsgIcon
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              marginTop: "50px",
              textShadow: "2px 0px 1px #03a9f4 ",
              color: "gray",
            }}
          />
          <h1>
            Buisness <span>Development</span>
          </h1>
          <p>
            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
            tortor bibendum massa, sit amet ultricies ex lectus scelerisque
            nibh. Ut non sodales.
          </p>
        </div>
      </div>
    </>
  );
}

export default My_expertise;

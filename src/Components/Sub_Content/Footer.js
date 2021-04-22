import React from "react";
import { Contacts } from "../Main_Content/Intro";

function Footer() {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        // marginTop: "10px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Contacts />
    </div>
  );
}

export default Footer;

import Intro from "../Main_Content/Intro";
import Sub_Content from "./Sub_Content";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "90%",
    },

    height: {
      height: "78vh",
      borderRadius: "10px",
    },
    background: {
      borderRadius: "10px",
      backgroundColor: "black",
      boxShadow: "inset 1px  1px #03a9f4",
    },
  })
);

function More() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  return (
    <>
      <Accordion className={classes.background} expanded={expanded}>
        <AccordionSummary
          className={classes.height}
          expandIcon={
            <ExpandMoreIcon
              className="
          expandIcon"
              onClick={handleChange}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Intro className={classes.center} />
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: "0px",
          }}
        >
          <Sub_Content />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default More;

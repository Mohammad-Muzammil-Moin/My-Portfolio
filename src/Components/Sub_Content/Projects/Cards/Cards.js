import React from "react";
import "./Cards.css";
import Chip from "@material-ui/core/Chip";
import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      border: "1px solid #03a9f4",
      "& > *": {
        color: "gray",
      },
      margin: theme.spacing(0.5),
    },
  })
);
function Cards({ data }) {
  let styles = {
    backgroundImage: `url(${data.image})`,
    border: "1px solid #03a9f4",
  };
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div className="cards_container" style={styles}>
        <a href={data.link}>
          <div className="cards">
            <img src={data.image} alt="woocomerce" />
          </div>
        </a>
        <div className="card_description">
          <div className="About_projects_card">
            <div className="grow">
              <h2>Project Name:</h2>
              <h1>
                <span>{data.title}</span>
              </h1>
            </div>
            <div className="grow">
              <h3>Responsive</h3>
              <span>{data.ResponsiveCheck}</span>
            </div>
            <div className="chips">
              {data.language.map((lang) => {
                return (
                  <Chip
                    className={classes.root}
                    key={lang}
                    label={lang}
                    variant="outlined"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

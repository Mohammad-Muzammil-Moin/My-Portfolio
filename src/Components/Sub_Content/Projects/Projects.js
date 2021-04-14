import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
import React from "react";
import "./Projects.css";
import { CardData } from "./Cards/CardData";
import Card from "./Cards/Cards";
import Carousel, { consts } from "react-elastic-carousel";
import { IconButton } from "@material-ui/core";
function Projects({ type, onClick, isEdge }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false },
  ];
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <ChevronLeftSharpIcon />
      ) : (
        <ChevronRightSharpIcon />
      );
    return (
      <IconButton onClick={onClick} enable={isEdge}>
        {pointer}
      </IconButton>
    );
  };
  return (
    <div className="projects_container">
      <h1 className="heading_Of_Skills">Some Simple projects of past </h1>
      <div className="carousel">
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
          {CardData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;

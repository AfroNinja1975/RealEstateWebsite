import React from "react";

import classes from "./GridCell.module.css";

const GridCell = (props) => {
  const gridStyles = `${classes.gridCell} ${
    props.gridCount === "25" ? classes.gridCell25 : ""
  } ${props.gridCount === "30" ? classes.gridCell30 : ""} ${
    props.gridCount === "50" ? classes.gridCell50 : ""
  } ${props.gridCount === "70" ? classes.gridCell70 : ""} ${
    props.gridCount === "75" ? classes.gridCell75 : ""
  }`;
  
  return (
    <div className={gridStyles}>
      {props.children}
    </div>
  );
};

export default GridCell;
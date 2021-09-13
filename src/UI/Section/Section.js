import React from 'react';

import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <div
      className={`${classes.section} ${
        props.verticalPadding === "sm" && classes.sectionVertPaddingSm
      } ${props.background === "dark-gray" && classes.sectionDarkGray} ${
        props.background === "gray" && classes.sectionGray
      } ${props.background === "light-gray" && classes.sectionLightGray} ${
        props.background === "red" && classes.sectionRed
      } ${props.background === "dark-red" && classes.sectionDarkRed}`}
    >
      {props.children}
    </div>
  );
};

export default Section;
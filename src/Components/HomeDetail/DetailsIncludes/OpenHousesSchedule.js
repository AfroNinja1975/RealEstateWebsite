import React, { useState } from "react";

import classes from "./OpenHousesSchedule.module.css";

const OpenHousesSchedule = (props) => {
  const [selectedState, setSelectedState] = useState("");
  const startDt = new Date(props.start);
  const endDt = new Date(props.end);
  const day = startDt.getDay();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[startDt.getMonth()];

  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[startDt.getDay()];

  const times = `${startDt.toLocaleString("en-US", {
    timeStyle: "short",
    hour12: true,
  })} - ${endDt.toLocaleString("en-US", {
    timeStyle: "short",
    hour12: true,
  })}`;

  const handleSelected = () => {
    if (selectedState === "selected") {
      setSelectedState("");
    } else {
      setSelectedState("selected");
    }
  };

  return (
    <div
      className={`${classes.openHouseSchedule} ${
        selectedState === "selected" && classes.selected
      }`}
      onClick={handleSelected}
    >
      <p>{dayName}</p>
      <p className={classes.day}>{day}</p>
      <p>{month}</p>
      <p className={classes.times}>{times}</p>
    </div>
  );
};

export default OpenHousesSchedule;

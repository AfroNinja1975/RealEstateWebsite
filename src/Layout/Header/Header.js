import React from "react";
//import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Logo from "../../Assets/Logos/Logo";
import Navigation from "../../Components/Navigation/Navigation";
//import useHttp from "../../hooks/use-http";

const Header = (props) => {
  // const { error, isLoading, sendRequest: getLocationData } = useHttp();

  // useEffect(() => {
  //   console.log("test");

  //   const getLocation = (locationObj) => {
  //     const location = locationObj;
  //     console.log("test" + location);
  //   };

  //   getLocationData(
  //     {
  //       url: `https://service.zipapi.us/zipcode/90210/?X-API-KEY=3b0a70282e1c11d3730698ccabf248fc`,
  //       // headers: {
  //       //   "x-rapidapi-key":
  //       //     "114692449emsh6ec4ec4dd346179p16111djsn60b9e85ad540",
  //       //   "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
  //       // },
  //     },
  //     getLocation
  //   );
  // }, [getLocationData]);

  return (
    <header className={classes.header}>
      <Link to="/">
        <Logo logoClass={classes.logo} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

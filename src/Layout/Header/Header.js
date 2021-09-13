import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Logo from "../../Assets/Logos/Logo";
import Navigation from "../../Components/Navigation/Navigation";

const Header = (props) => {
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

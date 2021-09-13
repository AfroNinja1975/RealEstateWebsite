import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.module.css";
import Button from "../../UI/Button/Button";
import NavDropdown from "./NavDropdown";

const NavItem = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onNavHover = () => {
    setIsActive(true);
  };

  const onNavReset = () => {
    setIsActive(false);
  };

  return (
    <li
      className={`${classes.navItem} ${props.index === 0 && classes.navActive}`}
      onMouseEnter={onNavHover}
      onMouseLeave={onNavReset}
    >
      {props.button ? (
        <Button onClick={props.action} type={props.buttonType}>
          {props.name}
        </Button>
      ) : (
        <NavLink
          activeClassName={classes.navActive}
          className={classes.navLinks}
          to={props.action}
        >
          {props.name}
        </NavLink>
      )}
      {props.subLinks.length > 0 && (
        <div
          className={`${classes.navSubLinks} ${
            isActive && classes.navSubLinksHovered
          }`}
          ref={dropdownRef}
        >
          <NavDropdown items={props.subLinks} key={props.index} />
        </div>
      )}
    </li>
  );
};

export default NavItem;
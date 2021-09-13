import { Link } from "react-router-dom";
import classes from './NavDropdown.module.css';

const NavDropdown = (props) => {
  return (
    props.items.length > 0 &&
    props.items.map(({ section }, idx) => {
      return (
        <div className={classes.navSubLinkSections} key={`section${idx}`}>
          {section.map(({ header, links }, idx) => {
            return (
              <div className={classes.subNavLinks} key={`header${idx}`}>
                <h4>{header}</h4>
                <ul className={classes.subNavLinkList}>
                  {links.map(({ name, action }, idx) => {
                    return (
                      <li>
                        <Link to={action} key={`name${idx}`}>
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      );
    })
  );
};

export default NavDropdown;
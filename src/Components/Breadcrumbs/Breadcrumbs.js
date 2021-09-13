import classes from './Breadcrumbs.module.css';
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import BackChevron from "../../Assets/SVG/BackChevron";
import ForwardChevron from "../../Assets/SVG/ForwardChevron";

const Breadcrumbs = (props) => {
  return (
    <div className={classes.breadcrumbs}>
      <Link className={classes.breadcrumbsBack} to="/Buy">
        <BackChevron />
        <span>Back</span>
      </Link>
      <div className={classes.breadcrumbsSearch}>
        <Search border={true} size="sm" />
      </div>
      <div className={classes.breadcrumbsLinks}>
        <Link to={`/Buy/${props.state}`}>{props.state}</Link>
        <ForwardChevron />
        <Link to={`/Buy/${props.state}/${props.county}`}>{props.county}</Link>
        <ForwardChevron />
        <Link to={`/Buy/${props.state}/${props.county}/${props.city}`}>
          {props.city}
        </Link>
        <ForwardChevron />
        <span>{props.streetAddress}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
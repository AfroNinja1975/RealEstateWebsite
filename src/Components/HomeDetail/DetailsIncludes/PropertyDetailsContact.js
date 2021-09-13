import classes from "./PropertyDetailsContact.module.css";
import Button from "../../../UI/Button/Button";

const PropertyDetailsContact = (props) => {
  return (
    <div className={classes.propertyContact}>
      <div className={classes.contactText}>
        {props.contactText}
      </div>
      <Button href={props.url} type="primary">
        Contact Agent
      </Button>
    </div>
  );
};

export default PropertyDetailsContact;
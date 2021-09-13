import classes from "./PropertyDetails.module.css";
import PropertyDetail from "./PropertyDetail";
import PropertyDetailsContact from "./PropertyDetailsContact";

const PropertyDetails = (props) => {
  return (
    <div className={classes.propertyDetails}>
      <p>{props.detail.description}</p>
      <PropertyDetail features={props.detail.features} />
      <PropertyDetailsContact contactText="Find out more about this property." />
    </div>
  );
};

export default PropertyDetails;
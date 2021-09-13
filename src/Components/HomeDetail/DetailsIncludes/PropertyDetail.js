import classes from "./PropertyDetail.module.css";

const PropertyDetail = (props) => {
  const features = props.features;

  return (
    <div className={classes.propertyDetail}>
      <h2>Property Features</h2>
      {features.map(({category, text}) => {
        return (
          <div className={classes.detailSection} key={category.trim()}>
            <div className={classes.detailSectionHeader}>{category}</div>
            <ul className={classes.detailsList}>
              {text.map((value, idx) => {
                return (
                  <li className={classes.details} key={idx}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyDetail;

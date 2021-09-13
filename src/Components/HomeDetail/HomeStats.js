import React from "react";
import NumberFormat from "react-number-format";
import classes from "./HomeStats.module.css";
import EditIcon from "../../Assets/SVG/EditIcon";
import HomeIcon from "../../Assets/SVG/HomeIcon";
import CalendarIcon from "../../Assets/SVG/CalendarIcon";
import HOAIcon from "../../Assets/SVG/HOAIcon";
import SquareFootIcon from "../../Assets/SVG/SquareFootIcon";
import GarageIcon from "../../Assets/SVG/GarageIcon";
import YearIcon from "../../Assets/SVG/YearIcon";

const HomeStats = (props) => {
  const details = props.details;
  console.log(details);

  const homeStats = [
    {
      icon: <HomeIcon />,
      data: details["raw_prop_type"],
      title: "Property Type",
    },
    {
      icon: <CalendarIcon />,
      data: details["client_display_text"]["listing_date_value"],
      title: "Time on Realtor.com",
    },
    {
      icon: <HOAIcon />,
      data: `$${details["hoa_fee"]}`,
      title: "HOA Fees",
    },
    {
      icon: <SquareFootIcon />,
      data: `$${(details.price/details.sqft).toFixed(2)}`,
      title: "Price per Sqft",
    },
    {
      icon: <GarageIcon />,
      data: details.garage,
      title: "Garage",
    },
    {
      icon: <YearIcon />,
      data: details["year_built"],
      title: "Year Built",
    },
  ];

  return (
    <div className={classes.homeStats}>
      <div className={classes.propertyType}>For Sale</div>
      <h1 className={classes.priceRow}>
        <NumberFormat
          value={details.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(formattedValue) => <span>{formattedValue}</span>}
        />
        <span className={classes.priceRowEstimate}>
          Est.
          <a className={classes.mortgageEstimate} href="mortgageLink">
            <NumberFormat
              value={details.mortgage.estimate["monthly_payment"]}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(formattedValue) => <span>{formattedValue}</span>}
            />
            <span className={classes.mortgageEstimateIcon}>
              <EditIcon className={classes.editIcon} />
            </span>
          </a>
        </span>
      </h1>
      <div className={classes.houseDetails}>
        <div>
          <p>
            <strong>{details.beds}</strong> beds
          </p>
        </div>
        <div>
          <p>
            <strong>{details.baths}</strong> baths
          </p>
        </div>
        <div>
          <p>
            <strong>{details.sqft}</strong> sqft
          </p>
        </div>
      </div>
      <p>{`${details.address.line}, ${details.address.city}, ${details.address["state_code"]} ${details.address["postal_code"]}`}</p>
      <div className={classes.stats}>
        {homeStats.map(({icon, data, title}, idx)=> {
          return (
            <div className={classes.stat} key={idx}>
              {icon}
              <div className={classes.statText}>
                <strong>{data}{title === "Garage" && " Cars"}</strong>
                <span className={classes.statTitle}>{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeStats;

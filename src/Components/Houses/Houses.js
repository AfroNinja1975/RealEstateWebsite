import React, { useContext } from "react";
import FetchHouses from "../../Utils/FetchHouses/FetchHouses";
import LocationContext from "../../store/location-context";
import Section from "../../UI/Section/Section";

const Houses = (props) => {
  const locationCtx = useContext(LocationContext);
  const { city, state } = locationCtx;

  const featuredHouses = [
    {
      heading: `Featured Houses For Sale in or Near ${city}, ${state}`,
      limit: "20",
      radius: "",
      subHeading: "",
    },
    {
      heading: "Don't Miss These Homes",
      limit: "20",
      radius: "5",
      subHeading: "Recommended based on your recent activity",
    },
  ];

  return (
    <Section background="light-gray">
      {featuredHouses.map(({heading, limit, radius, subHeading}, idx) => {
        return (
          <FetchHouses
            heading={heading}
            limit={limit}
            key={idx}
            radius={radius}
            subHeading={subHeading}
          />
        );
      })}
    </Section>
  );
};

export default Houses;

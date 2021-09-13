import React from "react";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import AdditionalInfo from "../Components/HomeDetail/AdditionalInfo/AdditionalInfo";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import PresentedBy from "../Components/Property/PresentedBy/PresentedBy";
import Section from "../UI/Section/Section";
import HomeDetail from "../Components/HomeDetail/HomeDetail";


import property from "../store/testData";
// import useHttp from "../hooks/use-http";

const Property = () => {
  const agent = property.branding["listing_agent"].details;
  const broker = property.branding["listing_office"].details;

  // const params = useParams();
  // const listingid = params.listingid;
  // const propertyid = params.propertyid;
  // const [property, setProperty] = useState({});

  // const { error, isLoading, sendRequest: getPropertyData } = useHttp();

  // useEffect(() => {
  //   const getProperty = (propertyObj) => {
  //     const listing = propertyObj.listing;
      
  //     setProperty({
  //       agent: listing.agent.name,
  //       broker: listing.broker.name,
  //       city: listing.address.city,
  //       county: listing.address.county,
  //       details: listing,
  //       state: listing.address.state,
  //       streetAddress: listing.address.line,
  //     });
  //   };

  //   getPropertyData(
  //     {
  //       url: `https://realty-in-us.p.rapidapi.com/properties/detail?listing_id=${listingid}&prop_status=for_sale&property_id=${propertyid}`,
  //       headers: {
  //         "x-rapidapi-key":
  //           "114692449emsh6ec4ec4dd346179p16111djsn60b9e85ad540",
  //         "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
  //       },
  //     },
  //     getProperty
  //   );
  // }, [getPropertyData, listingid, propertyid]);

  return (
    <>
      <Section>
        {/* {error ? (
          <h3>There was an error loading this property</h3>
        ) : isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <Breadcrumbs
              city={property.city}
              county={property.county}
              state={property.state}
              streetAddress={property.streetAddress}
            />
            <PresentedBy agent={property.agent} broker={property.broker} />
            <HomeDetail details={property.details} />
          </>
        )} */}
        <Breadcrumbs
          city={property.address.city}
          county={property.address.county}
          state={property.address.state}
          streetAddress={property.address.line}
        />
        <PresentedBy agent={agent.name} broker={broker.name} />
        <HomeDetail details={property} />
      </Section>
      <AdditionalInfo details={property} />
    </>
  );
};

export default Property;
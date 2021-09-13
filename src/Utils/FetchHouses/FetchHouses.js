import React, { useEffect, useState, useContext } from "react";
import Card from "../../UI/Card/Card";
import Favorites from "../../Components/Favorites/Favorites";
import Image from "../../UI/Image/Image";
import LocationContext from "../../store/location-context";
import useHttp from "../../hooks/use-http";

import classes from "./FetchHouses.module.css";

const FetchHouses = (props) => {
  const locationCtx = useContext(LocationContext);
  const { city, state } = locationCtx;
  const limit = props.limit !== "" ? props.limit : "50";
  const radius = props.radius !== "" ? props.radius : "1";
  const [housesList, setHousesList] = useState([]);
  const [totalCount, setTotalCount] = useState("");

  const { error, isLoading, sendRequest: getHousesData } = useHttp();

  useEffect(() => {
    const getHouses = (housesObj) => {
      setTotalCount(housesObj.listings.length);
      console.log(housesObj);
      const loadedHouses = [];

      let housesCount = 0;

      for (const housesKey in housesObj["listings"]) {
        const detail = housesObj["listings"][housesKey];

        if (detail["photo_count"] > 0 && housesCount < 4) {
          loadedHouses.push({
            address: {
              city: detail["address_new"].city,
              state: detail["address_new"]["state_code"],
              street: detail["address_new"].line,
              zip: detail["address_new"]["postal_code"],
            },
            baths: detail.baths,
            beds: detail.beds,
            image: detail.photo,
            listingid: detail["listing_id"],
            newListing: detail["is_new_listing"],
            price: detail.price,
            propertyid: detail["property_id"],
            sqft: detail["sqft_raw"],
            statis: detail["prop_status"],
            type: detail["prop_type"],
          });
          housesCount++;
        }
      }

      setHousesList(loadedHouses);
    };

    getHousesData(
      {
        url: `https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=${state}&city=${city}&offset=0&limit=${limit}&sort=relevance&radius=${radius}`,
        headers: {
          "x-rapidapi-key":
            "114692449emsh6ec4ec4dd346179p16111djsn60b9e85ad540",
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
        },
      },
      getHouses
    );
  }, [getHousesData, city, limit, radius, state]);

  return (
    <>
      <h2 className={classes.housesHeading}>
        {props.heading}
        {props.subHeading !== "" ? (
          <span>{props.subHeading}</span>
        ) : (
          <a href="/Buy">See all {totalCount} houses</a>
        )}
      </h2>
      {error ? (
        <h3>There was an error loading the houses list</h3>
      ) : isLoading ? (
        <h3>Loading Houses...</h3>
      ) : (
        <div className={classes.housesList}>
          {housesList.map(
            (
              {
                baths,
                beds,
                address,
                image,
                listingid,
                newListing,
                price,
                propertyid,
                sqft,
                status,
                type,
              },
              idx
            ) => (
              <a
                href={`/Property/${propertyid}/${listingid}`}
                className={classes.housesListHouses}
                key={propertyid}
                propertyid={propertyid}
              >
                <Card className={classes.housesListHouse} hideOverflow={true}>
                  <div className={classes.houseImage}>
                    {newListing && <div className={classes.newHouse}>NEW</div>}
                    <Image
                      src={image}
                      alt={`${address.street}, ${address.city}, ${address.state} ${address.zip}`}
                      class="thumbnail"
                    />
                    <div className={classes.favorite}>
                      <Favorites
                        className={classes.favorite}
                        propertyId={propertyid}
                        type="dark"
                      />
                    </div>
                  </div>
                  <div className={classes.houseDetail}>
                    <div className={classes.propertyType}>
                      {`${
                        type === "single_family" ? "House" : "Condo"
                      } for sale`}
                    </div>
                    <h3>{price}</h3>
                    <div className={classes.houseDetails}>
                      <div>
                        <p>
                          <strong>{beds}</strong> beds
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>{baths}</strong> baths
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>{sqft}</strong> sqft
                        </p>
                      </div>
                    </div>
                    <p>{address.street}</p>
                    <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
                  </div>
                </Card>
              </a>
            )
          )}
        </div>
      )}
    </>
  );
};

export default FetchHouses;

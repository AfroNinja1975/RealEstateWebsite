import React, { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import Image from "../../UI/Image/Image";
import useHttp from "../../hooks/use-http";

import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  const [housesList, setHousesList] = useState();
  const [searchResultsHouses, setSearchResultsHouses] = useState([]);

  const { error, isLoading, sendRequest: getHousesData } = useHttp();

  useEffect(() => {
    const getHouses = (housesObj) => {
      for (const housesKey in housesObj) {
        setSearchResultsHouses(housesObj);
      }
    };

    getHousesData(
      {
        url:
          "https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=CA&city=Irvine&offset=0&limit=20&sort=relevance&radius=10",
        headers: {
          "x-rapidapi-key":
            "114692449emsh6ec4ec4dd346179p16111djsn60b9e85ad540",
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
        },
      },
      getHouses
    );

    setHousesList(
      <div className={classes['houses-list']}>
      {searchResultsHouses}
        {/* {searchResultsHouses.listings.map((index) => {
          return (
            <Card class={classes["search-result"]} key={index['property_id']}>
              <Image src={index.photo} alt={index.address} class="thumbnail" />
              <div>
                <h2></h2>
              </div>
            </Card>
          );
        })} */}
      </div>
    );

  //   return () => ;
  }, [getHousesData]);

  return (
    <>
      {housesList}
    </>
  );
};

export default SearchResults;

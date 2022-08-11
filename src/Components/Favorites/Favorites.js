import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorite from "../../Assets/SVG/Favorite";

const Favorites = (props) => {
  const favoritesList = useSelector((state) => state.favorites);
  const [favoriteValue, setFavoriteValue] = useState(favoritesList);
  const [favoriteType, setFavoriteType] = useState(props.type);
  const dispatch = useDispatch();

  const setFavoriteHandler = (e) => {
    e.preventDefault();
    if (
      favoriteType === props.type &&
      !favoritesList.includes(props.propertyId)
    ) {
      favoritesList.push(props.propertyId);
      setFavoriteType(`${props.type}Selected`);
    } else {
      for (var i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i] === props.propertyId) {
          favoritesList.splice(i, 1);
        }
      }
      setFavoriteType(props.type);
    }
    setFavoriteValue(favoritesList);
    dispatch({ type: "favorites", favorites: favoriteValue });
    localStorage.setItem("favorites", JSON.stringify(favoriteValue));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites !== null) {
      favorites.includes(props.propertyId) &&
        setFavoriteType(`${props.type}Selected`);
    }
  }, [props.propertyId, props.type]);

  return (
    <button className={props.className} onClick={setFavoriteHandler}>
      <Favorite type={favoriteType} />
    </button>
  );
};

export default Favorites;

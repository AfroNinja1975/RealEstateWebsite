//import React, { useEffect, useState, useContext } from "react";
import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../../store/favorites-context";
import Favorite from "../../Assets/SVG/Favorite";

const Favorites = (props) => {
  const [favoriteType, setFavoriteType] = useState(props.type);
  const favoritesCtx = useContext(FavoritesContext);

  const setFavoriteHandler = (e) => {
    e.preventDefault();
    if (favoriteType === props.type) {
      favoritesCtx.favorites.push(props.propertyId);
      localStorage.setItem("favorites", JSON.stringify(favoritesCtx.favorites));
      setFavoriteType(`${props.type}Selected`);
    } else {
      for (var i = 0; i < favoritesCtx.favorites.length; i++) {
        if (favoritesCtx.favorites[i] === props.propertyId) {
          favoritesCtx.favorites.splice(i, 1);
        }
      }
      setFavoriteType(props.type);
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesCtx.favorites));
  };
  
  useEffect(() => {
    const faves = JSON.parse(localStorage.getItem("favorites"));
    faves.includes(props.propertyId) &&
      setFavoriteType(`${props.type}Selected`);
  }, [favoritesCtx.favorites, props.propertyId, props.type]);

  return (
    <button className={props.className} onClick={setFavoriteHandler}>
      <Favorite type={favoriteType} />
    </button>
  );
};

export default Favorites;
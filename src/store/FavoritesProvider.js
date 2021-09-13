import FavoritesContext from "./favorites-context";

const FavoritesProvider = (props) => {
  const favoritesContext = {
    favorites: [],
  };

  return (
    <FavoritesContext.Provider value={favoritesContext}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
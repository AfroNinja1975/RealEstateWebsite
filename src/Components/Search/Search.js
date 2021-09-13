import { useContext } from 'react';
import classes from './Search.module.css';
import LocationContext from "../../store/location-context";
import SearchIcon from "../../Assets/SVG/SearchIcon";

const Search = (props) => {
  const locationCtx = useContext(LocationContext);
  const { city, state } = locationCtx;

  return (
    <div
      className={`${classes.search} ${
        props.border ? classes.searchBordered : null
      } ${props.size === 'sm' ? classes.searchSmall : null}`}
    >
      <input
        type="search"
        placeholder="Enter a city, county or zip code"
        defaultValue={`${city}, ${state}`}
      />
      <button>{props.size === "sm" ? <SearchIcon /> : "Search"}</button>
    </div>
  );
};

export default Search;
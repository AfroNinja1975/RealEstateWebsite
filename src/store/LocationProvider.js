import LocationContext from './location-context';

const LocationProvider = (props) => {
  const locationContext = {
    city: "Irvine",
    state: "CA",
    zip: "92604",
  };

  return (
    <LocationContext.Provider value={locationContext}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
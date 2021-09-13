import React from 'react';

const LocationContext = React.createContext({
  city: "",
  state: "",
  zip: "",
});

export default LocationContext;
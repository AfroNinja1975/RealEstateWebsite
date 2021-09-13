import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import classes from './HomeDetailMap.module.css';

const containerStyle = {
  width: "300px",
  height: "200px",
};

const HomeDetailMap = (props) => {
  const center = {
    lat: props.lat,
    lng: props.long,
  };

  return (
    <div className={classes.homeDetailMap}>
      <LoadScript googleMapsApiKey="AIzaSyCtBU03sxUmF_0iNEIX8b-9xqZBZch2w84">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(HomeDetailMap);

import React, { useState } from "react";
import LocationPicker from "react-leaflet-location-picker";

const LocationInfo = ({location}) => {
    
    const pointMode = {
      banner: false,
      control: {
        values: [location],
        // onClick: point =>{
        //     handleLocationValue(point)
        // },

      }
    };

    return <LocationPicker
            mapStyle={ {height: '450px'} }
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "400px" }} />}
            pointMode={pointMode}  
            showInputs={false}
            startPort={{center :location,zoom : 15}}/>;
  };

export default LocationInfo;
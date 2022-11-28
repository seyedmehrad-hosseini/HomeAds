import React, { useState } from "react";
import LocationPicker from "react-leaflet-location-picker";

const MyPicker = ({handleLocationValue,selectLoc}) => {
    const [loc, setLoc] = useState(selectLoc);

    const pointMode = {
      banner: false,
      control: {
        values: loc,
        onClick: point =>{
            setLoc([point])
            handleLocationValue(point)
        },

      }
    };

    return <LocationPicker
            mapStyle={ {height: '450px'} }
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "400px" }} />}
            pointMode={pointMode}  
            showInputs={false}
            startPort={{center :[32,53],zoom : 5}}/>;
  };

export default MyPicker;



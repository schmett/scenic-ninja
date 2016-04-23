import React, { PropTypes, Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function SimpleMap (props) {
  return (
    
    <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            apiKey='AIzaSyAexzWH2BOOXKz27Dav6m731aehnEW2WX0'
            ref={(map) => console.log('REF',map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}/>
        }
    />
  );
}
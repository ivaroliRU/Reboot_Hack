import React, { Component } from 'react';
import style from './location.css';
import generalStyle from '../onevent.css';
import Cookies from 'js-cookie';

// For Location
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  
  render() {
  
    var location, address;

    if(Cookies.get('language')=='is'){
      location = "Staðsetning Reboot Hack 2020";
      address = "Heimilisfang";
    }
    else{
      location = "Reboot Hack 2020 location";
      address = "Address";
    }


  /* ATH remember to change the script tag in the event.html IF we decide to use only one HTML for webpack */
  const MyMapComponent = withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 64.1367393, lng: -21.9482052 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 64.1367393, lng: -21.9482052 }} />}
    </GoogleMap>
)

    return (
        <div className={"container pb-4"}>
          <h3 className={generalStyle.text_styling}> {location} </h3>
          <div className={"container"}>
            <h4 className={generalStyle.text_styling}>{address}</h4>
            <p><b>Askja</b></p>
            <p>Sturlugata 7, 102 Reykjavik</p>
          </div>
          <MyMapComponent 
            isMarkerShown
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          
        </div>
    );
  }
}


export default Location;
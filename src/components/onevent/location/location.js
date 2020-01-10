import React, { Component } from 'react';
import style from './location.css';

import Cookies from 'js-cookie';

// For Location
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


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
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 64.137262, lng: -21.945822 }}
    >
      {props.isMarkerShown && <Marker 
                                position={{ lat:  64.137262, lng: -21.945822 }} 
                                icon={
                                  {
                                    url: "./images/reboot_pin_svg.svg",
                                    // url: "./images/reboot_pin_svg_v2.svg",
                                    scaledSize: new google.maps.Size(50, 50)
                                  }
                                }/>}
    </GoogleMap>
))

    return (
        <div className={"container pb-4"}>
          <h3 className={style.textStyle}> {location} </h3>
          <div className={"container"}>
            <h4 className={style.textStyle}>{address}</h4>
            <p> <b>Askja</b> - Sturlugata 7, 102 Reykjavik</p>
          </div>
          <MyMapComponent 
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXpAvLFw5f6FZyYM6Aal4riQew8pBOFKo"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          
        </div>
    );
  }
}


export default Location;
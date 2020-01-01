import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Components {

  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={8}
        intialCenter={{ lat: 47.444, lng: -122.176}}
      />
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAXpAvLFw5f6FZyYM6Aal4riQew8pBOFKo'
})(MapContainer);

/* API key: AIzaSyAXpAvLFw5f6FZyYM6Aal4riQew8pBOFKo */
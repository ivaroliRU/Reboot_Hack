import React, { Component } from 'react';
import style from './location.css';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div className={"container"}>
          {/* https://www.npmjs.com/package/google-map-react */}
          <p>Location</p>
        </div>
    );
  }
}


export default Location;
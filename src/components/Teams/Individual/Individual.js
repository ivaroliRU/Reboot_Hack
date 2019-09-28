import React, { Component } from 'react';
import IndividualStyle from "./Individual.css";

class Individual extends Component {
  render() {
    return (
      <div className={"col-xs-4 col-xl-4"}>
        <div 
          id="Photo"
          className={IndividualStyle.IndividualDiv}
        >
          <p> ImageURL: {this.props.individualPhotoUrl} </p>
          <p> Name: {this.props.individualName} </p>
          <p> Email: {this.props.individualEmail} </p>
          <p> LinkedIn: {this.props.individualLinkedIn} </p>
        </div>
      </div>
     );
  }
}
  
export default Individual;
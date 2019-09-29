import React, { Component } from 'react';
import IndividualStyle from "./Individual.css";

class Individual extends Component {
  render() {

    return (
      <div className={IndividualStyle.IndividualPadding + " col-xs-4 col-xl-4"}>
        <div 
          className={IndividualStyle.IndividualDiv}
        >
          <div className={IndividualStyle.ContainedInformation}>
            <img 
              src={this.props.individualPhotoUrl} 
              className={IndividualStyle.IndividualImage+' img-fluid'}/>
              <br /> <br />
            <p className={IndividualStyle.IndividualName}> {this.props.individualName} </p>
            {
              this.props.individualEmail != '' ? 
                <a className={IndividualStyle.IndividualSocial}>
                  <i className={"fa fa-envelope fa-lg"}></i> {this.props.individualEmail}</a> 
                : ''
            }
            <br/>
            {
              this.props.individualLinkedIn != '' ? 
              <a className={IndividualStyle.IndividualSocial}>
                  <i className={"fa fa-linkedin-square fa-lg"}></i> {this.props.individualLinkedIn}</a>
                : ''
            }
          </div>
        </div>
      </div>
     );
  }
}
  
export default Individual;
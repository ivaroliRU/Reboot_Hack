import React, { Component } from 'react';
import IndividualStyle from "./Individual.css";

class Individual extends Component {

  render() {

    let myName;
    if(this.props.individualLinkedIn !== null){
      myName=(
        <a 
          className = {IndividualStyle.UndecoratedATag}
          href={this.props.individualLinkedIn}
          target="_blank"> {this.props.individualName}</a>
      )
    }
    else{
      myName = this.props.individualName;
    }

    return (
      <div className={IndividualStyle.IndividualPadding + " col-xs-3 col-xl-3"}>
        <div 
          className={IndividualStyle.IndividualDiv}
        >
          <div className={IndividualStyle.ContainedInformation}>
            <img 
              src={this.props.individualPhotoUrl} 
              className={IndividualStyle.IndividualImage+' img-fluid'}/>
              <br /> <br />
            <p className={IndividualStyle.IndividualName}> 
              {myName}
            </p>
            <p className={IndividualStyle.Title}>
              {this.props.individualTitleEn}
            </p>
            <br/>
          </div>
        </div>
      </div>
     );
  }
}
  
export default Individual;
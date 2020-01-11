import React, { Component } from 'react';
import IndividualStyle from "./Individual.css";
import Cookies from 'js-cookie';

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
      <div className={IndividualStyle.IndividualPadding + " col-6 col-lg-3"}>
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
              {Cookies.get('language')=='is' ? this.props.individualTitleIs : this.props.individualTitleEn}
            </p>
            <br/>
          </div>
        </div>
      </div>
     );
  }
}
  
export default Individual;
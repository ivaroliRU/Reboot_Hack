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
      <div className={IndividualStyle.IndividualPadding + " col-xs-4 col-xl-4"}>
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
            {
              this.props.individualEmail != '' ? 
                <a 
                  className={IndividualStyle.IndividualSocial}
                  onClick={
                    () => {
                            navigator.clipboard.writeText(this.props.individualEmail);
                          } 
                  }
                >
                  <i className={"fa fa-envelope fa-lg"}></i> {this.props.individualEmail}</a> 
                : ''
            }
            <br/>
          </div>
        </div>
      </div>
     );
  }
}
  
export default Individual;
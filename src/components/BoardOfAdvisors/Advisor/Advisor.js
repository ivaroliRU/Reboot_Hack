import React, { Component } from 'react';
import AdvisorStyle from "../../Teams/Individual/Individual.css";

class Advisor extends Component {

  render() {

    let myName;
    if(this.props.individualLinkedIn !== null){
      myName=(
        <a 
          className = {AdvisorStyle.UndecoratedATag}
          href={this.props.individualLinkedIn}
          target="_blank"> {this.props.individualName}</a>
      )
    }
    else{
      myName = this.props.individualName;
    }

    return (
      <div className={AdvisorStyle.IndividualPadding + " col-xs-4 col-xl-4"}>
        <div 
          className={AdvisorStyle.IndividualDiv}
        >
          <div className={AdvisorStyle.ContainedInformation}>
            <img 
              src={this.props.individualPhotoUrl} 
              className={AdvisorStyle.IndividualImage+' img-fluid'}/>
              <br /> <br />
            <p className={AdvisorStyle.IndividualName}> 
              {myName}
            </p>
            <p>{this.props.individualCompany}</p>
            {
              this.props.individualEmail != '' ? 
                <a 
                  className={AdvisorStyle.IndividualSocial}
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
  
export default Advisor;
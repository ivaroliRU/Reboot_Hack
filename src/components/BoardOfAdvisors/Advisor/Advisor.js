import React, { Component } from 'react';
import AdvisorStyle from "../../Teams/Individual/Individual.css";
import Cookies from 'js-cookie';

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
      <div className={AdvisorStyle.IndividualPadding + " col-2 col-xl-4"}>
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
            <p className={AdvisorStyle.Title}>
              {Cookies.get('language')=='is' ? this.props.individualTitleIs : this.props.individualTitleEn}
            </p>
            <br/>
          </div>
        </div>
      </div>
     );
  }
}
  
export default Advisor;
import React, { Component } from 'react';
import IndividualStyle from "../../Teams/Individual/Individual.css";
import AdvisorStyle from "../Advisor/Advisor.css"
import Cookies from 'js-cookie';

class Advisor extends Component {

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
      <div className={IndividualStyle.IndividualPadding + ' '+AdvisorStyle.div+" col-6 col-lg-4"}>
        <div 
          className={IndividualStyle.IndividualDiv+" "+AdvisorStyle.IndividualDivModofied}
        >
          <div className={IndividualStyle.ContainedInformation}>
            {/* <img 
              src={this.props.individualPhotoUrl} 
              className={IndividualStyle.IndividualImage+' img-fluid'}/>
              <br /> <br /> */}
            <p className={IndividualStyle.IndividualName}> 
              {myName}
            </p>
            {/* {
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
            } */}
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
  
export default Advisor;
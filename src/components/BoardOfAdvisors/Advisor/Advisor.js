import React, { Component } from 'react';
import individualStyle from "../../teams/individual/individual.css";
import advisorStyle from "./advisor.css";
import Cookies from 'js-cookie';

class Advisor extends Component {

  render() {

    let myName;
    if(this.props.individualLinkedIn !== null){
      myName=(
        <a 
          className = {individualStyle.undecorated_a_tag+" "+individualStyle.name}
          href={this.props.individualLinkedIn}
          target="_blank"> {this.props.individualName}</a>
      )
    }
    else{
      myName = this.props.individualName;
    }

    return (
      <div className={individualStyle.individual_padding + ' '+advisorStyle.div+" col-6 col-lg-4"}>
        <div 
          className={individualStyle.individual_div+" "+advisorStyle.individual_div_modified}
        >
          <div className={individualStyle.contained_information+" "+advisorStyle.contained_information_modified}>
            <p className={individualStyle.normla_height+" "+individualStyle.individual_name}> 
              {myName}
            </p>
            <p className={individualStyle.normla_height+" "+individualStyle.title}>
              {Cookies.get('language')=='is' ? this.props.individualTitleIs : this.props.individualTitleEn}
            </p>
            {
                this.props.individualLinkedIn == null ? 
                  null 
                  :
                  <a
                    className={advisorStyle.linkedIn}
                    href={this.props.individualLinkedIn}
                    target="_blank">
                      <br/><i className={"fa fa-linkedin-square fa-lg"}></i>
                  </a>
              }
            <br/>
          </div>
        </div>
      </div>
     );
  }
}
  
export default Advisor;
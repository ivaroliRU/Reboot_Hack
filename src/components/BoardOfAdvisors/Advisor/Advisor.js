import React, { Component } from 'react';
import individualStyle from "../../Teams/Individual/Individual.css";
import advisorStyle from "./Advisor.css";
import Cookies from 'js-cookie';

class Advisor extends Component {

  render() {

    return (
      <div className={individualStyle.individual_padding + ' '+advisorStyle.div+" col-6 col-lg-4"}>
        <div 
          className={individualStyle.individual_div+" "+advisorStyle.individual_div_modified}
        >
          <div className={individualStyle.contained_information+" "+advisorStyle.contained_information_modified}>
            <p className={individualStyle.normla_height+" "+individualStyle.individual_name}> 
              {this.props.individualName}
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
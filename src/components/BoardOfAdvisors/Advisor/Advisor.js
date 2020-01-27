import React, { Component } from 'react';
import individualStyle from "../../teams/individual/individual.css";
import advisorStyle from "./advisor.css"
import Cookies from 'js-cookie';

class Advisor extends Component {

  render() {

    let myName;
    if(this.props.individualLinkedIn !== null){
      myName=(
        <a 
          className = {individualStyle.undecorated_a_tag}
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
          <div className={individualStyle.contained_information}>
            {/* <img 
              src={this.props.individualPhotoUrl} 
              className={individualStyle.individual_image+' img-fluid'}/>
              <br /> <br /> */}
            <p className={individualStyle.individual_name}> 
              {myName}
            </p>
            {/* {
              this.props.individualEmail != '' ? 
                <a 
                  className={individualStyle.individual_social}
                  onClick={
                    () => {
                            navigator.clipboard.writeText(this.props.individualEmail);
                          } 
                  }
                >
                  <i className={"fa fa-envelope fa-lg"}></i> {this.props.individualEmail}</a> 
                : ''
            } */}
            <p className={individualStyle.title}>
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
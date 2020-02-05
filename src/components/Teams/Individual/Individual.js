import React, { Component } from 'react';
import style from "./individual.css";
import Cookies from 'js-cookie';

class Individual extends Component {

  render() {

    return (
      <div className={style.individual_padding + " col-6 col-lg-3"}>
        <div 
          className={style.individual_div}
        >
          <div className={style.contained_information}>
            <img 
              src={this.props.individualPhotoUrl} 
              className={style.normla_height+" "+style.individual_image+' img-fluid'}/>
              <br /> <br />
            <p className={style.normla_height+" "+style.individual_name}> 
              {this.props.individualName}
            </p>
            <p className={style.normla_height+" "+style.title}>
              {
                Cookies.get('language')=='is' ? 
                  this.props.individualTitleIs 
                  : 
                  this.props.individualTitleEn
              } 
              {
                this.props.individualLinkedIn == null ? 
                  null 
                  :
                  <a
                    className={style.linkedIn}
                    href={this.props.individualLinkedIn}
                    target="_blank">
                      <br/><i className={"fa fa-linkedin-square fa-lg"}></i>
                  </a>
              }
            </p>
            <br/>
          </div>
        </div>
      </div>
     );
  }
}
  
export default Individual;
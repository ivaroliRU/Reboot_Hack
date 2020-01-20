import React, { Component } from 'react';
import style from "./Individual.css";
import Cookies from 'js-cookie';

class Individual extends Component {

  render() {

    return (
      <div className={style.IndividualPadding + " col-6 col-lg-3"}>
        <div 
          className={style.IndividualDiv}
        >
          <div className={style.ContainedInformation}>
            <img 
              src={this.props.individualPhotoUrl} 
              className={style.normlaHeight+" "+style.IndividualImage+' img-fluid'}/>
              <br /> <br />
            <p className={style.normlaHeight+" "+style.IndividualName}> 
              {this.props.individualName}
            </p>
            <p className={style.normlaHeight+" "+style.Title}>
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
                    className={style.LinkedIn}
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
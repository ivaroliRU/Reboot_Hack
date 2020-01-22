import React, { Component } from 'react';
import style from './onevent.css';
import Schedule from './schedule/schedule';
import Challenges from './challenges/challenges';
// import Judges from './judges/judges';
import Location from './location/location';
import Events from './events/events'
import InstaGrid from './instagrid/instagrid';

class OnEvent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      instagram: "https://www.instagram.com/reboothackiceland/"
    }
  }

  render() {
    return (
      <div className={style.bodyStyle}>
        <div className={style.divStyling+" container"}>
          <br />
          {/*<h1 className={style.text_styling+" "+style.text_align}><b>Reboot Hack 2020</b></h1>*/}
          <div className={"row"}>
            <div className={"col-lg-8 col-sm-12"}>
              <Challenges /> 
            </div>
            <div className={"col-lg-4 col-sm-12"}>
              <Events />
            </div>
          </div>
          
          <div className={"row pb-20"}>
            <div className={style.schedulePaddingOnMobile+" col-12"}>
              <Schedule />
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-12"}>
              <h3>Reboot Hack  
                <a className={"pl-2"}
                  /* className={style.Instagram} */
                  href={this.state.instagram}
                  target="_blank">
                    <i className={"fa fa-instagram fa-lg "+style.redirectButtonColor}></i>
                </a> 
              </h3>
              <InstaGrid account="reboothackiceland" numberOfMediaElements={9} />
            </div> 
          </div>

          <div className={"row mt-14"}>
            <div className={"col-12 mt-14"}>
              <Location />
            </div>
          </div>
          
        </div> 
      </div>
    );
  }
}


export default OnEvent;
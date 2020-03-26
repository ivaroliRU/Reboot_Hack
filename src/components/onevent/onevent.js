import React, { Component } from 'react';
import style from './onevent.css';
import Schedule from './schedule/schedule';
import Challenges from './challenges/challenges';
// import Location from './location/location';
import Events from './events/events'
import InstaGrid from './instagrid/instagrid';
import Twitter from './twitter/twitter';
import VerticalNavigation from './verticalNavigation/verticalNavigation';

class OnEvent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      instagram: "https://www.instagram.com/reboothackiceland/"
    }
  }

  render() {

    var dateNow = new Date();
    var page_2020;

    if (dateNow.getTime() <= (new Date('Feb 15, 2020 08:00:00').getTime())){
      page_2020 = (
        <div className={style.div_styling+" container"}>
          <br />
          {/*<h1 className={style.text_styling+" "+style.text_align}><b>Reboot Hack 2020</b></h1>*/}
          <div className={"row "+style.margin_top_20}>
            <div id="Challenges_Section" className={"col-lg-8 col-sm-12"}>
              <Challenges /> 
            </div>
            <div id="Events_Section" className={"col-lg-4 col-sm-12"}>
              <Events />
            </div>
          </div>
          
          <div id="Schedule_Section" className={"row pb-20"}>
            <div className={style.schedule_padding_on_mobile+" col-12"}>
              <Schedule/>
            </div>
          </div>

          <div id="Instagram_Section" className={"row pb-20"}>
            <div className={"col-12 pb-4"}>
              <h3>Reboot Hack  
                <a className={"pl-2"}
                  /* className={style.instagram} */
                  href={this.state.instagram}
                  target="_blank">
                    <i className={"fa fa-instagram fa-lg "+style.redirect_button_color}></i>
                </a> 
              </h3>
              <InstaGrid account="reboothackiceland" numberOfMediaElements={9} />
            </div> 
          </div>

          <div id="Location_Section" className={"row"}>
            <div className={"col-12"}>
              <Location />
            </div>
          </div>
        </div> 
      )
    }
    else{
      page_2020 = (
        <div className={style.div_styling+" container"}>
          <br />

          <div className={"row "+style.margin_top_20}>
            <div id="Challenges_Section" className={"col-12 col-sm-12"}>
              <Challenges /> 
            </div>
            {/*
            <div id="Events_Section" className={"col-lg-4 col-sm-12"}>
              <Events />
            </div>
            */}
          </div>


          <div id="Instagram_Section" className={"row pb-20"}>
            <div className={"col-12 pb-4"}>
              <h3>Reboot Hack  
                <a className={"pl-2"}
                  /* className={style.instagram} */
                  href={this.state.instagram}
                  target="_blank">
                    <i className={"fa fa-instagram fa-lg "+style.redirect_button_color}></i>
                </a> 
              </h3>
              <InstaGrid account="reboothackiceland" numberOfMediaElements={9} />
            </div> 
          </div>

          <div id={"Twitter_Section"} className={"row pb-20"}>
            <div className={style.schedule_padding_on_mobile+ " col-12"}>
              <Twitter />
            </div>
          </div>

          { /*<div id="Schedule_Section" className={"row pb-20"}>
            <div className={style.schedule_padding_on_mobile+" col-12"}>
              <Schedule/>
            </div>
            </div> */}

          
          {/*<div id="Location_Section" className={"row"}>
            <div className={"col-12"}>
              <Location />
            </div>
            </div>*/}
        </div> 
      )
    }

    return (
      <div className={style.body_style}>
        <VerticalNavigation />
        {page_2020}
      </div>
    );
  }
}


export default OnEvent;
import React, { Component } from 'react';
import style from './events.css';
import generalStyle from '../onevent.css';
import Cookies from 'js-cookie';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          id: 0,
          titleEn: "Re:think // What is innovation?",
          titleIs: "Re:think // Hvað er nýsköpun?",
          day: "9",
          monthEn: "October",
          monthIs: "Október",
          textEn: "Are you interested in innovation, and want to learn more about the different platforms available?",
          textIs: "Hefur þú áhuga á nýsköpun og vilt læra meira um þá möguleika sem eru í boði?",
          location: "Loft Hostel"
        },
        {
          id: 1,
          titleEn: "Events",
          titleIs: "Viðburðir",
          day: "",
          monthEn: "January",
          monthIs: "Janúar",
          textEn: "To Be Announced.",
          textIs: "Verður Tilkynnt Síðar.",
          location: ""
        },
        // {
        //   id: 2,
        //   titleEn: "Third event",
        //   titleIs: "Third event",
        //   day: "27",
        //   monthEn: "January",
        //   monthIs: "Ianuar",
        //   textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        //   textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        //   location: "someLocation"
        // },
        // {
        //   id: 3,
        //   titleEn: "Forth event",
        //   titleIs: "Forth event",
        //   day: "28",
        //   monthEn: "January",
        //   monthIs: "Ianuar",
        //   textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        //   textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        //   location: "someLocation"
        // },
      ]
    };
  }
  
  render() {

    var upcomingEventsText;
    if(Cookies.get('language')=='is'){
      upcomingEventsText="Væntanlegir Viðburðir";
    }
    else{
      upcomingEventsText="Upcoming Events";
    }

    var eventsSection = this.state.events.map(
      (event) => {

        return (

          <li key={event.id} className={style.media}>
            <div className={style.media_left}>
              <div className={" "+style.text_center+" "+style.date}>
                <div className={style.panel_body+" "+style.day+" "+generalStyle.justTheFont}>
                  {event.day}
                </div>
                <div className={style.date_heading+" "+style.month}>
                  <span className={style.panel_title+" "+generalStyle.justTheFont}>
                    {Cookies.get('language')=='is' ? event.monthIs : event.monthEn}
                  </span>
                </div>
                
              </div>
            </div>
            <div className={style.media_body}>
              <h4 className={style.media_heading+" "+generalStyle.justTheFont}><b>{Cookies.get('language')=='is' ? event.titleIs : event.titleEn}</b></h4>
              <h5 className={generalStyle.justTheFont}><b>{event.location}</b></h5>
              <p className={style.textJustify+" "+generalStyle.justTheFont}>{Cookies.get('language')=='is' ? event.textIs : event.textEn}</p>
            </div>
          </li>
        );
    });

    return (
        <div className={"container"} >

          <div className={style.panel +" "+style.panel_danger}>
              <div className={style.panel_heading}>
                  <h3 className={generalStyle.justTheFont+" "+style.panel_title}>
                      <span className={"glyphicon glyphicon-calendar"}></span> 
                        <b>{upcomingEventsText}</b>
                  </h3>
              </div>
              
              <div className={style.panel_body}>
                <ul className={style.media_list}>
                  {eventsSection}
                </ul>
              </div>
          </div>
               
        </div>
    );
  }
}


export default Events;
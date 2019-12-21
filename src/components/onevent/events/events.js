import React, { Component } from 'react';
import style from './events.css';
import Cookies from 'js-cookie';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          id: 0,
          titleEn: "First event",
          titleIs: "First event",
          day: "25",
          monthEn: "January",
          monthIs: "Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 1,
          titleEn: "Second event",
          titleIs: "Second event",
          day: "26",
          monthEn: "January",
          monthIs: "Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },{
          id: 2,
          titleEn: "Third event",
          titleIs: "Third event",
          day: "27",
          monthEn: "January",
          monthIs: "Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 3,
          titleEn: "Forth event",
          titleIs: "Forth event",
          day: "28",
          monthEn: "January",
          monthIs: "Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
      ]
    };
  }
  
  render() {
    var eventsSection = this.state.events.map(
      (event) => {

        return (

          <li className={style.media}>
            <div className={style.media_left}>
              <div className={style.panel+" "+style.panel_danger+" "+style.text_center+" "+style.date}>
                <div className={style.panel_heading+" "+style.month}>
                  <span className={style.panel_title}>
                    {Cookies.get('language')=='is' ? event.monthIs : event.monthEn}
                  </span>
                </div>
                <div className={style.panel_body+" "+style.day+" text-danger"}>
                  {event.day}
                </div>
              </div>
            </div>
            <div className={style.media_body}>
              <h4 className={style.media_heading}>{Cookies.get('language')=='is' ? event.titleIs : event.titleEn}</h4>
              <h5>{event.location}</h5>
              <p className={style.textJustify}>{Cookies.get('language')=='is' ? event.textIs : event.textEn}</p>
            </div>
          </li>
        );
    });

    return (
        <div className={"container"} >
          <center>2020 Events</center>

                  
          <div className={style.panel +" "+style.panel_danger}>
              <div className={style.panel_heading}>
                  <h3 className={style.panel_title}>
                      <span className={"glyphicon glyphicon-calendar"}></span> 
                        Upcoming Events
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
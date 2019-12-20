import React, { Component } from 'react';
import style from './schedule.css';
import Cookies from 'js-cookie';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          id: 0,
          titleEn: "First event",
          titleIs: "First event",
          dateEn: "2 January",
          dateIs: "2 Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 1,
          titleEn: "Second event",
          titleIs: "Second event",
          dateEn: "2 January",
          dateIs: "2 Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 2,
          titleEn: "Third event",
          titleIs: "Third event",
          dateEn: "2 January",
          dateIs: "2 Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 3,
          titleEn: "Forth event",
          titleIs: "Forth event",
          dateEn: "2 January",
          dateIs: "2 Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 4,
          titleEn: "Fifth event",
          titleIs: "Fifth event",
          dateEn: "2 January",
          dateIs: "2 Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
        {
          id: 5,
          titleEn: "Sixth event",
          titleIs: "Sixth event",
          dateEn: "2 January",
          dateIs: "2 Ianuar",
          textEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          textIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          location: "someLocation"
        },
      ]
    };
  }
  
  render() {
    var scheduleSection = this.state.events.map(
      (event) => {

        return (
          <div className={style.myElement}>
            <p>{Cookies.get('language')=='is' ? event.dateIs+': '+event.titleIs : event.dateEn+': '+event.titleEn} {'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+event.location}</p>
            <p>{Cookies.get('language')=='is' ? event.textIs : event.textEn}</p>
          </div>
        );
    });

    return (
        <div className={"container"} >
          <center>2020 Schedule</center>

          <div className={style.myDiv}>
            {scheduleSection}
          </div>

        </div>
    );
  }
}


export default Event;
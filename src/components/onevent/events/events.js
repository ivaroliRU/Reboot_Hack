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
          monthIs: "október.",
          textEn: "Are you interested in innovation, and want to learn more about the different platforms available?",
          textIs: "Hefur þú áhuga á nýsköpun og vilt læra meira um þá möguleika sem eru í boði?",
          location: "Loft Hostel",
          expired: true
        },
        {
          id: 1,
          titleEn: "Lunch Presentation",
          titleIs: "Hádegis- fyrirlestur",
          day: "24",
          monthEn: "January",
          monthIs: "Janúar",
          textEn: "Introduction on Reboot hackathon for university students on Akureyri.",
          textIs: "Kynning á Reboot nýsköpunarkeppni fyrir háskólanema á Akureyri.",
          location: "Háskólinn á Akureyri"
        },
        {
          id: 2,
          titleEn: "Reboot Hack Science trip in Akureyri",
          titleIs: "Reboot Hack vísindaferð á Akureyri",
          day: "24",
          monthEn: "January",
          monthIs: "Janúar",
          textEn: "All university students welcome! // Free Beer .",
          textIs: "Allir háskólanemar velkomnir! // Bjór í boð.",
          location: "Café Amour"
        },
        {
          id: 3,
          titleEn: "Meet our sponsors on Framadagar",
          titleIs: "Hittu styrktaraðila okkar á framadögum",
           day: "30",
           monthEn: "January",
           monthIs: "Janúar",
           textEn: "Come and meet us!",
           textIs: "Komdu og heilsaðu upp á okkur!",
           location: "Háskólinn í Reykjavík"
        },
        {
          id: 4,
          titleEn: "Lunch presentation",
          titleIs: "Hádegisbás",
           day: "31",
           monthEn: "January",
           monthIs: "Janúar",
           textEn: "",
           textIs: "",
           location: "Sólin, HR"
        },
        {
          id: 5,
          titleEn: "Reboot Hack Science trip",
          titleIs: "Reboot Hack vísindaferð",
           day: "31",
           monthEn: "January",
           monthIs: "Janúar",
           textEn: "All university students welcome",
           textIs: "Allir háskólanemar velkomnir",
           location: "Loft Hostel"
        },
        {
          id: 6,
          titleEn: "Meet & Greet",
          titleIs: "Opnunar- viðburður",
           day: "14",
           monthEn: "February",
           monthIs: "Febrúar",
           textEn: "All participants!",
           textIs: "Allir þátttakendur!",
           location: "Askja"
        },
        {
          id: 7,
          titleEn: "Closing party",
          titleIs: "Lokahóf",
           day: "16",
           monthEn: "February",
           monthIs: "Febrúar",
           textEn: "Open for all participants",
           textIs: "Opið öllum þátttakendum",
           location: "Loft Hostel"
        },
      ]
    };
  }
  
  render() {

    var upcomingEventsText;
    if(Cookies.get('language')=='is'){
      upcomingEventsText="Kynningarviðburðir";
    }
    else{
      upcomingEventsText="Mini-events";
    }

    var minimumEventId = -1;
    var dateNow = new Date();
    if(dateNow.getTime() >= new Date('Oct 10, 2019 00:00:00').getTime()){
      minimumEventId=0;
    }

    if(dateNow.getTime() >= new Date('Jan 25, 2020 00:00:00').getTime()){
      minimumEventId=2;
    }
    if(dateNow.getTime() >= new Date('Jan 31, 2020 00:00:00').getTime()){
      minimumEventId=3;
    }
    if(dateNow.getTime() >= new Date('Feb 01, 2020 00:00:00').getTime()){
      minimumEventId=5;
    }
    if(dateNow.getTime() >= new Date('Feb 15, 2020 00:00:00').getTime()){
      minimumEventId=6;
    }
    if(dateNow.getTime() >= new Date('Feb 17, 2020 00:00:00').getTime()){
      minimumEventId=7;
    }

    var eventsSection = this.state.events.map(
      (event) => {

        return (

          <li key={event.id} className={style.media}>
            <div className={style.media_left}>
              <div className={" "+style.text_center+" "+style.date}>
                <div className={style.panel_body+" "+style.day+" "+style.text_styling}>
                  {event.day}
                </div>
                <div className={style.date_heading+" "+style.month}>
                  <span className={style.panel_title+" "+style.text_styling}>
                    {Cookies.get('language')=='is' ? event.monthIs : event.monthEn}
                  </span>
                </div>
                
              </div>
            </div>
            <div className={style.media_body+" "+(event.id <= minimumEventId ? style.textGray : null)}>
              <h4 className={style.media_heading+" "+generalStyle.justTheFont}><b>{Cookies.get('language')=='is' ? event.titleIs : event.titleEn}</b></h4>
              <h5 className={style.location_heading+" "+generalStyle.justTheFont}><i className={"fa fa-map-marker"} />  <b>{event.location}</b></h5>
              <p className={style.textJustify+" "+generalStyle.justTheFont}>{Cookies.get('language')=='is' ? event.textIs : event.textEn}</p>
            </div>
          </li>
        );
    });

    return (
        <div className={style.divPadding+" container"} >

          <div className={style.panel +" "+style.panel_danger}>
              <div className={style.panel_heading}>
                  <h3 className={style.panel_title}>
                    {upcomingEventsText}
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
import React, { Component } from 'react';
import style from './schedule.css';
import Cookies from 'js-cookie';
import ReactDOMServer from 'react-dom/server';
import buttonStyle from '../../applyButton/applyButton.css';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleEnLink: "/images/Schedule_En.png",
      scheduleIsLink: "/images/Schedule_Is.png",
      schedule_events_saturday: [
        {
          id: 0,
          startHour: "8:00",
          textEn: "Registry opens ✔️",
          textIs: "Registry opens ✔️",
          descriptionEn: "Show up and meet the people \n",
          descriptionIs: "Show up and meet the people \n",
          locationEn: "Askja - main entrence",
          locationIs: "Askja - main entrence"
        },
        {
          id: 1,
          startHour: "8:30",
          textEn: "Breakfast/ Schedule presented 📝",
          textIs: "Breakfast/ Schedule presented 📝",
          descriptionEn: "Come and have delicous breakfast and get to know the schedule",
          descriptionIs: "Come and have delicous breakfast and get to know the schedule",
          locationEn: "Askja - main hall",
          locationIs: "Askja - main hall"
        },
        {
          id: 2,
          startHour: "10:00",
          textEn: "Opening Ceremony 📢",
          textIs: "Opening Ceremony 📢",
          descriptionEn: "",
          descriptionIs: "",
          locationEn: "Askja - room 132",
          locationIs: "Askja - room 132"
        },
        {
          id: 3,
          startHour: "10:30",
          textEn: "Team Formation 👋",
          textIs: "Team Formation 👋",
          descriptionEn: "Join a winning team if you do not already have one!",
          descriptionIs: "Join a winning team if you do not already have one!",
          locationEn: "Askja - main hall",
          locationIs: "Askja - main hall"
        },
        {
          id: 4,
          startHour: "11:30",
          textEn: "Lunch & Hacking starts 🌮🌮",
          textIs: "Lunch & Hacking starts 🌮🌮",
          descriptionEn: "START HACKING 👩‍💻👨‍💻",
          descriptionIs: "START HACKING 👩‍💻👨‍💻",
          locationEn: "Askja",
          locationIs: "Askja"
        },
        {
          id: 5,
          startHour: "13:00",
          textEn: "Workshops begins 🧠",
          textIs: "Workshops begins 🧠",
          descriptionEn: "We have loads of very fun workshops",
          descriptionIs: "We have loads of very fun workshops",
          locationEn: "Askja - rooms: 121, 128, 129, 130",
          locationIs: "Askja - rooms: 121, 128, 129, 130"
        },
        {
          id: 6,
          startHour: "15:00",
          textEn: "Coffee break",
          textIs: "Coffee break",
          descriptionEn: "Want some coffe? ☕️",
          descriptionIs: "Want some coffe? ☕️",
          locationEn: "Askja - main hall",
          locationIs: "Askja - main hall"
        },
        {
          id: 7,
          startHour: "17:00",
          textEn: "Workshops end ❌🧠",
          textIs: "Workshops end ❌🧠",
          descriptionEn: "Use your newly gained experience from the workshops to make your solution better",
          descriptionIs: "Use your newly gained experience from the workshops to make your solution better",
          locationEn: "",
          locationIs: ""
        },
        {
          id: 8,
          startHour: "19:00",
          textEn: "Dinner 🍕🍽",
          textIs: "Dinner 🍕🍽",
          descriptionEn: "Dinner is served!",
          descriptionIs: "Dinner is served!",
          locationEn: "Askja - main hall",
          locationIs: "Askja - main hall"
        },
        {
          id: 9,
          startHour: "21:00",
          textEn: "Surprise 💥",
          textIs: "Surprise 💥",
          descriptionEn: "I like surprises! 🤠",
          descriptionIs: "I like surprises! 🤠",
          locationEn: "",
          locationIs: ""
        },
        {
          id: 10,
          startHour: "22:30",
          textEn: "Surprising Surprise 💥💥",
          textIs: "Surprising Surprise 💥💥",
          descriptionEn: "Double surprise is double the fun! \n WOW!? two surprises in one night 🤑",
          descriptionIs: "Double surprise is double the fun! \n WOW!? two surprises in one night 🤑",
          locationEn: "",
          locationIs: ""
        },
        {
          id: 11,
          startHour: "23:30",
          textEn: "Midnight Snack 🌜🍭",
          textIs: "Midnight Snack 🌜🍭",
          descriptionEn: "Don't feed the Gremlins 👽",
          descriptionIs: "Don't feed the Gremlins 👽",
          locationEn: "Askja - Main hall",
          locationIs: "Askja - Main hall"
        }
      ],
      schedule_events_sunday: [
        {
          id: 12,
          startHour: "08:00",
          textEn: "Breakast 🥞🥞",
          textIs: "Breakast 🥞🥞",
          descriptionEn: "To be addded",
          descriptionIs: "To be addded",
          locationEn: "Askja",
          locationIs: "Askja"
        },
        {
          id: 13,
          startHour: "11:00",
          textEn: "Submissions 👐🧻",
          textIs: "Submissions 👐🧻",
          descriptionEn: "To be addded",
          descriptionIs: "To be addded",
          locationEn: "",
          locationIs: ""
        },
        {
          id: 14,
          startHour: "11:30",
          textEn: "Lunch 🥪🍱",
          textIs: "Lunch 🥪🍱",
          descriptionEn: "To be addded",
          descriptionIs: "To be addded",
          locationEn: "Askja",
          locationIs: "Askja"
        },
        {
          id: 15,
          startHour: "12:00",
          textEn: "Final Pitches 🎤💡",
          textIs: "Final Pitches 🎤💡",
          descriptionEn: "To be addded",
          descriptionIs: "To be addded",
          locationEn: "Askja",
          locationIs: "Askja"
        },
        {
          id: 16,
          startHour: "14:00",
          textEn: "Pitches end & judges deliberate 🤔💭📋",
          textIs: "Pitches end & judges deliberate 🤔💭📋",
          descriptionEn: "To be addded",
          descriptionIs: "To be addded",
          locationEn: "",
          locationIs: ""
        },
        {
          id: 17,
          startHour: "15:00",
          textEn: "Top 5 teams present & Award Ceremony 🥇",
          textIs: "Top 5 teams present & Award Ceremony 🥇",
          descriptionEn: "To be addded",
          descriptionIs: "To be addded",
          locationEn: "Askja, room 132",
          locationIs: "Askja, room 132"
        }
      ]
    };
  }
  
  
  render() {

    var infoText, scheduleText, timelineDescription, imageSRC, ShowFullScheduleText, saturdayText, sundayText;

    if(Cookies.get('language')=='is'){
      infoText="Push any entry in the schedule to get more info!";
      saturdayText = "Laugardagur";
      sundayText = "Sunnudagur";
      scheduleText = "Áætlun";
      imageSRC = this.state.scheduleIsLink;
      ShowFullScheduleText = "Show full schedule";
    }
    else{
      infoText="Push any entry in the schedule to get more info!";
      saturdayText = "Saturday";
      sundayText = "Sunday";
      scheduleText="Schedule";
      imageSRC = this.state.scheduleEnLink;
      ShowFullScheduleText = "Show full schedule";
    }

    timelineDescription = (
      <p> 
        {infoText}
      </p>
    );

    function updateText(day, descriptionIs, descriptionEn, locationIs, locationEn){
      
      timelineDescription = (
        <div>
          <p>{Cookies.get('language')=='is' ? descriptionIs : descriptionEn}</p>
          <p> {(locationIs == "" || locationEn == "" ) ? null : <i className={"fa fa-map-marker"} />} {Cookies.get('language')=='is' ? locationIs : locationEn}</p>
        </div>
      );
      if(day==0){
        document.getElementById(style.timeline_descriptions_wrapper1).innerHTML = ReactDOMServer.renderToStaticMarkup(timelineDescription);
      }
      else{
        document.getElementById(style.timeline_descriptions_wrapper2).innerHTML = ReactDOMServer.renderToStaticMarkup(timelineDescription);
      }
    }
    

    var scheduleSection_sunday = this.state.schedule_events_sunday.map(
      (someEvent) => {
        return [
          (
            <input 
              key={someEvent.id}
              className={style.input} 
              type="radio" 
              name="timeline-dot" 
              data-description="1" 
              value={someEvent.startHour}
              onClick={() => updateText(1, someEvent.descriptionIs, someEvent.descriptionEn, someEvent.locationIs, someEvent.locationEn)}/>
          ),
          (
            <div 
              key={someEvent.id+10}
              className={style.dot_info} 
              data-description="1">
              <span className={style.span+" "+style.year}>{someEvent.startHour}</span>
              <span className={style.span+" "+style.label}>{Cookies.get('language')=='is' ? someEvent.textIs : someEvent.textEn}</span>
          </div>
          )
        ];
      }
    );

    var scheduleSection_saturday = this.state.schedule_events_saturday.map(
      (someEvent) => {
        return [
          (
            <input 
              key={someEvent.id}
              className={style.input} 
              type="radio" 
              name="timeline-dot" 
              data-description="1"
              value={someEvent.startHour}
              onClick={() => updateText(0, someEvent.descriptionIs, someEvent.descriptionEn, someEvent.locationIs, someEvent.locationEn)}/>
          ),
          (
            <div 
              key={someEvent.id+10}
              className={style.dot_info} 
              data-description="1">
              <span className={style.span+" "+style.year}>{someEvent.startHour}</span>
              <span className={style.span+" "+style.label}>{Cookies.get('language')=='is' ? someEvent.textIs : someEvent.textEn}</span>
          </div>
          )
        ];
      }
    );

    function changeToSaturdaySchedule(){
      document.getElementById(style.ScheduleSaturday).style.display = 'block'; // show
      document.getElementById(style.ScheduleSunday).style.display = 'none'; // hide
    }

    function changeToSundaySchedule(){
      document.getElementById(style.ScheduleSaturday).style.display = 'none'; // show
      document.getElementById(style.ScheduleSunday).style.display = 'block'; // hide
    }
    
    return (
        <div className={style.myDiv+" container"}>

          <center>
            <h2 className="pb-6">{scheduleText}:</h2> 

            <button type="button" className={"btn btn-outline-primary btn-lg "+buttonStyle.apply_button} data-toggle="modal" data-target={"#ModalForSchedule"}>
              {ShowFullScheduleText}
            </button>

            <div className={"modal fade"} id={"ModalForSchedule"} tabIndex="-1" role="dialog" aria-labelledby={"ModalForSchedule"} aria-hidden="true">
              <div className={style.myModalDialog+" modal-dialog"} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className={style.modalHeaderStyle+" row"}>
                      
                      <h5 className={"modal-title"} id={"ModalForSchedule"}> {scheduleText}</h5>
                     
                    </div>
                    <button type="button" className={style.buttonClose+" close"} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className={style.modalBody+" modal-body"}>
                    <img className={"img-fluid "} src={imageSRC}/>
                  </div>
                 
                </div>
              </div>
            </div>

            <br/><br/>
            
            <button 
              type="button" 
              className={"btn btn-outline-primary btn-lg "+buttonStyle.apply_button}
              onClick={() => changeToSaturdaySchedule()}>
                {saturdayText}
            </button>
            |
            <button 
              type="button" 
              className={"btn btn-outline-primary btn-lg "+buttonStyle.apply_button}
              onClick={() => changeToSundaySchedule()}>
                {sundayText}
            </button>
          </center> 
    
          <div className={style.displayOnBiggerScreensOnly}>
            <br /><br /><br /><br /><br /><br />
          </div>
          

          <div 
          id={style.ScheduleSaturday}
          className={style.flex_parent}>
            <div className={style.input_flex_container}>

              {scheduleSection_saturday}
                        

              <div id={style.timeline_descriptions_wrapper1}>
                {timelineDescription}
              </div>
            </div>
          </div> 

          <div 
            id={style.ScheduleSunday}
            className={style.flex_parent}>
            <div className={style.input_flex_container+" "+style.input_flex_container_smaller}>

              {scheduleSection_sunday}
                        

              <div id={style.timeline_descriptions_wrapper2}>
                {timelineDescription}
              </div>
            </div>
          </div> 


        </div>
        
    );
  }
}


export default Schedule;
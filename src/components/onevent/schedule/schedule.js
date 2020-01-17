import React, { Component } from 'react';
import style from './schedule.css';
import Cookies from 'js-cookie';
import ReactDOMServer from 'react-dom/server';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          textEn: "Lunch/ Hacking starts 🌮🌮",
          textIs: "Lunch/ Hacking starts 🌮🌮",
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
          textEn: "SomeName",
          textIs: "SomeName",
          descriptionEn: "SomeDescription",
          descriptionIs: "SomeDescription",
          locationEn: "SomeLocation",
          locationIs: "SomeLocation"
        },
        {
          id: 13,
          startHour: "SomeTime",
          textEn: "SomeName",
          textIs: "SomeName",
          descriptionEn: "SomeDescription",
          descriptionIs: "SomeDescription",
          locationEn: "SomeLocation",
          locationIs: "SomeLocation"
        },
        {
          id: 14,
          startHour: "SomeTime",
          textEn: "SomeName",
          textIs: "SomeName",
          descriptionEn: "SomeDescription",
          descriptionIs: "SomeDescription",
          locationEn: "SomeLocation",
          locationIs: "SomeLocation"
        },
        {
          id: 15,
          startHour: "SomeTime",
          textEn: "SomeName",
          textIs: "SomeName",
          descriptionEn: "SomeDescription",
          descriptionIs: "SomeDescription",
          locationEn: "SomeLocation",
          locationIs: "SomeLocation"
        },
        {
          id: 16,
          startHour: "SomeTime",
          textEn: "SomeName",
          textIs: "SomeName",
          descriptionEn: "SomeDescription",
          descriptionIs: "SomeDescription",
          locationEn: "SomeLocation",
          locationIs: "SomeLocation"
        },
        {
          id: 17,
          startHour: "SomeTime",
          textEn: "SomeName",
          textIs: "SomeName",
          descriptionEn: "SomeDescription",
          descriptionIs: "SomeDescription",
          locationEn: "SomeLocation",
          locationIs: "SomeLocation"
        }
      ]
    };
  }
  
  
  render() {

    var infoText;
    var selectedDay = "Saturday";
    var saturdayText;
    var sundayText;
    var scheduleText;
    var myState = this.state;
    //this must be inverted. there is a bug
    var myCurrentState = (selectedDay == "Saturday" ? this.state.schedule_events_saturday : this.state.schedule_events_sunday);
    var timelineDescription;
    var scheduleSection;

    if(Cookies.get('language')=='is'){
      infoText="Push any entry in the schedule to get more info!";
      saturdayText = "Laugardagur";
      sundayText = "Sunnudagur";
      scheduleText="Schedule";
    }
    else{
      infoText="Push any entry in the schedule to get more info!";
      saturdayText = "Saturday";
      sundayText = "Sunday";
      scheduleText="Schedule";
    }

    if(selectedDay == "Saturday"){
      updateSelectedSchedule(this.state.schedule_events_saturday);
    }
    else{
      updateSelectedSchedule(this.state.schedule_events_sunday);
    }

    
    timelineDescription = (
      <p> 
        {infoText}
      </p>
    );
    
    function changeToSaturdaySchedule(){
      selectedDay="Saturday";
      myCurrentState = myState.schedule_events_saturday;
      console.log("selected day was changed to "+selectedDay);
      console.log(myCurrentState);
      updateSelectedSchedule(myCurrentState);
    }

    function changeToSundaySchedule(){
      selectedDay="Sunday";
      myCurrentState = myState.schedule_events_sunday;
      console.log("selected day was changed to "+selectedDay);
      console.log(myCurrentState);
      updateSelectedSchedule(myCurrentState);
    }

    

    function updateText(selectedSection){
      
      if(selectedDay=="Sunday"){
        selectedSection=selectedSection - 12;
      }

      timelineDescription = (
        <div>
          <p>{Cookies.get('language')=='is' ? myCurrentState[selectedSection].descriptionIs : myCurrentState[selectedSection].descriptionEn}</p>
          <p><i className={"fa fa-map-marker"} /> {Cookies.get('language')=='is' ? myCurrentState[selectedSection].locationIs : myCurrentState[selectedSection].locationEn}</p>
        </div>
      );
          
      document.getElementById(style.timeline_descriptions_wrapper).innerHTML = ReactDOMServer.renderToStaticMarkup(timelineDescription);
    }
    
    function updateSelectedSchedule(selectedState){
      scheduleSection = selectedState.map(
        (someEvent) => {
          return [
            (
              <input 
                key={someEvent.id}
                className={style.input} 
                type="radio" 
                name="timeline-dot" 
                data-description="1" 
                onClick={() => {updateText(someEvent.id)}}/>
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
    }
    
    return (
        <div className={style.myDiv+" container"}>

          <center>
            <h2 className="pb-6">{scheduleText}:</h2> 
            {/* <button 
              type="button" 
              onClick={() => changeToSaturdaySchedule()}>
                {saturdayText}
            </button>
            |
            <button 
              type="button" 
              onClick={() => changeToSundaySchedule()}>
                {sundayText}
            </button> */}
          </center> 
    
          <div className={style.displayOnBiggerScreensOnly}>
            <br /><br /><br /><br /><br /><br />
          </div>

          <div className={style.flex_parent}>
            <div className={style.input_flex_container}>

              {scheduleSection}

              <div id={style.timeline_descriptions_wrapper}>
                {timelineDescription}
              </div>
            </div>
          </div> 

        </div>
        
    );
  }
}


export default Schedule;
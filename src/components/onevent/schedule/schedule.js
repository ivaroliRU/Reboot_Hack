import React, { Component } from 'react';
import style from './schedule.css';
import Cookies from 'js-cookie';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: [
        {
          id: 0,
          text: "Show up and meet the people "
        },
        {
          id: 1,
          text: "Come and have delicous breakfast and get to know the schedule"
        },
        {
          id: 2,
          text: ""
        },
        {
          id: 3,
          text: "Join a winning team if you do not already have one! "
        },
        {
          id: 4,
          text: "START HACKING 👩‍💻👨‍💻"
        },
        {
          id: 5,
          text: "We have loads of very fun workshops"
        },
        {
          id: 6,
          text: "Want some coffe? ☕️"
        },
        {
          id: 7,
          text: ""
        },
        {
          id: 8,
          text: "Dinner is served! "
        },
        {
          id: 9,
          text: "I like surprises!"
        },
        {
          id: 10,
          text: "Double surprise is double the fun!"
        },
        {
          id: 11,
          text: "Don't feed the Gremlins 👽"
        },

      ]
    };
  }
  
  
  render() {

    
    var timelineDescription = (
      <p> 
        Push any entry in the schedule to get more info!
      </p>
    );

    var myState = this.state.description

    // console.log(myState);

    function updateText(selectedSection){

      // console.log(selectedSection);
      // console.log(myState);
     
      // timelineDescription = (
      //   <p>
      //     Test! IF this passes, it can be modified
      //   </p>
      // );
      timelineDescription = (
             <p>
               {myState[selectedSection].text}
             </p>
          );
          
      
      //console.log(timelineDescription);

      document.getElementById(style.timeline_descriptions_wrapper).innerHTML = timelineDescription.props.children;

      // this.state.description.map((event) => {
      //   if(event.id==selectedSection){
      //     event.text;
      //   }
      // })
    }
    return (
        <div className={"container"}>

          <center><h2 className="pb-6">Schedule:</h2></center>
          <div className={style.displayOnBiggerScreensOnly}>
            <br /><br /><br />
          </div>

          <div className={style.flex_parent}>
            <div className={style.input_flex_container}>

              <input className={style.input} type="radio" name="timeline-dot" data-description="1" onClick={() => {updateText(0)}}/>
              <div className={style.dot_info} data-description="1">
                { /* <span className={style.span+" "+style.year}>14.<br />20:00<br />22:00</span> */}
                <span className={style.span+" "+style.year}>8:00</span>
                <span className={style.span+" "+style.label}>Registry opens ✔️</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="2" onClick={() => updateText(1)}/>
              <div className={style.dot_info} data-description="2">
                { /* <span className={style.span+" "+style.year}>15.<br />08:00<br />10:00</span> */}
                <span className={style.span+" "+style.year}>8:30</span>
                <span className={style.span+" "+style.label}>Breakfast/Schedule presented 📝</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="3" onClick={() => updateText(2)}/>
              <div className={style.dot_info} data-description="3">
                { /* <span className={style.span+" "+style.year}>15.<br />12:00<br />12:30</span> */}
                <span className={style.span+" "+style.year}>10:00</span>
                <span className={style.span+" "+style.label}>Opening Ceremony 📢</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="4" onClick={() => updateText(3)}/>
              <div className={style.dot_info} data-description="4">
                { /* <span className={style.span+" "+style.year}>15.<br />14:00<br />16:30</span> */}
                <span className={style.span+" "+style.year}>10:30</span>
                <span className={style.span+" "+style.label}>Team Formation 👋</span>
              </div>
              
              <input className={style.input} type="radio" name="timeline-dot" data-description="5" onClick={() => updateText(4)}/>
              <div className={style.dot_info} data-description="5">
                { /* <span className={style.span+" "+style.year}>15.<br />20:00<br />20:30</span> */}
                <span className={style.span+" "+style.year}>11:30</span>
                <span className={style.span+" "+style.label}>Lunch/Hacking starts 🌮🌮</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="6" onClick={() => updateText(5)}/>
              <div className={style.dot_info} data-description="6">
                { /* <span className={style.span+" "+style.year}>15.<br />23:00<br />23:59</span> */}
                <span className={style.span+" "+style.year}>13:00</span>
                <span className={style.span+" "+style.label}>Workshops begins 🧠</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="7" onClick={() => updateText(6)}/>
              <div className={style.dot_info} data-description="7">
                { /* <span className={style.span+" "+style.year}>16.<br />08:00<br />10:00</span> */}
                <span className={style.span+" "+style.year}>15:00</span>
                <span className={style.span+" "+style.label}>Coffee break</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="8" onClick={() => updateText(7)}/>
              <div className={style.dot_info} data-description="8">
                { /* <span className={style.span+" "+style.year}>16.<br />12:00<br />12:15</span> */}
                <span className={style.span+" "+style.year}>17:00</span>
                <span className={style.span+" "+style.label}>Workshops end ❌🧠</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="9" onClick={() => updateText(8)}/>
              <div className={style.dot_info} data-description="9">
                { /* <span className={style.span+" "+style.year}>16.<br />14:00<br />16:00</span> */}
                <span className={style.span+" "+style.year}>19:00</span>
                <span className={style.span+" "+style.label}>Dinner 🍕🍽</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="10" onClick={() => updateText(9)}/>
              <div className={style.dot_info} data-description="10">
                { /* <span className={style.span+" "+style.year}>16.<br />18:00<br />20:00</span> */}
                <span className={style.span+" "+style.year}>21:00</span>
                <span className={style.span+" "+style.label}>Surprise 💥</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="11" onClick={() => updateText(10)}/>
              <div className={style.dot_info} data-description="10">
                { /* <span className={style.span+" "+style.year}>16.<br />18:00<br />20:00</span> */}
                <span className={style.span+" "+style.year}>22:30</span>
                <span className={style.span+" "+style.label}>Surprising Surprise 💥💥</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="12" onClick={() => updateText(11)}/>
              <div className={style.dot_info} data-description="10">
                { /* <span className={style.span+" "+style.year}>16.<br />18:00<br />20:00</span> */}
                <span className={style.span+" "+style.year}>23:30</span>
                <span className={style.span+" "+style.label}>Midnight Snack 🌜🍭</span>
              </div>

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
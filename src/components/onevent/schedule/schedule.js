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
          text: "Description 0"
        },
        {
          id: 1,
          text: "Description 1"
        },
        {
          id: 2,
          text: "Description 2"
        },
        {
          id: 3,
          text: "Description 3"
        },
        {
          id: 4,
          text: "Description 4"
        },
        {
          id: 5,
          text: "Description 5"
        },
        {
          id: 6,
          text: "Description 6"
        },
        {
          id: 7,
          text: "Description 7"
        },
        {
          id: 8,
          text: "Description 8"
        },
        {
          id: 9,
          text: "Description 9"
        },

      ]
    };
  }
  
  
  render() {

    
    var timelineDescription = (
      <p> 
        Some Text
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

          <center><h2>Schedule:</h2></center>
          <div className={style.displayOnBiggerScreensOnly}>
            <br /><br /><br />
          </div>

          <div className={style.flex_parent}>
            <div className={style.input_flex_container}>

              <input className={style.input} type="radio" name="timeline-dot" data-description="1" onClick={() => {updateText(0)}}/>
              <div className={style.dot_info} data-description="1">
                <span className={style.span+" "+style.year}>14.<br />20:00<br />22:00</span>
                <span className={style.span+" "+style.label}>First Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="2" onClick={() => updateText(1)}/>
              <div className={style.dot_info} data-description="2">
                <span className={style.span+" "+style.year}>15.<br />08:00<br />10:00</span>
                <span className={style.span+" "+style.label}>Second Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="3" onClick={() => updateText(2)}/>
              <div className={style.dot_info} data-description="3">
                <span className={style.span+" "+style.year}>15.<br />12:00<br />12:30</span>
                <span className={style.span+" "+style.label}>Third Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="4" onClick={() => updateText(3)}/>
              <div className={style.dot_info} data-description="4">
                <span className={style.span+" "+style.year}>15.<br />14:00<br />16:30</span>
                <span className={style.span+" "+style.label}>Forth Point</span>
              </div>
              
              <input className={style.input} type="radio" name="timeline-dot" data-description="5" onClick={() => updateText(4)}/>
              <div className={style.dot_info} data-description="5">
                <span className={style.span+" "+style.year}>15.<br />20:00<br />20:30</span>
                <span className={style.span+" "+style.label}>Fifth Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="6" onClick={() => updateText(5)}/>
              <div className={style.dot_info} data-description="6">
                <span className={style.span+" "+style.year}>15.<br />23:00<br />23:59</span>
                <span className={style.span+" "+style.label}>Sixth Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="7" onClick={() => updateText(6)}/>
              <div className={style.dot_info} data-description="7">
                <span className={style.span+" "+style.year}>16.<br />08:00<br />10:00</span>
                <span className={style.span+" "+style.label}>Seventh Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="8" onClick={() => updateText(7)}/>
              <div className={style.dot_info} data-description="8">
                <span className={style.span+" "+style.year}>16.<br />12:00<br />12:15</span>
                <span className={style.span+" "+style.label}>Eighth point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="9" onClick={() => updateText(8)}/>
              <div className={style.dot_info} data-description="9">
                <span className={style.span+" "+style.year}>16.<br />14:00<br />16:00</span>
                <span className={style.span+" "+style.label}>Ninth point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="10" onClick={() => updateText(9)}/>
              <div className={style.dot_info} data-description="10">
                <span className={style.span+" "+style.year}>16.<br />18:00<br />20:00</span>
                <span className={style.span+" "+style.label}>Tenth Point</span>
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
import React, { Component } from 'react';
import style from './schedule.css';
import Cookies from 'js-cookie';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {

    return (
        <div className={"container"}>
          <center>2020 Schedule</center>

          <h1>On-event events:</h1>

          <div className={style.flex_parent}>
            <div className={style.input_flex_container}>

              <input className={style.input} type="radio" name="timeline-dot" data-description="1"/>
              <div className={style.dot_info} data-description="1">
                <span className={style.span+" "+style.year}>14.<br />20:00<br />22:00</span>
                <span className={style.span+" "+style.label}>First Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="2"/>
              <div className={style.dot_info} data-description="2">
                <span className={style.span+" "+style.year}>15.<br />08:00<br />10:00</span>
                <span className={style.span+" "+style.label}>Second Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="3"/>
              <div className={style.dot_info} data-description="3">
                <span className={style.span+" "+style.year}>15.<br />12:00<br />12:30</span>
                <span className={style.span+" "+style.label}>Third Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="4"/>
              <div className={style.dot_info} data-description="4">
                <span className={style.span+" "+style.year}>15.<br />14:00<br />16:30</span>
                <span className={style.span+" "+style.label}>Forth Point</span>
              </div>
              
              <input className={style.input} type="radio" name="timeline-dot" data-description="5"/>
              <div className={style.dot_info} data-description="5">
                <span className={style.span+" "+style.year}>15.<br />20:00<br />20:30</span>
                <span className={style.span+" "+style.label}>Fifth Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="6"/>
              <div className={style.dot_info} data-description="6">
                <span className={style.span+" "+style.year}>15.<br />23:00<br />23:59</span>
                <span className={style.span+" "+style.label}>Sixth Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="7"/>
              <div className={style.dot_info} data-description="7">
                <span className={style.span+" "+style.year}>16.<br />08:00<br />10:00</span>
                <span className={style.span+" "+style.label}>Seventh Point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="8"/>
              <div className={style.dot_info} data-description="8">
                <span className={style.span+" "+style.year}>16.<br />12:00<br />12:15</span>
                <span className={style.span+" "+style.label}>Eighth point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="9"/>
              <div className={style.dot_info} data-description="9">
                <span className={style.span+" "+style.year}>16.<br />14:00<br />16:00</span>
                <span className={style.span+" "+style.label}>Ninth point</span>
              </div>

              <input className={style.input} type="radio" name="timeline-dot" data-description="10"/>
              <div className={style.dot_info} data-description="10">
                <span className={style.span+" "+style.year}>16.<br />18:00<br />20:00</span>
                <span className={style.span+" "+style.label}>Tenth Point</span>
              </div>

              <div id={style.timeline_descriptions_wrapper}>
                <p className={style.p} data-description="1">List of events on the 1st point / Description</p>
                <p className={style.p} data-description="2">List of events on the 2nd point / Description</p>
                <p className={style.p} data-description="3">List of events on the 3rd point / Description</p>
                <p className={style.p} data-description="4">List of events on the 4th point / Description</p>
                <p className={style.p} data-description="5">List of events on the 5th point / Description</p>
                <p className={style.p} data-description="6">List of events on the 6th point / Description</p>
                <p className={style.p} data-description="7">List of events on the 7th point / Description</p>
                <p className={style.p} data-description="8">List of events on the 8th point / Description</p>
                <p className={style.p} data-description="9">List of events on the 9th point / Description</p>
                <p className={style.p} data-description="10">List of events on the 10th point / Description</p>
              </div>
            </div>
          </div> 

        </div>
        
    );
  }
}


export default Schedule;
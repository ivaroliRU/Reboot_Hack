import React, { Component } from 'react';
import style from './onevent.css';
import Schedule from './schedule/schedule';
import Challenges from './challenges/challenges';
import Judges from './judges/judges';
import Location from './location/location';
import Events from './events/events'

class OnEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-8"}>
              <Challenges /> 
            </div>
            <div className={"col-4"}>
              <Events />
            </div>
            <Schedule />
            <Judges />
            <Location />
          </div>
        </div>
    );
  }
}


export default OnEvent;
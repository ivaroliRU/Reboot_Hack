import React, { Component } from 'react';
import style from './event.css';
import Schedule from './schedule/schedule';
import Challenges from './challenges/challenges';
import Judges from './judges/judges';
import Location from './location/location';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div className={"container"}>
            <Schedule />
            <Challenges />
            <Judges />
            <Location />
        </div>
    );
  }
}


export default Event;
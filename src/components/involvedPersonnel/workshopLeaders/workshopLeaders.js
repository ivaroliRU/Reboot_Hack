import React, { Component } from 'react';
import style from "../involvedPersonnel.css";
import Cookies from 'js-cookie';

class WorkshopLeaders extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.workshopLeaderList);
        return (
            <div>
                WorkshopLeaders
            </div>
        );
    }
}

export default WorkshopLeaders;
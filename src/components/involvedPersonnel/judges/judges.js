import React, { Component } from 'react';
import style from "../involvedPersonnel.css";
import Cookies from 'js-cookie';

class Judges extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.judgeList);
        return (
            <div>
                Judges
            </div>
        );
    }
}

export default Judges;
import React, { Component } from 'react';
import style from "../involvedPersonnel.css";
import Cookies from 'js-cookie';

class Menthors extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {

        console.log(this.props.menthorList);
        return (
            <div>
                Menthors
            </div>
        );
    }
}

export default Menthors;
import React, { Component } from 'react';
import style from "./involvedPersonnel.css";
import Cookies from 'js-cookie';


class InvolvedPersonnel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            judges: [
                {
                    name: "",
                    title: "",
                    linkedIn: "",
                    purpose: "",
                    bio: "",
                    photoURL: null
                },
            ],
            menthors: [
                {
                    name: "",
                    title: "",
                    linkedIn: "",
                    purpose: "",
                    bio: "",
                    photoURL: null
                },
            ],
            workshopLeaders: [
                {
                    name: "",
                    title: "",
                    linkedIn: "",
                    purpose: "",
                    bio: "",
                    photoURL: null
                },
            ]
        };
    }
    render() {
        return (
            <div>
                HEEEELP!!!!
            </div>
        )
    }
}
  
export default InvolvedPersonnel;
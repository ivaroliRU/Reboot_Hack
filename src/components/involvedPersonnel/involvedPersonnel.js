import React, { Component } from 'react';
import style from "./involvedPersonnel.css";
import Cookies from 'js-cookie';
import Judges from './judges/judges';
import Menthors from './menthors/menthors';
import WorkshopLeaders from './workshopLeaders/workshopLeaders';


class InvolvedPersonnel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            judges: [
                {
                    name: "Judge_1",
                    title: "Title_of_Judge_1",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Judge"
                },
                {
                    name: "Judge_2",
                    title: "Title_of_Judge_2",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Judge"
                },
                {
                    name: "Judge_3",
                    title: "Title_of_Judge_3",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Judge"
                },
                {
                    name: "Judge_4",
                    title: "title_of_Judge_4",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Judge"
                },
            ],
            menthors: [
                {
                    name: "Menthor_1",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_2",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_3",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_4",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_5",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_6",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_7",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                {
                    name: "Menthor_8",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Menthor"
                },
                
            ],
            workshopLeaders: [
                {
                    name: "W_Leader_1",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_2",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_3",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_4",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_5",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_6",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_7",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_8",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
                {
                    name: "W_Leader_9",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                    purpose: "Workshop_Leader"
                },
            ]
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Judges judgeList={this.state.judges} />
                </div>
                <div className="row">
                    <Menthors menthorList={this.state.menthors} />
                </div>
                <div className="row">
                    <WorkshopLeaders workshopLeaderList={this.state.workshopLeaders} />
                </div>
            </div>
        )
    }
}
  
export default InvolvedPersonnel;
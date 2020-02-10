import React, { Component } from 'react';
import style from "./involvedPersonnel.css";
import Cookies from 'js-cookie';
import PersonnelSection from './personnelSection/personnelSection';


class InvolvedPersonnel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            judges: [
                {
                    name: "Judge_1",
                    title: "Title_of_Judge_1",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Judge_2",
                    title: "Title_of_Judge_2",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Judge_3",
                    title: "Title_of_Judge_3",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Judge_4",
                    title: "title_of_Judge_4",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
            ],
            menthors: [
                {
                    name: "Menthor_1",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_2",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_3",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_4",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_5",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_6",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_7",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "Menthor_8",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                
            ],
            workshopLeaders: [
                {
                    name: "W_Leader_1",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_2",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_3",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_4",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_5",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_6",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_7",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_8",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
                {
                    name: "W_Leader_9",
                    title: "some_title",
                    linkedIn: "https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/",
                },
            ]
        };
    }
    render() {
        return (
            <div className={style.personnel_div+" container"}>
                <PersonnelSection sectionTitle="Judges" personnelList={this.state.judges} />
                <PersonnelSection sectionTitle="Menthors" personnelList={this.state.menthors} />
                <PersonnelSection sectionTitle="Workshop Leaders" personnelList={this.state.workshopLeaders} />
            </div>
        )
    }
}
  
export default InvolvedPersonnel;
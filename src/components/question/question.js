import React, { Component } from 'react';
import style from './question.css';
import { getTranslation, changeLanguage } from '../../translations';
var uniqid = require('uniqid');


const PANEL_HEIGHT = 500;

class Question extends Component {
    constructor(props) {
        super(props);
        this.questionId = uniqid();
        this.handleClick = this.handleClick.bind(this);
        this.question = props.question
        this.answer = props.answer
    }


    handleClick(){
        //console.log(this.questionId);
        $("#btn-"+this.questionId).toggleClass("active")
        
        var panel = $("#"+this.questionId);
        /*if (!panel.is(":hidden")) {
            panel.hide();
        } else {
            panel.show();
        }*/

        if (panel.css("max-height") != '0px') {
            // console.log(panel.css("max-height"));
            panel.css("max-height",0);
        } else {
            // console.log(panel.css("max-height"));
            
            panel.css("max-height",PANEL_HEIGHT);
        }
    }

    render() {
        this.text = getTranslation();
        const { text, answer } = this.props;
        // console.log('HALLO', this.props);

        return (
            <div>
                <button className={style.accordion} onClick={this.handleClick} id={"btn-"+this.questionId}>{text}</button>
                <div className={style.panel} id={this.questionId}>
                    <p>{answer}</p>
                </div>
            </div>
        );
    }

}


export default Question;




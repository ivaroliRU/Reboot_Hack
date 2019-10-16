import React, { Component } from 'react';
import style from './question.css';
var uniqid = require('uniqid')//import 'uniqid';

const PANEL_HEIGHT = 50;

class Question extends Component {
    constructor(props) {
        super(props);
        this.quertionId = uniqid();
        this.handleClick = this.handleClick.bind(this);
        this.question = props.question
        this.answer = props.answer
    }

    handleClick(){
        console.log(this.quertionId);
        //$("#btn-"+this.quertionId).toggleClass("active")
        
        var panel = $("#"+this.quertionId);
        /*if (!panel.is(":hidden")) {
            panel.hide();
        } else {
            panel.show();
        }*/

        if (panel.css("max-height") != '0px') {
            console.log(panel.css("max-height"));
            panel.css("max-height",0);
        } else {
            console.log(panel.css("max-height"));
            
            panel.css("max-height",PANEL_HEIGHT);
        }
    }

    render () {
        const { text, answer } = this.props;
        console.log(this.props);

        return (
            <div>
                <button className={style.accordion} onClick={this.handleClick} id={"btn-"+this.quertionId}>{this.question}</button>
                <div className={style.panel} id={this.quertionId}>
                    <p>{this.answer}</p>
                </div>
            </div>
        );
    }
}

export default Question;
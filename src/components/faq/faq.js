import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import Question from '../question/question';
// import Question from '../question/questionTest';
import style from './faq.css';

class Faq extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this);
    }

    handler() {
        changeLanguage();
        this.forceUpdate();
    }

    render() {
        this.text = getTranslation();
        return (
            <div>
                <h2 className="pl-2">{this.text.faq.title}</h2>
                {this.text.faq.question1 && (
                    <Question text={this.text.faq.question1.text} answer={this.text.faq.question1.answer} />
                )}
                {this.text.faq.question2 && (
                    <Question text={this.text.faq.question2.text} answer={this.text.faq.question2.answer} />
                )}
                {this.text.faq.question3 && (
                    <Question text={this.text.faq.question3.text} answer={this.text.faq.question3.answer} />
                )}
                {this.text.faq.question4 && (
                    <Question text={this.text.faq.question4.text} answer={this.text.faq.question4.answer} />
                )}
                {this.text.faq.question5 && (
                    <Question text={this.text.faq.question5.text} answer={this.text.faq.question5.answer} />
                )}
                {this.text.faq.question6 && (
                    <Question text={this.text.faq.question6.text} answer={this.text.faq.question6.answer} />
                )}
                {this.text.faq.question7 && (
                    <Question text={this.text.faq.question7.text} answer={this.text.faq.question7.answer} />
                )}
                {this.text.faq.question8 && (
                    <Question text={this.text.faq.question8.text} answer={this.text.faq.question8.answer} />
                )}
                {this.text.faq.question9 && (
                    <Question text={this.text.faq.question9.text} answer={this.text.faq.question9.answer} />
                )}
                {this.text.faq.question10 && (
                    <Question text={this.text.faq.question10.text} answer={this.text.faq.question10.answer} />
                )}
                {this.text.faq.question11 && (
                    <Question text={this.text.faq.question11.text} answer={this.text.faq.question11.answer} />
                )}
                {this.text.faq.question12 && (
                    <Question text={this.text.faq.question12.text} answer={this.text.faq.question12.answer} />
                )}
                {this.text.faq.question13 && (
                    <Question text={this.text.faq.question13.text} answer={this.text.faq.question13.answer} />
                )}
                {this.text.faq.question14 && (
                <Question text={this.text.faq.question14.text} answer={this.text.faq.question14.answer} />
                )}
                {this.text.faq.question15 && (
                    <Question text={this.text.faq.question15.text} answer={this.text.faq.question15.answer} />
                )}
                {this.text.faq.question16 && (
                    <Question text={this.text.faq.question16.text} answer={this.text.faq.question16.answer} />
                )}
                {this.text.faq.question17 && (
                    <Question text={this.text.faq.question17.text} answer={this.text.faq.question17.answer} />
                )}
                {this.text.faq.question18 && (
                    <Question text={this.text.faq.question18.text} answer={this.text.faq.question18.answer} />
                )}
                {this.text.faq.question19 && (
                    <Question text={this.text.faq.question19.text} answer={this.text.faq.question19.answer} />
                )}
                {this.text.faq.question20 && (
                    <Question text={this.text.faq.question20.text} answer={this.text.faq.question20.answer} />
                )}
                {this.text.faq.question21 && (
                    <Question text={this.text.faq.question21.text} answer={this.text.faq.question21.answer} />
                )}
                {this.text.faq.question22 && (
                    <Question text={this.text.faq.question22.text} answer={this.text.faq.question22.answer} />
                )}
                <h5 className="mx-auto mb-2" style={{width: 600}}>{this.text.faq.moreQuestions.text}</h5>
            </div>
        );  
    }
}

export default Faq;

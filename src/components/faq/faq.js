import React, { Component } from 'react';
import Question from '../question/question';

class Faq extends Component {
    render() {
        const { faq } = this.props.translations;
        console.log(this.props.translations);
        return (
            <div>
                <h1>{faq.title}</h1>
                {faq.question1 && (
                    <Question text={faq.question1.text} answer = {faq.question1.answer} />
                )}
            </div>
        );  
    }
}

export default faq;

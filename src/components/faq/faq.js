import React, { Component } from 'react';
import './faq.css'
import Question from './question';
// import Translate from '../translate';

class Faq extends Component {
    render() {
        const { faq } = this.props.translations;
        console.log('HALLLOOO', this.props.translations);
        console.log(faq);
        return (
            <div className="faq__total">
                <h1 className="faq__main__header">{faq.title}</h1>
                {faq.question1 && (
                    <Question text ={faq.question1.text} answer={faq.question1.answer} />
                )}
            </div>
        );
    }
}

export default Faq;
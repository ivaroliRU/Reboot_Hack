import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import './faq.css';

class Faq extends Component {
    render() {
        this.text = getTranslation();
        return (
            <div className="faq__total">
                <h1 className="faq__main__header">{this.text.faq.title}</h1>
                <div className="faq__question">
                    <p>{this.text.faq.question1.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question1.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question2.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question2.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question3.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question3.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question4.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question4.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question4.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question4.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question5.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question5.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question6.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question6.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question8.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question7.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question9.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question9.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question10.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question10.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question11.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question12.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question12.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question12.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question13.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question13.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question14.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question14.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question15.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question15.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question16.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question16.answer}} />
                </div>
                <div className="faq__question">
                    <p>{this.text.faq.question17.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: this.text.faq.question17.answer}} />
                </div>
                
            </div>
        );  
    }
}

export default Faq;
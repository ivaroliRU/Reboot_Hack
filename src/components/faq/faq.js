import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from './faq.css';

class Faq extends Component {
    render() {
        this.text = getTranslation();
        return (
            <div>
                <h3 className="display-4">{this.text.faq.title}</h3>
                <div className="card" >
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question1.text}</h6>
                        <p className="card-text" className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question1.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question2.text}</h6>
                        <p className="card-text" className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question2.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question3.text}</h6>
                        <p className="card-text" className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question3.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question4.text}</h6>
                        <p className="card-text" className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question4.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question4.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question4.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question5.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question5.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question6.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question6.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question8.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question7.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question9.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question9.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question10.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question10.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question11.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question12.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question12.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question12.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question13.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question13.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question14.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question14.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question15.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question15.answer}} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtile mb-2 text-muted">{this.text.faq.question16.text}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.text.faq.question16.answer}} />
                    </div>
                </div>
                
            </div>
        );  
    }
}

export default Faq;
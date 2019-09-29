import React, { Component } from 'react';
import {getTranslation} from '../../translations';

class About extends Component {
    render() {
        this.text = getTranslation();
        return (
            <div>
                <div className="card">
                    <div>
                        <h3>{this.text.detail.first.header}</h3>
                        <p>{this.text.detail.first.main}</p>
                    </div>
                </div>
                <div className="container">
                    <img src="/images/ht.jpg" className="img-fluid"  alt="Responsive image" width="80%"></img>
                </div>
                <div className="card">
                    <h3>{this.text.detail.second.header}</h3>
                    <p>{this.text.detail.second.main}</p>
                </div>
                <div className="card">
                    <h3>{this.text.detail.third.header}</h3>
                    <p>{this.text.detail.third.main}</p>
                </div>
                    <div className="container">
                    <img src="/images/hi-kold.jpg" width="80%"></img>
                </div>
                <div className="card">
                    <h3>{this.text.detail.fourth.header}</h3>
                    <p>{this.text.detail.fourth.main}</p>
                </div>
            </div>
        );
    }
}

export default About;
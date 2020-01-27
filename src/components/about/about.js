import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from "./about.css";

class About extends Component {
    render() {
        this.text = getTranslation();
        return (
            <div>
                <div className={"jumbotron "+style.no_padding_top}>
                    <div className={"container "+style.padding_top_20}>
                        <h3>{this.text.detail.first.header}</h3>
                        <p>{this.text.detail.first.main}</p>
                    </div>
                </div>
                <div className="container pb-md-4 pl-md-3">
                    <img src="/images/ht.jpg" width="100%"></img>
                </div>
                <div className="jumbotron">
                    <div className="container">
                        <h3>{this.text.detail.second.header}</h3>
                        <p>{this.text.detail.second.main}</p>
                    </div>
                </div>
                <div className="container pb-md-4 pl-md-4">
                    <img src="/images/hi-kold.jpg" width="100%"></img>
                </div>
                {/* Make changes here ! */}
                <div className={"jumbotron"}>
                    <div className="container">
                        <h3>{this.text.detail.third.header}</h3>
                        <p>{this.text.detail.third.main}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
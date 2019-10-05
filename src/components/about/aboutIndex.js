import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from "./about.css";

class AboutIndex extends Component {
    render() {
        this.text = getTranslation();
        return (
            <div className={style.inlineBox}>
                <div>
                    <h3>{this.text.detail.fourth.header}</h3>
                    <p>{this.text.detail.fourth.main}</p>
                </div>
            </div>
        );
    }
}
export default AboutIndex;
import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from "./about.css";
import Cookies from 'js-cookie';

class AboutIndex extends Component {
    render() {
        this.text = getTranslation();

        return (
            <div className={style.inline_box}>
                <div className={"container"}>
                    <h2 dangerouslySetInnerHTML={{__html: this.text.detail.indexFirst.header}} />
                    <p dangerouslySetInnerHTML={{__html: this.text.detail.indexFirst.main}} />
                </div>
            </div>
        );
    }
}
export default AboutIndex;
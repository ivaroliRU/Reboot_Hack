import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from "./about.css";

class AboutIndex2 extends Component {
    render() {
        this.text = getTranslation();
        return (
                <div className={style.inline_box}>
                    <div className="container">
                        <h3>{this.text.detail.indexThird.orgHeader}</h3>
                        <p>{this.text.detail.indexThird.orgText}</p>                        
                        <div className="justify-content-md-center text-center">

                            <a type="" className={"btn btn-outline-primary btn-lg mb-4 "+ style.apply_button} id="volunteer" href="https://forms.gle/vFmS2RKpDcoyXXu86" target="_blank">
                                {this.text.detail.indexThird.button}
                            </a>
                        </div>
                    </div>
                </div>
            );
    }
}

export default AboutIndex2;
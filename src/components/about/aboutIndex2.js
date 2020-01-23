import React, { Component } from 'react';
import {getTranslation} from '../../translations';
// import ParallaxScrollImage from '../parallaxScrollImage/parallaxScrollImage';
import style from "./about.css";

class AboutIndex2 extends Component {
    render() {
        this.text = getTranslation();
        return (
                <div className={style.inlineBox}>
                    <div className="container">
                        <h3>{this.text.detail.fourth.travelHeader}</h3>
                        <p>{this.text.detail.fourth.travelText}</p>                        
                        <div className="justify-content-md-center text-center">

                            <a type="" className={"btn btn-outline-primary btn-lg mb-4 "+ style.apply_button} id="volunteer" href="https://docs.google.com/forms/d/e/1FAIpQLSck8aWhP4VCoZMbn6D8DgrC5tq1vm1bmiySQ91R0ygo8Wh6ZA/viewform" target="_blank">
                                {this.text.detail.fourth.travel}
                            </a>
                        </div>
                    </div>
                </div>
            );
    }
}

export default AboutIndex2;
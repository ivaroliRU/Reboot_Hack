import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from "./about.css";
import Cookies from 'js-cookie';

class AboutIndex extends Component {
    render() {
        this.text = getTranslation();

        var buttonsSection;
        var text1_onEvent = "";
        var text2_onEvent = "";

        var dateNow = new Date();
        if(dateNow.getTime() <= (new Date('Feb 15, 2020 08:00:00').getTime())){
            buttonsSection=(
                <div className="container">
                    <h3>{this.text.detail.fourth.header}</h3>
                    <p>{this.text.detail.fourth.main}</p>

                    <div className="col text-center ">
                        <div className="justify-content-md-center text-center">
                            <a type="" className={"btn btn-outline-primary btn-lg mb-4 "+ style.apply_button} id="mentor" href="https://docs.google.com/forms/d/e/1FAIpQLSeDwdJh5K1EwK3FVCKQ2wynS0WMZwL23BLi_5cWfO6sooN4VA/viewform" target="_blank">
                                {this.text.detail.fourth.mentor}
                            </a>
                        
                            <a type="" className={"btn btn-outline-primary btn-lg mb-4 "+ style.apply_button} id="volunteer" href="https://docs.google.com/forms/d/e/1FAIpQLSc9L9di1TS6B-VRAtzE1B1y2-nsFAXLbwriOp2_uDvNGvTa7g/viewform" target="_blank">
                                {this.text.detail.fourth.volunteer}
                            </a>
                            
                        </div>
                    </div>
                </div>
            )

        }
        else{
            if(Cookies.get('language')=='is'){
                text1_onEvent = "Við óskum öllum þátttakendum Reboot Hack góðs gengis!";
                text2_onEvent = "Fylgisti með á semfélgasmiðlum fyrir nýjustu fréttir!!";
            }
            else{
                text1_onEvent = "Good luck to all the participants!";
                text2_onEvent = "Stay tuned on social media for more updates!!";
            }

            buttonsSection=(
                <div className="container">
                    <h3>{text1_onEvent}</h3>
                    <p>{text2_onEvent}</p>
                </div>
            )
        }



        return (
            <div className={style.inline_box}>
                {buttonsSection}
            </div>
        );
    }
}
export default AboutIndex;
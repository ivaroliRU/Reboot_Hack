import React, { Component } from 'react';
import style from "./countdown.css";
import Cookies from 'js-cookie';

class Countdown extends Component {

    render() {

        var daysText = "",
            hoursText = "",
            minutesText = "",
            secondsText = "";

        if(Cookies.get('language')=='is'){
            daysText = "Dagar";
            hoursText = "Klukkustundir";
            minutesText = "Mínútur";
            secondsText = "Sekúndur";
        }
        else{
            daysText = "Days";
            hoursText = "Hours";
            minutesText = "Minutes";
            secondsText = "Seconds";
        }

        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;

        let countDown = new Date('Feb 14, 2020 08:00:00').getTime();
        let x = setInterval(
            function() {
                let now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById('Days').innerText = (distance / (day) >= 10 ? null : "0")+Math.floor(distance / (day));
                document.getElementById('Hours').innerText = ((distance % (day)) / (hour) >= 10 ? null : "0") +Math.floor((distance % (day)) / (hour));
                document.getElementById('Minutes').innerText = ((distance % (hour)) / (minute) >= 10 ? null : "0")+Math.floor((distance % (hour)) / (minute));
                document.getElementById('Seconds').innerText = ((distance % (minute)) / second >= 10 ? null : "0")+Math.floor((distance % (minute)) / second);

                //Date reached => do not display this
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById('Countdown').style.display = "none";
                }
            }, second);

        return (
            <div 
                id="Countdown"
                className={style.countdownDiv+" container row"}>
                <div className={style.dispalyContents}>
                    <div className={style.countdownSection+" col-lg-3 col-6 center-block text-center"}><b><span id="Days" className={style.numberStyle}>--</span></b><p className={style.bottomText}>{daysText}</p></div>
                    <div className={style.countdownSection+" col-lg-3 col-6 center-block text-center"}><b><span id="Hours" className={style.numberStyle}>--</span></b><p className={style.bottomText}>{hoursText}</p></div>
                    <div className={style.countdownSection+" col-lg-3 col-6 center-block text-center"}><b><span id="Minutes" className={style.numberStyle}>--</span></b><p className={style.bottomText}>{minutesText}</p></div>
                    <div className={style.countdownSection+" col-lg-3 col-6 center-block text-center"}><b><span id="Seconds" className={style.numberStyle}>--</span></b><p className={style.bottomText}>{secondsText}</p></div>
                </div>
            </div>
        );
    };
}
    
  
export default Countdown;
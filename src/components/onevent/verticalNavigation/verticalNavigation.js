import React, { Component } from 'react';
import style from './verticalNavigation.css';
import Cookies from 'js-cookie';

class VerticalNavigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
        return (
            <div className={style.vertical_navigation_div}>
                <div id="Section1" className={style.diagonal_text}>
                    <a className={style.a_modified} href="/event#Challenges_Section">Challenges</a><br />
                </div>

                {/* <div id="Section1_Challenge1" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#Origo">&nbsp;Origo</a><br />
                </div>
                <div id="Section1_Challenge2" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#Vörður">&nbsp;Vörður</a><br />
                </div>
                <div id="Section1_Challenge3" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#Auður">&nbsp;Auður</a><br />
                </div>
                <div id="Section1_Challenge4" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#Byggðastofnum">&nbsp;Byggðastofnum</a><br />
                </div>
                <div id="Section1_Challenge5" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#AwareGo">&nbsp;AwareGo</a><br />
                </div>
                <div id="Section1_Challenge6" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#KPMG">&nbsp;KPMG</a><br />
                </div>
                <div id="Section1_Challenge7" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#LHÍ">&nbsp;LHÍ</a><br />
                </div>
                <div id="Section1_Challenge8" className={style.diagonal_text+" "+style.company_name}>
                    <a className={style.a_modified+" "+style.company_name_color} href="/event#Ölgerðin">&nbsp;Ölgerðin</a><br />
                </div> */}

                <div id="Section2" className={style.diagonal_text}>
                    <a className={style.a_modified} href="/event#Events_Section">Mini events</a>
                </div>
                <div id="Section3" className={style.diagonal_text}>
                    <a className={style.a_modified} href="/event#Schedule_Section">Schedule</a>
                </div>
                <div id="Section4" className={style.diagonal_text}>
                    <a className={style.a_modified} href="/event#Instagram_Section">Instagram</a>
                </div>
                <div id="Section5" className={style.diagonal_text}>
                    <a className={style.a_modified} href="/event#Location_Section">Location</a>
                </div>
            </div>
    );
  }
}


export default VerticalNavigation;
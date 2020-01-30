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
                <div id="Section1">
                   <p className={style.diagonal_text}>Challenges</p>
                   {/* <p className={style.diagonal_text}>&nbsp;Origo</p>
                   <p className={style.diagonal_text}>&nbsp;Vörður</p>
                   <p className={style.diagonal_text}>&nbsp;Auður</p>
                   <p className={style.diagonal_text}>&nbsp;Byggðastofnum</p>
                   <p className={style.diagonal_text}>&nbsp;AwareGo</p>
                   <p className={style.diagonal_text}>&nbsp;KPMG</p>
                   <p className={style.diagonal_text}>&nbsp;LHÍ</p>
                   <p className={style.diagonal_text}>&nbsp;Ölgerðin</p> */}
                </div>
                <div id="Section2">
                    <p className={style.diagonal_text}>Mini events</p>
                </div>
                <div id="Section3">
                    <p className={style.diagonal_text}>Schedule</p>
                </div>
                <div id="Section4">
                    <p className={style.diagonal_text}>Instagram</p>
                </div>
                <div id="Section5">
                    <p className={style.diagonal_text}>Location</p>
                </div>
            </div>
    );
  }
}


export default VerticalNavigation;
import React, { Component } from 'react';
import style from "./navbar.css"
import {getTranslation} from '../../translations';
import Cookies from 'js-cookie';

class Navbar extends Component {
  render() {
    this.text = getTranslation();

    var challengesText = "",
        mini_eventsText = "",
        scheduleText = "",
        instagramText = "",
        locationText = "",
        personnel = "";

    if(Cookies.get('language')=='is'){
      challengesText = "Áskoranir";
      mini_eventsText = "Kynningarviðburðir";
      scheduleText = "Dagskrá";
      instagramText = "Instagram";
      locationText = "Staðsetning";
      personnel = "Fólk";
    }
    else{
      challengesText = "Challenges";
      mini_eventsText = "Mini events";
      scheduleText = "Schedule";
      instagramText = "Instagram";
      locationText = "Location";
      personnel = "People";
    }
    
    var dateNow = new Date();
    var section_navbar_2020;
    var section_registation_2020;

    if (dateNow.getTime() <= (new Date('Feb 15, 2020 08:00:00').getTime())){
      section_registation_2020= (
        <li className={style.reboot_navbar_item + " nav-item"}>
            <a href="./#RegisterSection" className="nav-link">{this.text.navbar.register}</a>
        </li>
      )
      section_navbar_2020 = (
        <div className={style.dropdown_menu+" dropdown-menu pull-right"} aria-labelledby="2020">
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Challenges_Section">{challengesText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Events_Section">{mini_eventsText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Schedule_Section">{scheduleText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Instagram_Section">{instagramText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Location_Section">{locationText}</a>
        </div>
      )
    }
    else{
      section_registation_2020= (
        null
      )
      section_navbar_2020 = (
        <div className={style.dropdown_menu+" dropdown-menu pull-right"} aria-labelledby="2020">
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Instagram_Section">{instagramText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Schedule_Section">{scheduleText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Challenges_Section">{challengesText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Events_Section">{mini_eventsText}</a>
          <a className={"dropdown-item "+style.dropdown_item} href="/event#Location_Section">{locationText}</a>
        </div>
      )
    }
    

    return (
      <nav className={style.reboot_navbar + " navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="d-flex flex-grow-1">
            <span className={style.nothing+" w-100 d-lg-none d-block"}></span>
            <a className={style.navbar_brand+" navbar-brand"} href="/">
                <img className={style.first_logo} src="/images/Logo.svg" alt="The logo for the website" height="30px"></img>
                <img className={style.second_logo} src="/images/reboothack_default_navbar_noBackkground.png" height="50px"></img>
            </a>
            <div className={style.icon_center+" w-100 text-right"}>
                <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
                
                 {/* <li className={style.reboot_navbar_item + " nav-item"}>
                  <div className={style.group_button+" btn-group"}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.text.navbar.event}</a>
                    <div className={style.dropdown_menu+" dropdown-menu pull-right"} aria-labelledby="navbarDropdown2">
                      <a className={style.dropdown_item+" dropdown-item"} href="/event">{this.text.navbar.event}</a>
                      <a className={style.dropdown_item+" dropdown-item"} href="/event">{this.text.navbar.extra}</a>
                      <a className={style.dropdown_item+" dropdown-item"} href="/event">{this.text.navbar.travel}</a>
                    </div>
                  </div>
                </li>  */}
                
                {/* Registration */}
                {section_registation_2020}
                
                {/* 2020 Event page */}
                <li className={style.reboot_navbar_item + " nav-item"}>
                    {/* <a href="/event" className="nav-link">2020</a> */}<div className={style.group_button+" btn-group"}>
                  <a className="nav-link dropdown-toggle" href="#" id="2020" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">2020</a>
                      {section_navbar_2020}
                  </div>
                </li>
              

                {/* us */}
                <li className={style.reboot_navbar_item + " nav-item"}>
                <div className={style.group_button+" btn-group"}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.text.navbar.about}</a>
                  <div className={style.dropdown_menu+" dropdown-menu pull-right"} aria-labelledby="navbarDropdown">
                    <a className={"dropdown-item "+style.dropdown_item} href="/about">{this.text.navbar.reboot}</a>
                    <a className={"dropdown-item "+style.dropdown_item} href="/board">{this.text.navbar.board}</a>
                    <a className={"dropdown-item "+style.dropdown_item} href="/team">{this.text.navbar.team_members}</a>
                    <a className={"dropdown-item "+style.dropdown_item} href="/involvedPersonnel"> {personnel}</a>
                  </div>
                </div>
                </li>
                
                {/* Sponsors */}
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="/sponsors" className="nav-link">{this.text.navbar.sponsors}</a>
                </li>

                {/* Frequently Asked Questions */}
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="/faq" className="nav-link">{this.text.navbar.faq}</a>
                </li>

                {/* Language Settings */}
                <li className={style.reboot_navbar_language + " nav-item"}>
                    <a href="#" className="nav-link" onClick = {this.props.handler} dangerouslySetInnerHTML={{__html:this.text.navbar.trans_btn}}></a>
                </li>
            </ul>
        </div>
      </nav>
    );
}
}

export default Navbar;
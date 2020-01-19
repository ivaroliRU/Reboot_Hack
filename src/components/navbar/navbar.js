import React, { Component } from 'react';
import style from "./navbar.css"
import {getTranslation} from '../../translations';

class Navbar extends Component {
  render() {
    this.text = getTranslation();
    return (
      <nav className={style.reboot_navbar + " navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="d-flex flex-grow-1">
            <span className={style.nothing+" w-100 d-lg-none d-block"}></span>
            <a className={style.navbarBrand+" navbar-brand"} href="/">
                <img className={style.firstLogo} src="/images/Logo.svg" alt="The logo for the website" height="30px"></img>
                <img className={style.secondLogo} src="/images/reboothack_default_navbar_noBackkground.png" height="50px"></img>
            </a>
            <div className={style.iconCenter+" w-100 text-right"}>
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
                
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="./#RegisterSection" className="nav-link">Register</a>
                </li>
                {/* 2020 Event page */}
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="/event" className="nav-link">2020</a>
                </li>
              

                {/* us */}
                <li className={style.reboot_navbar_item + " nav-item"}>
                <div className={style.group_button+" btn-group"}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.text.navbar.about}</a>
                  <div className={style.dropdown_menu+" dropdown-menu pull-right"} aria-labelledby="navbarDropdown">
                    <a className={style.dropdown_item+" dropdown-item"} href="/about">{this.text.navbar.reboot}</a>
                    <a className={style.dropdown_item+" dropdown-item"} href="/board">{this.text.navbar.board}</a>
                    <a className={style.dropdown_item+" dropdown-item"} href="/team">{this.text.navbar.team_members}</a>
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
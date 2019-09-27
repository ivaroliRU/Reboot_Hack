import React, { Component } from 'react';
import style from "./navbar.css"

class Navbar extends Component {
  render() {
    return (
      <nav className={style.reboot_navbar + " navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand" href="#">
                <img src="/images/reboothack_small.png" alt="The logo for the website" height="50px"></img>
                <img src="/images/reboothack_default_navbar.png" height="50px"></img>
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="#" className="nav-link">FaQ</a>
                </li>
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className={style.reboot_navbar_item + " nav-item"}>
                <div className="btn-group">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Team</a>
                  <div className="dropdown-menu pull-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Board Of Advisors</a>
                    <a className="dropdown-item" href="#">Team Members</a>
                  </div>
                </div>
                </li>
                <li className={style.reboot_navbar_item + " nav-item"}>
                    <a href="#" className="nav-link">Sponsors</a>
                </li>
                <li className={style.reboot_navbar_language + " nav-item"}>
                    <a href="#" className="nav-link">IS <img src="/images/icelandic.png" height="15px"></img></a>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default Navbar;
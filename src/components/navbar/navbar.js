import React, { Component } from 'react';
import style from "./navbar.css"

class Navbar extends Component {
  render() {
    return (
      <nav className={style.reboot_navbar + " navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block"></span>
            <a class="navbar-brand" href="#">
                <img src="/images/reboothack_small.png" alt="The logo for the website" height="50px"></img>
                <img src="/images/reboothack_default_navbar.png" height="50px"></img>
            </a>
            <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
            <ul class="navbar-nav ml-auto flex-nowrap">
                <li class="nav-item">
                    <a href="#" class="nav-link">FaQ</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu pull-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Sponsors</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">TUNGUMAAAL!!</a>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default Navbar;

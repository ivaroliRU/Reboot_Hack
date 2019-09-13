import React, { Component } from 'react';
import './navbar.css';

const baseurl = process.env.REACT_APP_SUB_URL;

class Navbar extends Component {
  render() {
    //const { translations } = this.props;

    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" height="30" alt=""></img>
        </a>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

const baseurl = process.env.REACT_APP_SUB_URL;

class Navbar extends Component {
  render() {
    const { translations } = this.props;
    
    return (
      <div className="navbar">
      </div>
    );
  }
}

export default Translate(Navbar);

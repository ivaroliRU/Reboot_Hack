import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../components/navbar';
import style from "./index.css"
import Footer from '../components/Footer/Footer';
import Subscribe from '../components/subscribe/subscribe';
import Teams from '../components/Teams/Teams';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Navbar />
        <Subscribe />
        {/* <Teams /> */}
        <i class="fa fa-user-happy"></i>
        <p>Some more content - soon</p>
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
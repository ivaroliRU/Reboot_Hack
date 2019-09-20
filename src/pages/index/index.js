import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import style from "./index.css"

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Navbar />
        <h1>HALLO!!!</h1>

      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
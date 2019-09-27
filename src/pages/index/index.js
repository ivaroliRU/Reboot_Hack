import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import {changeLanguage} from '../../translations';
import style from "./index.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  handler() {
    console.log("asdf");
    changeLanguage();
    this.forceUpdate();
  }
  
  render() {
    return (
      <div className={style.App}>
        <Navbar handler = {this.handler}/>
        <h1>HALLO!!!</h1>

      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
import React, { Component } from 'react';
import { render } from 'react-dom';
import Footer from '../components/footer';
import style from "./index.css"

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
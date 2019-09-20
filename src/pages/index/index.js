import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import style from "./index.css"
import Faq from '../../components/faq/faq';
// import Translate from '../../components/translate/translate';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Navbar />
        <h1>EG ER FORSIDA!</h1>
        <Faq />
        
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
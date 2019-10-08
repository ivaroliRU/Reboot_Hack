import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import Opener from '../../components/opener';
import Footer from '../../components/Footer/footer';
import SubscriptionButton from '../../components/subscriptionButton';
import ParallaxScrollImage from '../../components/parallaxScrollImage';
import {changeLanguage} from '../../translations';
import style from "./index.css"

import Teams from '../../components/Teams/Teams';
import BoardOfAdvisors from '../../components/BoardOfAdvisors/BoardOfAdvisors';

class App extends Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }

  handler() {
    changeLanguage();
    this.forceUpdate();
  }
  
  render() {
    return (
      <div className={style.App}>
        <Navbar handler = {this.handler}/>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Teams/>
        {/* <BoardOfAdvisors/> */}
        

        <Opener />
        <div className={style.header}>
          <h1 className={style.text_header}>Subsrcibe</h1>
          <p style={{marginBottom:30}}>Subscribe to our newsletter</p>
          <SubscriptionButton />
        </div>
        <ParallaxScrollImage img={"/images/Reykjavik.jpg"} height={300}/>
        <div className={style.header} style={{marginBottom:500}}>
          <h1 className={style.text_header}>Sponsors</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
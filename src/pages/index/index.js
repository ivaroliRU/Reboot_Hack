import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import Opener from '../../components/opener';
import SubscriptionButton from '../../components/subscriptionButton';
import ParallaxScrollImage from '../../components/parallaxScrollImage';
import {changeLanguage} from '../../translations';
import AboutIndex from '../../components/about/aboutIndex';
import style from "./index.css"

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
        <Opener />
        <div className={style.header}>
          <h1 className={style.text_header}>Subsrcibe</h1>
          <p style={{marginBottom:30}}>Subscribe to our newsletter</p>
          <SubscriptionButton />
        </div>
        <ParallaxScrollImage img={"/images/Reykjavik.jpg"} height={300}/>
        <AboutIndex handler = {this.handler}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
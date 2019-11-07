import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import Opener from '../../components/opener';
import Footer from '../../components/footer';
// import SubscriptionButton from '../../components/subscriptionButton';
import ApplyButton from '../../components/applyButton/applyButton';
import ParallaxScrollImage from '../../components/parallaxScrollImage';
import {changeLanguage, getTranslation} from '../../translations';
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
    this.text = getTranslation();
    return (
      <div className={style.App}>
        <Navbar handler = {this.handler}/>
        <Opener />
        <div className="container">
          <div className={style.header}>
            <h2 className={style.text_header}>{this.text.register.Heading}</h2>
            <ApplyButton handler={this.handler}/>
          </div>
        </div>
        <ParallaxScrollImage img={"/images/Reykjavik.jpg"} height={500}/>
        <AboutIndex handler = {this.handler}/>
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
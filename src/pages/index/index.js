import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import Opener from '../../components/opener';
import Footer from '../../components/Footer/footer';
import SubscriptionButton from '../../components/subscriptionButton';
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
        <div className={style.header}>
          <h1 className={style.text_header}>{this.text.indexText.Heading}</h1>
          <p style={{marginBottom:30}}>{this.text.indexText.subHeading}</p>
          <SubscriptionButton handler={this.handler}/>
        </div>
        <ParallaxScrollImage img={"/images/Reykjavik.jpg"} height={300}/>
        <AboutIndex handler = {this.handler}/>
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
import React, { Component } from 'react';
import { render } from 'react-dom';
import { isIOS } from 'react-device-detect';

import Navbar from '../../components/navbar';
import Opener from '../../components/opener';
import Footer from '../../components/footer';
// import SubscriptionButton from '../../components/subscriptionButton';
import ApplyButton from '../../components/applyButton/applyButton';
import ParallaxScrollImage from '../../components/parallaxScrollImage';
import {changeLanguage, getTranslation} from '../../translations';
import AboutIndex from '../../components/about/aboutIndex';
import AboutIndex2 from '../../components/about/aboutIndex2';
import style from "./index.css";



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
    // Renders for ios Devices
    let onIOS = false;
    if (isIOS) {
      onIOS=true;
    }
    else{
      onIOS=false;
    }

    return (
      <div className={style.App}>
        <Navbar handler = {this.handler}/>
        <Opener isThisDevideIOS={onIOS}/>
        <div className="container">
          <div id="RegisterSection" className={style.header}>
            <h2 className={style.text_header}>{this.text.register.Heading}</h2>
            <ApplyButton handler={this.handler}/>
          </div>
        </div>
        <ParallaxScrollImage isThisDevideIOS={onIOS} imgDesktop={"/images/about/RebootTeam+Volunteers.jpg"} imgMobile={"/images/about/RebootTeam+Volunteers.jpg"} height={700}/>
        <AboutIndex handler = {this.handler}/>
        <ParallaxScrollImage isThisDevideIOS={onIOS} imgDesktop={"/images/post-event/BG_reboot_hack.jpg"} imgMobile={"/images/post-event/BG_reboot_hack.jpg"} height={700}/>
        <AboutIndex2 handler = {this.handler} />
        <Footer />
      </div>
    ); 
  
  }
}

render(<App/>, document.getElementById('root'));
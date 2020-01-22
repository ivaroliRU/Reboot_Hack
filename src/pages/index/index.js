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
import AboutIndex2 from '../../components/about/aboutIndex2';
import style from "./index.css"
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
    this.text = getTranslation();
    return (
      <div className={style.App}>
        <Navbar handler = {this.handler}/>
        {/* <BoardOfAdvisors/> */}
        <Opener />
        <div className="container">
          <div id="RegisterSection" className={style.header}>
            <h2 className={style.text_header}>{this.text.register.Heading}</h2>
            <ApplyButton handler={this.handler}/>
          </div>
        </div>
        <ParallaxScrollImage imgDesktop={"/images/Index_second_photo_desktop.jpg"} imgMobile={"/images/Index_second_photo_mobile.jpg"} height={700}/>
        <AboutIndex handler = {this.handler}/>
        <ParallaxScrollImage imgDesktop={"/images/Index_third_photo_desktop.jpg"} imgMobile={"/images/Index_third_photo_mobile.jpg"} height={700}/>   
        <AboutIndex2 handler = {this.handler} />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
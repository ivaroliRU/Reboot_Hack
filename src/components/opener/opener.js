import React, { Component } from 'react';
import GlowingLogo from '../glowingLogo';
import ParallaxScrollImage from '../parallaxScrollImage';
import SubscriptionButton from '../subscriptionButton';
import style from './opener.css';
import CountdownComponent from './countdown/countdown';


class Opener extends Component {
    render () {
        return (
            <div>
                <div>
                    <ParallaxScrollImage imgDesktop={"/images/Index_first_photo_desktop-min.jpg"} imgMobile={"/images/Index_first_photo_mobile-min.jpg"} height={700}/>   
                </div>
                <div className={style.components}>
                    <img className="img-fluid" src="/images/reboothack_default_navbar_noBackkground.png" width={950}></img>
                    <h1 className={style.text2}>14.02 &bull; 16.02</h1>
                    <CountdownComponent />
                </div>
                
            </div>
        );
    }
}

export default Opener;
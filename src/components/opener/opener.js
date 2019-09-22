import React, { Component } from 'react';
import GlowingLogo from '../glowingLogo';
import ParallaxScrollImage from '../parallaxScrollImage';
import SubscriptionButton from '../subscriptionButton';
import style from './opener.css';


class Opener extends Component {
    render () {
        return (
            <div>
                <div>
                    <ParallaxScrollImage img={"/images/hack_image_2.jpg"} height={500}/>   
                </div>
                <div className={style.components}>
                    <img src="/images/reboothack_default_navbar_noBackkground.png" width={950}></img>
                    <h1 className={style.text}>10.01 &bull; 11.01</h1>
                </div>
            </div>
        );
    }
}

export default Opener;
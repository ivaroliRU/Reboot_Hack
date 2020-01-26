import React, { Component } from 'react';
import style from "./parallaxScrollImage.css"

class ParallaxScrollingImage extends Component {
    constructor(props) {
        super(props);
        
        /* Function to see if we have HD screen
        function is_high_res_screen() {
            return window.devicePixelRatio > 1;
        */

        if(screen.width > 600){
            // console.log("BIG")
            this.backgorundImage1Style = {
                height: props.height,
                backgroundImage: 'url(' + props.imgDesktop + ')',
            };
        }
        else{
            // console.log("SMALL");
            this.backgorundImage1Style = {
                height: props.height,
                backgroundImage: 'url(' + props.imgMobile + ')',
            };
        }

    }

    render() {
        return (
            <div className={style.container+(this.props.isThisDevideIOS==true ? " "+style.iosDisplay : "")} style={this.backgorundImage1Style}></div>
        );
    }
}

export default ParallaxScrollingImage;
import React, { Component } from 'react';
import style from "./parallaxScrollImage.css"

class ParallaxScrollingImage extends Component {
    constructor(props) {
        super(props);
        
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
            <div className={style.container} style={this.backgorundImage1Style}></div>
        );
    }
}

export default ParallaxScrollingImage;
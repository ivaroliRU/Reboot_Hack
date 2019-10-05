import React, { Component } from 'react';
import style from "./parallaxScrollImage.css"

class ParallaxScrollingImage extends Component {
    constructor(props) {
        super(props);
        this.style = {
            height: props.height,
            backgroundImage: 'url(' + props.img + ')'
        };
    }

    render() {
        return (
            <div className={style.container} style={this.style}></div>
        );
    }
}

export default ParallaxScrollingImage;
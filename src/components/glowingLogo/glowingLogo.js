import React, { Component } from 'react';
import style from './glowingLogo.css';


class GlowingLogo extends Component {
    render () {
        return (
            <div>
                <img className={style.logo} src='/images/Logo.svg' height={250}></img>
            </div>
        );
    }
}

export default GlowingLogo;
import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import About from '../../components/about/about';
import { changeLanguage } from '../../translations';
import Footer from '../../components/footer';
import style from "./about.css"

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
        return (
        <div className={style.App}>
            <Navbar handler = {this.handler}/> 
            <About handler = {this.handler} />
            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
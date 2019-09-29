import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import About from '../../components/about/about';
import { changeLanguage } from '../../translations';
// import style from "./index.css"

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
        <div>
            <Navbar handler = {this.handler}/> 
            <About handler = {this.handler} />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
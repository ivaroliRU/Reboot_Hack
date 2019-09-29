import React, { Component } from 'react';
import { render } from 'react-dom';
import Faq from '../../components/faq/faq';
import Navbar from '../../components/navbar';
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
            <Faq handler = {this.handler}/>
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
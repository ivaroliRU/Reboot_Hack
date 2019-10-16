import React, { Component } from 'react';
import { render } from 'react-dom';
import Faq from '../../components/faq/faq';
import Navbar from '../../components/navbar';
import { changeLanguage } from '../../translations';
import Footer from '../../components/footer';
import style from "./faq.css"

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
            <Faq handler = {this.handler}/>
            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
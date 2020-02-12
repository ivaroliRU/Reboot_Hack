import React, { Component } from 'react';
import { render } from 'react-dom';
import { changeLanguage } from '../../translations';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer/footer';
import InvolvedPersonnel from '../../components/involvedPersonnel/involvedPersonnel';
import style from './involvedPersonnel.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
    }

    handler() {
        changeLanguage();
        this.forceUpdate();
    }
    render () {
        return (
            <div className={style.App}>
                <Navbar handler = {this.handler} />
                <InvolvedPersonnel handler = {this.handler} />
                <Footer handler = {this.handler} />
            </div>
        );
    }
}
render(<App/>, document.getElementById('root'));
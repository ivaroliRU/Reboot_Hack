import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import { changeLanguage, getTranslation } from '../../translations';
// import style from './error.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this);
    }

    handler() {
        changeLanguage();
        this.forceUpdate();
    }

    render () {
        this.text = getTranslation();

        return (
            <p>HALLO</p>
        );
    }
}
render(<App/>, document.getElementById('root'));
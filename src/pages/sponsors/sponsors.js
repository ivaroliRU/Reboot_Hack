import React, { Component } from 'react';
import { render } from 'react-dom';
import { changeLanguage } from '../../translations';
// import Navbar from '../../components/navbar';
// import { changeLanguage, getTranslation } from '../../translations';
// import style from './error.css'

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
            <div>
                <p>HALLO</p>
            </div>
        );
    }
}
render(<App/>, document.getElementById('root'));
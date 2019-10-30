import React, { Component } from 'react';
import { render } from 'react-dom';
import { changeLanguage, getTranslation } from '../../translations';
import style from './error.css';

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
        this.text = getTranslation();
        return (
            <div className="d-flex justify-content-center align-items-center" id="error">
                <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
                <div className="inline-block align-middle">
                    <h2 className="font-weight-normal lead" id="desc">{this.text.errorPage.text}</h2>
                </div>    
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
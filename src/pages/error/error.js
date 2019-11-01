import React, { Component } from 'react';
import { render } from 'react-dom';
// import Navbar from '../../components/navbar';
import { changeLanguage, getTranslation } from '../../translations';
import style from './error.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this);
    }

    handler() {
        changeLanguage();
        this.forceUpdate();
    }

    render() {
        this.text = getTranslation();
        return (
            <div className={style.notFound}>
                <div className={style.notfound}>
                    <div className="d-inline p-2">
                        <img src="/images/emoji.png"></img>
                    </div>
                    <div className="d-inline p-2">
                        <h1>404</h1>
                    </div>
                        <h2>{this.text.errorPage.text1}</h2>
                        <p>{this.text.errorPage.text2}</p>
                    <a href="/">{this.text.errorPage.text3}</a>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
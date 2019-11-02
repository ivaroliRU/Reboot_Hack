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
                <div className={style.notfound + "d-flex flex-row p-3"}>
                    <div className="text-center">
                        <img className="mx-auto" src="/images/emoji.png"></img>
                    </div>
                    <div className="text-center d-inline p-2">
                        <h1 className="">404</h1>
                        <h2 className="">{this.text.errorPage.text1}</h2>
                        <p className="text-center">{this.text.errorPage.text2}</p>
                        <a className="" href="/" >{this.text.errorPage.text3}</a>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
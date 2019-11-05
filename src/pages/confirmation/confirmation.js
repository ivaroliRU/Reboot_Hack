import React, { Component } from 'react';
import { render } from 'react-dom';
// import Navbar from '../../components/navbar';
import { changeLanguage, getTranslation } from '../../translations';
import style from './confirmation.css'

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
                        <img className="img-fluid" src="/images/reboothack_default_transparent_cropped.png" width={950}></img>
                    </div>
                    <div className="text-center d-inline p-2">
                        <h1 className="">{this.text.confirmation.Heading}</h1>
                        <h2 className="">{this.text.confirmation.subHeading}</h2>
                        <p className="text-center">{this.text.confirmation.info}</p>
                        <div className="homepage">
                            <a className="" href="/" >{this.text.confirmation.homepage}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
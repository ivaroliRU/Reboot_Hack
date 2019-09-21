import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import Faq from '../../components/faq/faq';
// import style from "./index.css"

class App extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <h2>Frequently asked Questions!</h2> 
            <Faq />
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
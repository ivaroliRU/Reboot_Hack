import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import { changeLanguage } from '../../translations';
import Footer from '../../components/footer';
import BoardOfAdvisors from '../../components/boardOfAdvisors/boardOfAdvisors';
import style from "./board.css"

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
            <BoardOfAdvisors handler = {this.handler} />
            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
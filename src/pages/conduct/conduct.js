import React, { Component } from 'react';
import { render } from 'react-dom';
import { changeLanguage } from '../../translations';
import Navbar from '../../components/navbar';
import Conduct from '../../components/conduct/conduct';
import Footer from '../../components/footer';
//import style from './about.css'



class App extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
    }

    /*
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    */
    handler() {
        changeLanguage();
        this.forceUpdate();
    }
    

    render() {
        // const { pageNumber, numPages } = this.state;
        return (
        <div>    
            <Navbar handler = {this.handler}/>       
            <Conduct />
            <p>SICK NICE</p>
            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
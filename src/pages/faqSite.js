import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../components/navbar/navbar';
import faq from '../components/faq/faq';

class App extends Component {
    render() {
        return (
            <div>
            <Navbar />
                <p>Herna er eitthvad</p>
            </div>
        );  
    }
}

render(<App/>, document.getElementById('root'));
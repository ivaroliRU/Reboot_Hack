import React, { Component } from 'react';
import { render } from 'react-dom';
import { changeLanguage } from '../../translations';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../components/about/about.css';

// import style2 from '../../components/conduct/conduct.css';



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
        // const { pageNumber, numPages } = this.state;
        return (
        <div className={style.App}>    
            <Navbar handler = {this.handler}/>  
            <div className="container pl-4">
                <h3 className="mx-auto pl-4 pt-4">Link for iOS workshop</h3>
                <a className="pl-4" href="https://drive.google.com/drive/u/4/folders/1TkXAmDu6zj7mNgZmmz7lalLPhwVGDEcB" target="_blank">Push it !</a>

                <div className="container pb-4 pt-7">

                    <h5>Make sure to check out our workshops !!</h5>
                    <img className="text-center" src="./images/workshop.png"></img>
                </div>


            </div>
            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
import About from '../../components/about/about';
import { changeLanguage } from '../../translations';
import Footer from '../../components/footer';
import style from './about.css'


// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import MapContainer from '../../components/map/map';



class App extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
    }

    handler() {
        changeLanguage();
        this.forceUpdate();
    }
    
    //const einar = () =>

    /*
    const MyMapComponent = (props) =>
    (<GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>)
    */
    
    

    render() {
        return (
        <div className={style.App}>    
            <Navbar handler = {this.handler}/> 

            {/*<MyMapComponent isMarkerShown />   */}         

            <About handler = {this.handler} />
            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
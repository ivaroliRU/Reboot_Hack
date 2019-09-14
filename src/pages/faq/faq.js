import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
// import style from "./index.css"

class App extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <h2>Frequently asked Questions!</h2> 
            <p>Hvað er hackathon?</p>
            <p>Hackathon snýst ekki um að “hakka” á þann hátt sem við þekkjum heldur um að skapa. Hægt er að hugsa um hackathon sem uppfinningamaraþon þar sem þátttakendur fá rými til að læra, byggja og skapa. Nemendur keppa saman í hópum, að hámarki 5 manns í hóp og vinna í 24 tíma að þróa hugmynd eða tæknilausn algjörlega frá grunni. Afurðin getur verið í formi vefsíðu, smáforrits, smátækis eða hvernig tækni sem er, ímyndunaraflið fær að ráða ríkjum ásamt tiltækum hjálpartólum</p>
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
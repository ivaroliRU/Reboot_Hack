import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/navbar';
// import style from "./index.css"

class App extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <h2>Reboot Hack!</h2> 
            <p>Reboot Hack var stofnað maí 2018 af þremur nemendum í tölvunarfræði við Háskóla Íslands. Reboot Hack var haldið í fyrsta sinn 2. og 3.febrúar 2019 Í Háskóla Íslands en þar tóku 60 háskólanemendur frá 5 háskólum þátt.
                Nafnið Reboot Hack vísar í það að byrja upp á nýtt. Reboot Hack vill hvetja háskólanemendur til að hugsa upp á nýtt um ráðandi tæknihugmyndir út frá síbreytilegum þörfum samfélagsins. Að „byrja upp á nýtt“ á einnig við um hvernig nemendur geta endurhugsað hvernig þeir nýta þá þekkingu sem þeir hafa þegar öðlast ásamt því að samtvinna hana við þekkingu teymisfélaga sinna og mentora viðburðarins.
                Verkefnastjórn Reboot Hack 2019-2020 samastendur af 17 háskólanemendum úr Háskóla Íslands, Háskólanum í Reykjavík og Listaháskóla Íslands. Verkefnastjórnina leiðir Kristjana Björk Barðdal framkvæmdastjóri hakkaþonsins.
            </p>
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
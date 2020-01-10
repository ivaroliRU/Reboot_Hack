import React, { Component } from 'react';
import {getTranslation} from '../../translations';

// import SponsorRow from './components/sponsorRow';
// import SponsorDetail from './components/sponsorDetail';
import SponsorImages from './components/sponsorImages';
import style from './sponsors.css';
import Cookies from 'js-cookie';

class Sponsors extends Component {

    /* add sponsor images and links */
    /* 
    id = 0 re:start
    id = 1 re:load
    if = 2 re:boot
    */
    constructor(props) {
        super(props);
        this.state = {
            sponsors: [
                {
                    id: 0,
                    nameEn: 'Re:boot',
                    nameIs: 'Re:boot',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Origo',
                            // photoURL: './images/sponsors/reboot/OrigoLogo.png',
                            photoURL: './images/sponsors/reboot/OrigoSVG.svg',
                            website: 'https://www.origo.is/'
                        },
                        {
                            id: 1,
                            name: 'Kvika',
                            // photoURL: './images/sponsors/reboot/Merki_Liggjandi_Gull_x1.jpg',
                            photoURL: './images/sponsors/reboot/KvikaSVG.svg',
                            website: 'https://www.kvika.is/'
                        },
                        {
                            id: 2,
                            name: 'Auður',
                            // photoURL: './images/sponsors/reboot/audur_merki_transparent_Svart.png',
                            photoURL: './images/sponsors/reboot/AudurSVG.svg',
                            website: 'https://www.audur.is/'
                        },
                        {
                            id: 3,
                            name: 'KPMG',
                            // photoURL: './images/sponsors/reboot/KPMG_NoCP_RGB.png',
                            photoURL: './images/sponsors/reboot/KPMGSVG.svg',
                            website: 'https://home.kpmg/is/is/home.html'
                        },
                    ]
                },
                {
                    id: 1,
                    nameEn: 'Re:start',
                    nameIs: 'Re:start',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Byggðastofnun',
                            photoURL: './images/sponsors/restart/Byggst_1800x600px_transp.png',
                            website: 'https://www.byggdastofnun.is/'
                        },
                        {
                            id: 1,
                            name: 'Ölgerðin Egill Skallagrímsson',
                            photoURL: './images/sponsors/restart/OES_logo_png.png',
                            website: 'https://www.olgerdin.is/'
                        },
                        {
                            id: 2,
                            name: 'Vörður',
                            photoURL: './images/sponsors/restart/Vordur_logo_outline.png',
                            website: 'https://vordur.is/'
                        },
                        {
                            id: 3,
                            name: 'Awarego',
                            photoURL: './images/sponsors/restart/awarego.png',
                            website: 'https://www.awarego.com/'
                        },
                    ]
                },
                {
                    id: 2,
                    nameEn: 'Re:load',
                    nameIs: 'Re:load',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Deloitte',
                            photoURL: './images/sponsors/reload/DEL_PRI_RGB.png',
                            website: 'https://www2.deloitte.com/is/is.html'
                        },
                    ]
                },
                {
                    id: 3,
                    nameEn: 'Other Sponsors',
                    nameIs: 'Aðrir Styrktaraðilar',
                    sponsor : [
                        {
                            id: 0,
                            name: 'Dominos',
                            photoURL: './images/sponsors/other/Logobakgrunnslaust.png',
                            website: 'https://www.dominos.is/'
                        },
                        {
                            id: 1,
                            name: 'Hostelling International',
                            photoURL: './images/sponsors/other/HI_LOGO_PRIMARY_CMYK.png',
                            website: 'https://www.hostel.is/'
                        },
                        {
                            id: 2,
                            name: 'ENNEMM',
                            photoURL: './images/sponsors/other/ennemm.png',
                            website: 'https://www.ennemm.is/'
                        },
                    ]
                }

            ]
        }
    }

    render() {
        this.text = getTranslation();
        //const { sponsors } = this.props;
        //const { table } = sponsors;
        /*
        1. Reboot
        2. Restart
        3. Reload
        4. other
        */

        var sponsorSection = this.state.sponsors.map(
            (sponsor) => {
                return (
                    <div>
                    <h2 className="text-center">{Cookies.get('language')=='is' ? sponsor.nameIs :sponsor.nameEn}</h2>
                    <SponsorImages
                        key = {sponsor.id}
                        sponsorItem = {sponsor.sponsor}
                    />
                    </div>
                );
            });

        return (
            <div className={style.sponsor__content +" "+ style.App}>
                <h1 className={style.sponsor__main__header}>{this.text.sponsors.sponsors}</h1>
                {/* Her koma myndir af styrkaradilum */}
                <div>
                    {sponsorSection}
                </div>

                {/*
                <SponsorDetail 
                    header={this.text.sponsors.details.reload.header}
                    main={this.text.sponsors.details.reload.main}
                />

                <SponsorDetail 
                    header={this.text.sponsors.details.restart.header}
                    main={this.text.sponsors.details.restart.main}
                />

                <SponsorDetail 
                    header={this.text.sponsors.details.reboot.header}
                    main={this.text.sponsors.details.reboot.main}
                />
                */}
            
        </div>
        )
    }
}

export default Sponsors;
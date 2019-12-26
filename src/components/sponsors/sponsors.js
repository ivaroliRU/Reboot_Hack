import React, { Component } from 'react';
import {getTranslation} from '../../translations';

import SponsorRow from './components/sponsorRow';
import SponsorDetail from './components/sponsorDetail';
import SponsorImages from './components/SponsorImages';
import style from './sponsors.css';

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
                    name: 'restart',
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
                    ]
                },
                {
                    id: 1,
                    name: 'reload',
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
                    id: 2,
                    name: 'reboot',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Origo',
                            photoURL: './images/sponsors/reboot/OrigoLogo.png',
                            website: 'https://www.origo.is/'
                        },
                        {
                            id: 1,
                            name: 'Kvika',
                            photoURL: './images/sponsors/reboot/Merki_Liggjandi_Gull_x1.jpg',
                            website: 'https://www.kvika.is/'
                        },
                        {
                            id: 2,
                            name: 'Auður',
                            photoURL: './images/sponsors/reboot/audur_merki_transparent_Svart.png',
                            website: 'https://www.audur.is/'
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
                    console.log(this.state.sponsors);
                return (
                    <div>
                    {sponsor.name}
                    <SponsorImages
                        key = {sponsor.name}
                        sponsorItem = {sponsor.sponsor}
                    />
                    </div>
                );
            });

        return (
            <div className={style.App}>

                <div className={style.sponsor__content}>
                <h1 className={style.sponsor__main__header}>{this.text.sponsors.sponsors}</h1>
                {/* Her koma myndir af styrkaradilum */}
                <div>
                    {sponsorSection}
                </div>

                <h2 className={style.sponsor__header}>{this.text.sponsors.header}</h2>
                <table className={style.sponsor__table}>
                    <thead className={style.sponsor__table_header__category}>
                        <tr className={style.sponsor__table__header__price}>
                            <th>{this.text.sponsors.table.r0}</th>
                            <th>Re:load</th>
                            <th>Re:start</th>
                            <th>Re:boot</th>
                        </tr>
                    </thead>
                    <tbody>
                        <SponsorRow text={this.text.sponsors.table.r10} values={['', '', 'X']}/>
                        <SponsorRow text={this.text.sponsors.table.r1} values={['X', 'X', '']}/>
                        <SponsorRow text={this.text.sponsors.table.r2} values={['X', 'X', 'X']} />
                        <SponsorRow text={this.text.sponsors.table.r3} values={['X', 'X', 'X']} />
                        <SponsorRow text={this.text.sponsors.table.r4} values={['', 'X', 'X']} />
                        <SponsorRow text={this.text.sponsors.table.r5} values={['', 'X', 'X']} />
                        <SponsorRow text={this.text.sponsors.table.r6} values={['', 'X', 'X']} />
                        <SponsorRow
                            text={this.text.sponsors.table.r7}
                            values={['', '15-20 mín', '30-45 mín']}
                        />
                        <SponsorRow text={this.text.sponsors.table.r8} values={['', '', 'X']} />
                        <SponsorRow text={this.text.sponsors.table.r9} values={['', '', 'X']} />
                    </tbody>
                </table>
                <hr></hr>

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
            
            </div>

            </div>
        )
    }
}

export default Sponsors;
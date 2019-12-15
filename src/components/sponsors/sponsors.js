import React, { Component } from 'react';
import {getTranslation} from '../../translations';

import SponsorRow from './components/sponsorRow';
import SponsorDetail from './components/sponsorDetail';
import SponsorImages from './components/sponsorImages';
import style from './sponsors.css';

class Sponsors extends Component {
    render() {
        this.text = getTranslation();
        //const { sponsors } = this.props;
        //const { table } = sponsors;
        return (
            <div className={style.App}>

                <div className={style.sponsor__content}>
                {/* ATH kannski faera nedst! */}
                <h1 className={style.sponsor__main__header}>{this.text.sponsors.sponsors}</h1>
                <SponsorImages />

                <h2 className={style.sponsor__header}>{this.text.sponsors.header}</h2>
                <table className={style.sponsor__table}>
                    <thead className={style.sponsor__table_header__category}>
                        {/*
                        <tr>
                            <th> </th>
                            <th>Re:load</th>
                            <th>Re:start</th>
                            <th>Re:boot</th>
                        </tr>
                        */}
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
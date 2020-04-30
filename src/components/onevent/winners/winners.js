import React, { Component } from 'react';
import Cookies from 'js-cookie';

import style from './../challenges/challenges.css'
import generalStyle from '../onevent.css';

class Winners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winners: [
                {
                    id: 1,
                    titleEN: "Auðtré won Reboot Hack 2020",
                    titleIS: "Auðtré vann bestu lausn Reboot Hack 2020",
                    textEN: "Auðtré aims to break down savings targets into smaller units where the user is rewarded by planting trees in their name every three months, if they achieve a set goal. On the team of Auðtré were Adrian Sölvi Ingimundarson, Egill Anton Hlöðversson, Sigurður Petur Stephan and Zakarías Friðriksson",
                    textIS: "Auðtré gengur út á að brjóta niður sparnaðarmarkmið í smærri einingar þar sem notandinn er verðlaunaður með því að fá gróðursett tré í sínu nafni á þriggja mánaða fresti, nái hann markmiði sínu. Lausnin kom út frá því að liðið leysti áskorun Auðar. Lið Auðtré skipuðu: Adrian Sölvi Ingimundarson, Egill Anton Hlöðversson, Sigurður Petur Stephan og Zakarías Friðriksson",
                    photo: "/images/about/Winners-min.jpg"
                },
                {
                    id: 2,
                    titleEN: "People's choice: Krúna",
                    titleIS: "Krúna var valin lausn fólksins",
                    textEN: "Team Krúna aimed to solve Auður's challenge was Reboot Hack 2020 people choice. On Krúna's team were Emilía Tinna Sigurðardóttir, Hekla Bryndís Jóhannsdóttir, Snædís Guðrún Guðmundsdóttir, Sóley Sara Eiríksdóttir og Jón Kristinn Þórðarsson",
                    textIS: "Lausnin Krúna leysti áskorun Auðar var valin lausn fólksins, en liðið skipuðu þau Emilía Tinna Sigurðardóttir, Hekla Bryndís Jóhannsdóttir, Snædís Guðrún Guðmundsdóttir, Sóley Sara Eiríksdóttir og Jón Kristinn Þórðarson",
                    photo: "/images/about/PplsChoice-min.jpg"
                }
            ]
        };
    }

    render() {

        var title;

        if (Cookies.get('language') == 'is') {
            title = "Reboot Hack 2020";
        } else 
        {
            title = "Reboot Hack 2020";
        }

        var winnersSection = this.state.winners.map(
            (winners) => {

                return (
                    <div key={winners.id}>    
                        <h3 className={generalStyle.header_style+" "+style.header_size_modified_on_mobile}>{Cookies.get('language')=='is' ? winners.titleIS : winners.titleEN}</h3>  
                        <p className={style.text_justify+" "+generalStyle.header_style+" "+generalStyle.paragraph_style}>{Cookies.get('language')=='is' ? winners.textIS : winners.textEN}</p>
                        <img className={"img-fluid pb-4"} src={winners.photo}/>
                    </div>
                );

            });

            return (
                <div className={"container "+style.padding_bottom_after_div}>
                    <h2 className={generalStyle.header_style+" "+style.header_size_modified_on_mobile}>{title}</h2>
                        {winnersSection}

                </div>
            );


    }
}

export default Winners;
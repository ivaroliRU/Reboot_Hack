import React, { Component } from 'react';
import teamsStyle from "./Teams.css";
import teamStyle from "./Team/Team.css"
import Team from './Team/Team';

class Teams extends Component {
    
constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 0,
          individuals: [
            {
              id: 0,
              name: 'Kristjana Björk Barðdal',
              linkedInLink: 'https://www.linkedin.com/in/kristjanabb/',
              photoURL: './images/team/A-Kristjanafin_comp.jpg',
              titleEn: 'Director & Co-founder',
              titleIs: 'Framkvæmdastjóri og meðstofnandi'
            },
            {
              id: 1,
              name: 'Einar Guðni Guðjónsson',
              linkedInLink: 'https://www.linkedin.com/in/einar-gudjonsson/',
              photoURL: './images/team/A-EINARfin_comp.jpg',
              titleEn: 'Software Developer',
              titleIs: 'Forritari'
            },
            // {
            //   id: 2,
            //   name: 'Embla Dís Haraldsdóttir',
            //   linkedInLink: null,
            //   photoURL: './images/team/A-Emblafin_comp.jpg',
            //   titleEn: 'Marketing',
            //   titleIs: 'Markaðsteymi'
            // },
            {
              id: 3,
              name: 'George-Cosmin Moroșanu',
              linkedInLink: 'https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/',
              photoURL: './images/team/A-Georgefin_comp.jpg',
              titleEn: 'Software Developer',
              titleIs: 'Forritari'
            },
            {
              id: 4,
              name: 'Guðrún Sara Örnólfsdóttir',
              linkedInLink: 'https://www.linkedin.com/in/gudrun-sara-ornolfsdottir/',
              photoURL: './images/team/A-Gudrunfin_comp.jpg',
              titleEn: 'Outreach manager',
              titleIs: 'Kynningarstjóri'
            },
            {
              id: 5,
              name: 'Ívar Óli Sigurðsson',
              linkedInLink: 'https://www.linkedin.com/in/%C3%ADvar-%C3%B3li-326a86159/',
              photoURL: './images/team/A-ÍVARfin_comp.jpg',
              titleEn: 'Software Developer',
              titleIs: 'Forritari'
            },
            {
              id: 6,
              name: 'Justine Vanhalst',
              linkedInLink: 'https://www.linkedin.com/in/justine-vanhalst-20586811b/',
              photoURL: './images/team/A-Justinefin_comp.jpg',
              titleEn: 'Sustainability Director',
              titleIs: 'Sjálfbærnistjóri'
            },
            {
              id: 7,
              name: 'Linnea Lallaine Jonsson',
              linkedInLink: 'https://www.linkedin.com/in/lallaine/',
              photoURL: './images/team/A-Linneafin_comp.jpg',
              titleEn: 'International Communications Representative',
              titleIs: 'Alþjóðafulltrúi'
            },
            {
              id: 8,
              name: 'Sigrún Sayeh Valadbeygi',
              linkedInLink: 'https://www.linkedin.com/in/sigrún-sayeh-v-b89793173/',
              photoURL: './images/team/A-SIgrúnfin_comp.jpg',
              titleEn: 'Finance and Logistic Manager',
              titleIs: 'Viðskiptastjóri'
            },
            {
              id: 9,
              name: 'Stefán Örn Snæbjörnsson',
              linkedInLink: 'https://www.linkedin.com/in/stefanornsnaebjornsson/',
              photoURL: './images/team/A-Stefánfin_comp.jpg',
              titleEn: 'Corporate Partnerships Manager',
              titleIs: 'Viðskiptatengslastjóri'
            },
            {
              id: 10,
              name: 'Sylvía Lind Jóhannesdóttir',
              linkedInLink: 'https://www.linkedin.com/in/sylvialindjohannesdottir/',
              photoURL: './images/team/A-Sylvíafin_comp.jpg',
              titleEn: 'Art Director',
              titleIs: 'Listrænn stjórnandi'
            },
            {
              id: 11,
              name: 'Tanja Teresa Leifsdóttir',
              linkedInLink: 'https://www.linkedin.com/in/tanjateresa12/',
              photoURL: './images/team/A-Tanjafin_comp.jpg',
              titleEn: 'PR & Communications Manager',
              titleIs: 'Samskiptastýra'
            },
            {
              id: 12,
              name: 'Tinna Líf Jörgensdóttir',
              linkedInLink: 'https://www.linkedin.com/in/tinna-líf-jörgensdóttir-19802a173/?originalSubdomain=is',
              photoURL: './images/team/A-Tinnafin_comp.jpg',
              titleEn: 'Marketing',
              titleIs: 'Markaðsteymi'
            },
            {
              id: 13,
              name: 'Þorbjörg Þórhildur Snorradóttir',
              linkedInLink: 'https://www.linkedin.com/in/thorbjorgsnorradottir/',
              photoURL: './images/team/A-Tobbafin_comp.jpg',
              titleEn: 'Sponsorship',
              titleIs: 'Styrkir'
            },
            /*{
              id: 14,
              name: 'Vigfús Ólafsson',
              linkedInLink: null,
              photoURL: './images/team/A-Fúsifin_comp.jpg',
              titleEn: 'Content',
              titleIs: 'Kynningarstjóri'
            }*/
          ]
        }
      ]
    };
  }

  render() {
    var teamsSection = this.state.teams.map(
      (team) => {
        return (
          <Team
            key = {team.id}
            teamIndividuals={team.individuals}
          />
        );
    });

    return (
      <div>
        <h1 
        className={teamsStyle.the_team_text}>Our AMAZING Team</h1>
        <div className={"text-center "+teamStyle.top0}>
              {teamsSection}
        </div>
      </div>
          
     );
    }
  }
  
  export default Teams;
import React, { Component } from 'react';
import TeamsStyle from "./Teams.css";
import TeamStyle from "./Team/Team.css"
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
              photoURL: './images/A-Kristjanafin_comp.jpg',
              titleEn: 'Director & Co-founder',
              titleIs: 'Framkvæmdastjóri og meðstofnandi'
            },
            {
              id: 1,
              name: 'Einar Guðni Guðjónsson',
              linkedInLink: 'https://www.linkedin.com/in/einar-gudjonsson/',
              photoURL: './images/A-EINARfin_comp.jpg',
              titleEn: 'Software Developer',
              titleIs: 'Forritari'
            },
            {
              id: 2,
              name: 'Embla Dís Haraldsdóttir',
              linkedInLink: null,
              photoURL: './images/A-Emblafin_comp.jpg',
              titleEn: 'Marketing',
              titleIs: 'Markaðsteymi'
            },
            {
              id: 3,
              name: 'George-Cosmin Moroșanu',
              linkedInLink: 'https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/',
              photoURL: './images/A-Georgefin_comp.jpg',
              titleEn: 'Software Developer',
              titleIs: 'Forritari'
            },
            {
              id: 4,
              name: 'Guðrún Sara Örnólfsdóttir',
              linkedInLink: 'https://www.linkedin.com/in/gudrun-sara-ornolfsdottir/',
              /* Just a temp photo */
              photoURL: './images/gudrunreboot_comp.jpg',
              titleEn: 'Outreach manager',
              titleIs: 'Kynningarstjóri'
            },
            {
              id: 5,
              name: 'Ívar Óli Sigurðsson',
              linkedInLink: 'https://www.linkedin.com/in/%C3%ADvar-%C3%B3li-326a86159/',
              photoURL: './images/A-ÍVARfin_comp.jpg',
              titleEn: 'Software Developer',
              titleIs: 'Forritari'
            },
            {
              id: 6,
              name: 'Justine Vanhalst',
              linkedInLink: 'https://www.linkedin.com/in/justine-vanhalst-20586811b/',
              photoURL: './images/A-Justinefin_comp.jpg',
              titleEn: 'Sustainability Director',
              titleIs: 'Sjálfbærnistjóri'
            },
            {
              id: 7,
              name: 'Linnea Lallaine Jonsson',
              linkedInLink: 'https://www.linkedin.com/in/lallaine/',
              photoURL: './images/A-Linneafin_comp.jpg',
              titleEn: 'International Communications Representative',
              titleIs: 'Alþjóðafulltrúi'
            },
            {
              id: 8,
              name: 'Sigrún Sayeh Valadbeygi',
              linkedInLink: 'https://www.linkedin.com/in/sigrún-sayeh-v-b89793173/',
              photoURL: './images/A-Sigrúnfin_comp.jpg',
              titleEn: 'Finance and Logistic Manager',
              titleIs: 'Viðskiptastjóri'
            },
            {
              id: 9,
              name: 'Stefán Örn',
              linkedInLink: 'https://www.linkedin.com/in/stefanornsnaebjornsson/',
              photoURL: './images/A-Stefánfin_comp.jpg',
              titleEn: 'Corporate Partnerships Manager',
              titleIs: 'Viðskiptatengslastjóri'
            },
            {
              id: 10,
              name: 'Sylvía Lind Jóhannesdóttir',
              linkedInLink: 'https://www.linkedin.com/in/sylvialindjohannesdottir/',
              photoURL: './images/A-Sylvíafin_comp.jpg',
              titleEn: 'Art Director',
              titleIs: 'Listrænn stjórnandi'
            },
            {
              id: 11,
              name: 'Tanja Teresa Leifsdóttir',
              linkedInLink: 'https://www.linkedin.com/in/tanjateresa12/',
              photoURL: './images/A-Tanjafin_comp.jpg',
              titleEn: 'PR & Communications Manager',
              titleIs: 'Samskiptastýra'
            },
            /*{
              id: 12,
              name: 'Tinna Líf Jörgensdóttir',
              linkedInLink: 'https://www.linkedin.com/in/tinna-líf-jörgensdóttir-19802a173/?originalSubdomain=is',
              photoURL: './images/A-Tinnafin_comp.jpg',
              titleEn: 'Marketing',
              titleIs: 'Markaðsstjóri'
            },*/
            {
              id: 13,
              name: 'Þorbjörg Þórhildur Snorradóttir',
              linkedInLink: 'https://www.linkedin.com/in/thorbjorgsnorradottir/',
              photoURL: './images/A-Tobbafin_comp.jpg',
              titleEn: 'Sponsorship team',
              titleIs: 'Styrkir'
            },
            /*{
              id: 14,
              name: 'Vigfús Ólafsson',
              linkedInLink: null,
              photoURL: './images/A-Fúsifin_comp.jpg',
              titleEn: 'Content team',
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
        {/* <h1 className={TeamsStyle.Glow+' '+TeamsStyle.H1}>Our AMAZING Team:</h1> */}
        <h1 
        className={TeamsStyle.TheTeamText}>Our AMAZING Team</h1>
        <div className={"text-center "+TeamStyle.top0}>
              {teamsSection}
        </div>
      </div>
          
     );
    }
  }
  
  export default Teams;
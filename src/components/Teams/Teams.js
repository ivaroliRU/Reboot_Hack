import React, { Component } from 'react';
import TeamsStyle from "./Teams.css";
import Team from './Team/Team';

class Teams extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        numberOfTeams: 7,
        teams:[
          {
            id: 0,
            name: "Director",
            individuals:[
              {
                id: 0,
                name: 'Kristjana Björk Barðdal',
                linkedInLink: 'https://www.linkedin.com/in/kristjanabb/',
                email: 'kristjanabb@gmail.com',
                photoURL: './images/A-Kristjanafin.jpg',
                title: 'Director & Co-founder'
              }
            ]
          },
          {
            id: 1,
            name: "Marketing",
            individuals:[
              {
                id: 0,
                name: 'Embla Dís',
                linkedInLink: null,
                email: 'disembla@gmail.com',
                photoURL: './images/A-Emblafin.jpg',
                title: 'Marketing'
              },
              {
                id: 1,
                name: 'Tinna Líf',
                linkedInLink: 'https://is.linkedin.com/in/tinna-l%C3%ADf-jörgensdóttir-19802a173',
                email: 'tinnalifj@gmail.com',
                photoURL: './images/A-Tinnafin.jpg',
                title: 'Marketing'
              }
            ]
          },
          {
            id: 2,
            name: "Content",
            individuals:[
              {
                id: 0,
                name: 'Fúsi',
                linkedInLink: null,
                email: 'vio15@hi.is',
                photoURL: './images/A-Fúsifin.jpg',
                title: 'Director'
              },
              {
                id: 1,
                name: 'Guðrún Sara Ornolfsdottir',
                linkedInLink: 'https://www.linkedin.com/in/gudrun-sara-ornolfsdottir/',
                email: 'gudrunso17@ru.is',
                photoURL: './images/Profile.jpg',
                title: 'Outreach manager'
              },
              {
                id: 2,
                name: 'Sylvía Lind Jóhannesdóttir',
                linkedInLink: 'https://www.linkedin.com/in/sylvialindjohannesdottir/',
                email: 'sylviaj16@lhi.is',
                photoURL: './images/A-Sylvíafin.jpg',
                title: 'Art Director'
              },
               // {
              //   id: 3,
              //   name: 'Salvör',
              //   linkedInLink: null,
              //   email: 'sai3@hi.is',
              //   photoURL: './images/A-Salvörfin.jpg',
              //   title: 'Director'
              // },
            ]
          },
          {
            id: 3,
            name: "Logistics",
            individuals:[
              {
                id: 0,
                name: 'Justine Vanhalst',
                linkedInLink: 'https://www.linkedin.com/in/justine-vanhalst-20586811b/',
                email: 'justine.vanhalst@outlook.com',
                photoURL: './images/A-Justinefin.jpg',
                title: 'Sustainability Director'
              },
              {
                id: 1,
                name: 'Linnea Lallaine Jonsson',
                linkedInLink: 'https://www.linkedin.com/in/lallaine/',
                email: 'linnealallaine@hotmail.com',
                photoURL: './images/A-Linneafin.jpg',
                title: 'International Communications Representative'
              },
              {
                id: 2,
                name: 'Sigrún Sayeh Valadbeygi',
                linkedInLink: 'https://www.linkedin.com/in/sigrún-sayeh-v-b89793173/',
                email: 'sigrunss@gmail.com',
                photoURL: './images/A-Sigrúnfin.jpg',
                title: 'Finance and Logistic Manager'
              }
            ]
          },
          {
            id: 4,
            name: "Sponsorship",
            individuals:[
              {
                id: 0,
                name: 'Þorbjörg Þórhildur Snorrdóttir',
                linkedInLink: 'https://www.linkedin.com/in/thorbjorgsnorradottir/',
                email: 'Tobbasn@gmail.com',
                photoURL: './images/A-Tobbafin.jpg',
                title: 'Sponsorship Leader'
              },
              // {
              //   id: 1,
              //   name: 'Sigga',
              //   linkedInLink: 'https://www.linkedin.com/in/sigridur-osp-sigurdardottir/',
              //   email: 'sos42@hi.is',
              //   photoURL: './images/Profile.jpg',
              //   title: 'Director'
              // },
            ]
          },
          {
            id: 5,
            name: "Partners",
            individuals:[
              {
                id: 0,
                name: 'Stefán Örn',
                linkedInLink: 'https://www.linkedin.com/in/stefanornsnaebjornsson/',
                email: 'stefanornsnae@gmail.com',
                photoURL: './images/A-Stefánfin.jpg',
                title: 'PR & Communications'
              },
              {
                id: 1,
                name: 'Tanja Teresa Leifsdóttir',
                linkedInLink: 'https://www.linkedin.com/in/tanjateresa12/',
                email: 'tanjateresa@gmail.com',
                photoURL: './images/A-Tanjafin.jpg',
                title: 'PR & Communications Manager'
              }
              
            ]
          },
          {
          id: 6,
          name: "Technology",
          individuals: [
            {
              id: 0,
              name: 'Ívar Óli Sigurðsson',
              linkedInLink: 'https://www.linkedin.com/in/ívar-óli-326a86159/',
              email: 'ivars17@ru.is',
              photoURL: './images/A-ÍVARfin.jpg',
              title: 'Software Developer'
            },
            {
              id: 1,
              name: 'Einar Guðni Guðjónsson',
              linkedInLink: 'https://www.linkedin.com/in/einar-gudjonsson/',
              email: 'einargudnig@gmail.com',
              photoURL: './images/A-EINARfin.jpg',
              title: 'Software Developer'
            },
            {
              id: 2,
              name: 'George-Cosmin Moroșanu',
              linkedInLink: 'https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/',
              email: 'georgecosminmorosanu@gmail.com',
              photoURL: './images/A-Georgefin.jpg',
              title: 'Software Developer'
            }
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
            id={team.id}
            teamName={team.name}
            teamIndividuals={team.individuals}
          />
        );
    });

    return (
      <div>
        <h1 className={TeamsStyle.Glow}>Our AWESOME Team:</h1>
        <div className={"text-center"}>
              {teamsSection}
        </div>
      </div>
          
     );
    }
  }
  
  export default Teams;
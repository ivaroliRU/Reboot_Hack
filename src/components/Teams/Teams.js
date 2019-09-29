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
                photoURL: './images/Profile.jpg'
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
                photoURL: './images/Profile.jpg'
              },
              {
                id: 1,
                name: 'Tinna Líf',
                linkedInLink: 'https://www.linkedin.com/in/tinna-l%C3%ADf-jörgensdóttir-19802a173/',
                email: 'tinnalifj@gmail.com',
                photoURL: './images/Profile.jpg'
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
                photoURL: './images/Profile.jpg'
              },
              {
                id: 1,
                name: 'Guðrún Sara',
                linkedInLink: 'https://www.linkedin.com/in/gudrun-sara-ornolfsdottir/',
                email: 'gudrunso17@ru.is',
                photoURL: './images/Profile.jpg'
              },
              {
                id: 2,
                name: 'Salvör',
                linkedInLink: null,
                email: 'sai3@hi.is',
                photoURL: './images/Profile.jpg'
              },
              {
                id: 3,
                name: 'Sylvía Lind',
                linkedInLink: 'https://www.linkedin.com/in/sylvialindjohannesdottir/',
                email: 'sylviaj16@lhi.is',
                photoURL: './images/Profile.jpg'
              }
            ]
          },
          {
            id: 3,
            name: "Logistics",
            individuals:[
              {
                id: 0,
                name: 'Justine',
                linkedInLink: null,
                email: 'justine.vanhalst@outlook.com',
                photoURL: './images/Profile.jpg'
              },
              {
                id: 1,
                name: 'Linnea',
                linkedInLink: null,
                email: 'linnealallaine@hotmail.com',
                photoURL: './images/Profile.jpg'
              },
              {
                id: 2,
                name: 'Sigrún',
                linkedInLink: null,
                email: 'sigrunss@gmail.com',
                photoURL: './images/Profile.jpg'
              }
            ]
          },
          {
            id: 4,
            name: "Sponsorship",
            individuals:[
              {
                id: 0,
                name: 'Sigga',
                linkedInLink: 'https://www.linkedin.com/in/sigridur-osp-sigurdardottir/',
                email: 'sos42@hi.is',
                photoURL: './images/Profile.jpg'
              },
              {
                id: 1,
                name: 'Tobba',
                linkedInLink: 'https://www.linkedin.com/in/thorbjorgsnorradottir/',
                email: 'Tobbasn@gmail.com',
                photoURL: './images/Profile.jpg'
              }
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
                photoURL: './images/Profile.jpg'
              },
              {
                id: 1,
                name: 'Tanja Teresa',
                linkedInLink: 'https://www.linkedin.com/in/tanja-teresa-leifsd%C3%B3ttir-8975b95a/',
                email: 'tanjateresa@gmail.com',
                photoURL: './images/Profile.jpg'
              }
              
            ]
          },
          {
          id: 6,
          name: "Technology",
          individuals: [
            {
              id: 0,
              name: 'Ívar',
              linkedInLink: null,
              email: 'ivars17@ru.is',
              photoURL: './images/Profile.jpg'
            },
            {
              id: 1,
              name: 'Einar Guðni',
              linkedInLink: null,
              email: 'einargudnig@gmail.com',
              photoURL: './images/Profile.jpg'
            },
            {
              id: 2,
              name: 'George-Cosmin Moroșanu',
              linkedInLink: 'https://www.linkedin.com/in/george-cosmin-morosanu-58272115a/',
              email: 'georgecosminmorosanu@gmail.com',
              photoURL: './images/Profile.jpg'
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
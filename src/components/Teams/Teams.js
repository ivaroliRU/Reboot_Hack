import React, { Component } from 'react';
import TeamsStyle from "./Teams.css";
import Team from './Team/Team';

class Teams extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        numberOfTeams: 6,
        teams:[
          {
            id: 0,
            name: "Director",
            individuals:[
              {
                id: 0,
                name: 'Kristjana',
                linkedInLink: 'SomeLinkedInLInk',
                email: 'myEmail@domain.com',
                photoURL: './images/Profile.jpg'
              }
            ]
          },
          {
          id: 1,
          name: "Technology",
          individuals: [
            {
              id: 0,
              name: 'George',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: './images/Profile.jpg'
            },
            {
              id: 1,
              name: 'Ivar',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: './images/Profile.jpg'
            },
            {
              id: 2,
              name: 'Einar',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: './images/Profile.jpg'
            },
            {
              id: 3,
              name: 'SomebodyElse',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: './images/Profile.jpg'
            }
          ]
          },
          
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
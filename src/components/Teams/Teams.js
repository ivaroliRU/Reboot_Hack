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
          name: "Technology",
          individuals: [
            {
              id: 0,
              name: 'George',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: 'SomeUrl'
            },
            {
              id: 1,
              name: 'Ivar',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: 'SomeUrl'
            },
            {
              id: 2,
              name: 'Einar',
              linkedInLink: 'SomeLinkedInLInk',
              email: 'myEmail@domain.com',
              photoURL: 'SomeUrl'
            }
          ]
          },
          {
            name: "Director",
            individuals:[
              {
                id: 0,
                name: 'Kristjana',
                linkedInLink: 'SomeLinkedInLInk',
                email: 'myEmail@domain.com',
                photoURL: 'SomeUrl'
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
          teamName={team.name}
          teamIndividuals={team.individuals}
          />
        );
    });

    return (
      <div>
        <p>Teams Page is working! Numbe of teams: {this.state.numberOfTeams}</p>
        <div className={"text-center"}>
              {teamsSection}
        </div>
      </div>
          
     );
    }
  }
  
  export default Teams;
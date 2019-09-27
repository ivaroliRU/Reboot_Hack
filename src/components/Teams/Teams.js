import React, { Component } from 'react';
import teamsStyle from "./Teams.css";
import Individual from './Individual/individual';

class Teams extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        numberOfTeams: 6,
        individualList: [
          {
            id: 0,
            name: 'George',
            age: '23',
            linkedInLink: 'SomeLinkedInLInk',
            email: 'myEmail@domain.com',
            photoURL: 'SomeUrl'
          },
          {
            id: 1,
            name: 'Ivar',
            age: '22',
            linkedInLink: 'SomeLinkedInLInk',
            email: 'myEmail@domain.com',
            photoURL: 'SomeUrl'
          },
          {
            id: 2,
            name: 'Einar',
            age: '22',
            linkedInLink: 'SomeLinkedInLInk',
            email: 'myEmail@domain.com',
            photoURL: 'SomeUrl'
          }
        ]
    };
    }

  render() {
    return (
      <div>
          <p>Teams Page is working!</p>
          <div className={'text-center'}>
            
            {/* <div className={'container'}>
              <div className={'row'}>
              <div className={teamsStyle.TeamsDiv+' col-xl-4 col-xs-4'}>Aaa</div>
              <div className={teamsStyle.TeamsDiv+' col-xl-4 col-xs-4'}>Bbb</div>
              <div className={teamsStyle.TeamsDiv+' col-xl-4 col-xs-4'}>Ccc</div>
              </div>
            </div> */}

            <Individual 
              noTeams={this.state.numberOfTeams}
              individualList={this.state.individualList}
              />
          </div>
      </div>
     );
    }
  }
  
  export default Teams;
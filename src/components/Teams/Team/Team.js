import React, { Component } from 'react';
import TeamStyle from "./Team.css";
import Individual from '../Individual/Individual';

class Team extends Component {
  

  render() {
    let individualsSection = this.props.teamIndividuals.map(
        (individual) => {
          return (
            <Individual
              key={individual.id}
              individualName={individual.name}
              individualLinkedIn = {individual.linkedInLink}
              individualPhotoUrl = {individual.photoURL}
              individualTitleEn = {individual.titleEn}
              individualTitleIs = {individual.titleIs}
            />
          );
      });
    return (
      <div className={TeamStyle.Container+" container"}>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
        <div className={TeamStyle.TeamDiv}>
          {/* <p className={TeamStyle.TeamName}> {this.props.teamName} {this.props.teamName=='Director' ? null : 'Team'}</p> */}
          
          <div className={TeamStyle.Container+" container"}>
              <div className={"row"}>
                  {individualsSection}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
    
export default Team;
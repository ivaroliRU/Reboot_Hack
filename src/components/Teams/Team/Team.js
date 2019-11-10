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
        <div className={TeamStyle.TeamDiv}>
          {/* <p className={TeamStyle.TeamName}> {this.props.teamName} {this.props.teamName=='Director' ? null : 'Team'}</p> */}
          <br /> <br />
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
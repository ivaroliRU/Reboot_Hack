import React, { Component } from 'react';
import teamStyle from "./team.css";
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
      <div className={teamStyle.container+" container"}>
        <div className={teamStyle.team_div}> 
          <div className={teamStyle.container+" container"}>
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
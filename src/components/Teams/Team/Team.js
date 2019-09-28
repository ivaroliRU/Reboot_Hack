import React, { Component } from 'react';
import TeamStyle from "./Team.css";
import Individual from '../Individual/Individual';

class Team extends Component {
  render() {
    let individualsSection = this.props.teamIndividuals.map(
        (individual) => {
          return (
            <Individual
              individualName={individual.name}
              individualLinkedIn = {individual.linkedInLink}
              individualEmail = {individual.email}
              individualPhotoUrl = {individual.photoURL}
            />
          );
      });
    return (
      <div className={"container"}>
        <div className={TeamStyle.TeamDiv}>
          <p className={TeamStyle.TeamName}>Team {this.props.teamName}</p>
          <br /> <br />
          <div className={"container"}>
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

// <div className={"col-xs-4 col-xl-4"}>
//               <div 
//               id="Photo"
//               className={IndividualStyle.IndividualDiv}
//               >
//                 <img 
//                 className = {'image-responsie rounded'}
//                 />
//                 <p> Name: {individual.name} </p>
//                 <p> Age: {individual.age} </p>
//               </div>
//             </div>
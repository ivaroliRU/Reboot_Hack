import React, { Component } from 'react';
import IndividualStyle from "./Individual.css";

class Individual extends Component {
  render() {
    let individuals = this.props.individualList;
    var myIndividualList = individuals.map(
      (individual) => {
        return (
          
            <div className={"col-xs-4 col-xl-4"}>
              <div 
              id="Photo"
              className={IndividualStyle.IndividualDiv}
              >
                <img 
                className = {'image-responsie rounded'}
                />
                <p> Name: {individual.name} </p>
                <p> Age: {individual.age} </p>
              </div>
            </div>
        );
    });

    return (
      <div className={"text-center"}>
        <div className={"container"}>
          <p>Individual page is working! {this.props.noTeams}</p>
        </div>
        <div className={"container"}>
          <div className={'row'}>
            {myIndividualList}
          </div>
        </div>
      </div>
     );
    }
  }
  
  export default Individual;
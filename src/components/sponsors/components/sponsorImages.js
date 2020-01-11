import React, { Component } from 'react';
// import Translate from '../../../translate';
import SponsorImage from './sponsorImage';
import './sponsorImages.css';

class SponsorImages extends Component {

  render() {
    let singleSponsor = this.props.sponsorItem.map(
      (sponsor) => {
        return (
          <SponsorImage 
            key = {sponsor.id}
            sponsorName = {sponsor.name}
            sponsorPhotoUrl = {sponsor.photoURL}
            sponsorWebsite = {sponsor.website}
            sponsorRank = {this.props.spRank}
          />
        );
      });
    return (
      <div className="container">
        <div className="row">
          {singleSponsor}
        
        </div>

      </div>
    )
  
  }
}

export default SponsorImages;
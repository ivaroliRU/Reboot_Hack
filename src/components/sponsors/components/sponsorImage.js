import React, { Component } from 'react';
import style from './sponsorImage.css';

class SponsorImage extends Component {

  render() {
    return(
      <div>
        <p>Her kemur mynd</p>
        <img src={this.props.sponsorPhotoUrl}/>
      </div>
    );
  }
}

export default SponsorImage;
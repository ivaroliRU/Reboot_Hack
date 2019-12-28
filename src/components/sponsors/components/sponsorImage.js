import React, { Component } from 'react';
import style from './sponsorImage.css';

class SponsorImage extends Component {

  render() {
    return(
      <div className="col-sm-3">

        <a href={this.props.sponsorWebsite} class="custom-card" target="_blank">
        <div className="card border-0 image__card" min-widht={250} max-width={250} min-height={250} max-height={250}>
          <div className="card-body">
              <img className="img-fluid" src={this.props.sponsorPhotoUrl} min-width={250} max-width={250} min-height={250} max-height={250}/>
          </div>
        </div>
        </a>
        
      </div>
    );
  }
}

export default SponsorImage;
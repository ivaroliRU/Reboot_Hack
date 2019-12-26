import React, { Component } from 'react';
import style from './sponsorImage.css';

class SponsorImage extends Component {

  render() {
    return(
      <div className="col-sm-3">

        <div className="card image__card" width={250} height={250}>
          <div className="card-body">
            <img className="img-fluid" src={this.props.sponsorPhotoUrl} width={250} height={250}/>
            <p>{this.props.name}</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SponsorImage;
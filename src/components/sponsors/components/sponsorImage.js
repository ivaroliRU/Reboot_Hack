import React, { Component } from 'react';
import style from './sponsorImage.css';

class SponsorImage extends Component {

  render() {
    return(
      
      <div className={style.image_center+" col-sm-3"}>

        <a href={this.props.sponsorWebsite} class="custom-card" target="_blank">
        <div className={"card border-0 image__card"}>
          <div className="card-body">
              <img className={style.image+" img-fluid"} src={this.props.sponsorPhotoUrl}/>
          </div>
        </div>
        </a>
        
    </div>
    

    
      /*
      <div className="row">
        <div className="col-sm-4 py-2">
          <div className="card card-body h-100">
            <img className="img-fluid" src={this.props.sponsorPhotoUrl}/>
          </div>
        </div>
      </div>
      */
    

    );
  }
}

export default SponsorImage;
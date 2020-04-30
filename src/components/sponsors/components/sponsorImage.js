import React, { Component } from 'react';
import style from './sponsorImage.css';

class SponsorImage extends Component {

  render() {
    var imgStyle="";
    if(this.props.sponsorRank == 1){
      imgStyle=style.rank1;
    }
    else if(this.props.sponsorRank == 2){
      imgStyle=style.rank2;
    }
    else if(this.props.sponsorRank == 3){
      imgStyle=style.rank3;
    }
    else{
      imgStyle=style.rank4;
    }

    return(
      
      <div className={style.image_center
                        +" "+(this.props.sponsorRank==4 ? "col-lg-3"+" "+style.col_sm_1_half 
                                                    : "col-lg-3")
                        +" "+(this.props.sponsorName == null ? style.hide_on_small_screens 
                                                            : (this.props.sponsorRank==1 ? "col-12" 
                                                                                          : (this.props.sponsorRank==4 ? "col-5" : "col-6")))}>
        <a href={this.props.sponsorWebsite} className="custom-card" target="_blank">
        <div className={"card border-0 image__card"}>
          <div className={imgStyle+" card-body"}>
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
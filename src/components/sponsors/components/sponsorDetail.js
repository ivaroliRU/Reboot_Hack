import React, { Component } from 'react';
import style from './sponsorDetail.css';

class SponsorDetail extends Component {
  render() {
    const { header, main } = this.props;
    return (
      <div className={style.sponsor_detail}>
        <div className="container">
          <div className="why">
            <h4 dangerouslySetInnerHTML={{ __html: header }} />
            <div dangerouslySetInnerHTML={{ __html: main }} />
          </div>
        </div>
      </div>
    );
  }
}

export default SponsorDetail;
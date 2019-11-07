import React, { Component } from 'react';
import style from './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'reboothack@reboothack.is',
      copied: 'Click to copy',
      facebook: "https://www.facebook.com/reboothackiceland/",
      instagram: "https://www.instagram.com/reboothackiceland/",
      linkedin: "https://www.linkedin.com/company/reboot-hack-iceland/",
      github: "https://github.com/ivaroliRU/Reboot_Hack",
    };
  }
  
  render() {
    return (

      <footer className={FooterStyle.Footer + " text-center"}>
        <div className={"container"}>
          <div 
            id="Universities"
            className={"row"}>
              <div className={"col-xs-0 col-lg-4"}></div>
              <div className={"col-xs-12 col-lg-4"}>
                <div className={"row"}>
                  <div className={"col-xs-12 col-sm-4"}>
                    <a
                      href="https://www.ru.is/"
                      rel="noopener noreferrer"
                      target="_blank"
                    ><img className={'img-fluid ' + FooterStyle.uniLogo} src="/images/HR_Logo_White.png" alt="Reykjavík University logo"/></a>
                  </div>
                  <div className={"col-xs-12 col-sm-4"}>
                  <a
                    href="https://english.hi.is/"
                    rel="noopener noreferrer"
                    target="_blank"
                  ><img className={'img-fluid ' + FooterStyle.uniLogo} src="/images/HI_Logo_White.png" alt="University of Iceland logo"/></a>
                  </div>
                  <div className={"col-xs-12 col-sm-4"}>
                    <a
                      href="http://english.unak.is/"
                      rel="noopener noreferrer"
                      target="_blank"
                    ><img className={'img-fluid ' + FooterStyle.uniLogo} src="/images/HA_Logo_White.png" alt="University of Akureiry logo"/></a>
                  </div>
                </div>
              </div>
              <div className={"col-xs-0 col-lg-4"}></div>
            
          </div>
          <hr className={style.FooterHr}/>
          <div 
            id="Social"
            className={"row"}>
              <div className={"col-lg-12 col-xs-12"}>

              <a
                className={style.Facebook}
                href={this.state.facebook}
                target="_blank">
                  <i className={"fa fa-facebook fa-lg"}></i>
              </a>

              <a 
                className={style.Instagram}
                href={this.state.instagram}
                target="_blank">
                  <i className={"fa fa-instagram fa-lg"}></i>
              </a>

              <a
                className={style.LinkedIn}
                href={this.state.linkedin}
                target="_blank">
                  <i className={"fa fa-linkedin-square fa-lg"}></i>
              </a>

              <a
                className={style.Github}
                href={this.state.github}
                target="_blank">
                  <i className={"fa fa-github fa-lg"}></i>
              </a>
            </div>
          </div>
          <div
            id="Email"
            className={"row"}>
            <div className={"col-lg-12 col-xs-12"}>
              <div className={style.OnHoverSection}><span>Official email:</span> <button
                                      className={style.Email_Button}
                                      onClick={
                                        () => {
                                                navigator.clipboard.writeText(this.state.email);
                                                this.setState(state => ({
                                                  copied: 'Copied!',
                                                }));
                                                let TextWasCopied = setTimeout(
                                                  function() {
                                                    this.setState(state => ({
                                                      copied: 'Click to copy'
                                                    }));
                                                    clearTimeout(TextWasCopied);
                                                  }.bind(this), 3000);
                                              } 
                                          }>
                                      <span>{this.state.email}</span>
                                    </button> 
              </div>
              <div 
                  id='Coppied_Text'
                  className={style.Footer_Copy_Text}
                  >{this.state.copied}
                </div>
            </div>
          </div>
          <div
            id="Created_by"
            className={"row"}>
            <div className={"col-lg-12 col-xs-12"}>
              <p >
                <i>Created with love by <b className={FooterStyle.bold}>Reboot Hack</b> Team</i>
              </p>
            </div>
          </div>

        </div>
        </footer>
    );
  }
}


export default Footer;
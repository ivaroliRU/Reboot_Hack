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
      universities:[
        {
          id: 0,
          name: "Reykjavík University",
          logoSRC: "/images/universities/HR_Logo_White.png",
          link: "https://www.ru.is/"
        },
        {
          id: 1,
          name: "University of Iceland",
          logoSRC: "/images/universities/HI_Logo_White.png",
          link: "https://www.hi.is/"
        },
        {
          id: 2,
          name: "University of Akureiry",
          logoSRC: "/images/universities/HA_Logo_White.png",
          link: "https://www.unak.is/"
        },
        {
          id: 3,
          name: "Iceland University of the Arts",
          // logoSRC: "/images/universities/LHI_LOGO_WEB.svg",
          // logoSRC: "/images/universities/LHI_Logo_Original_White.svg",
          // logoSRC: "/images/universities/LHI_white_SVG.svg",
          // logoSRC: "/images/universities/LHI_white_SVG_V2.svg",
          // logoSRC: "/images/universities/LHI_white_SVG_V3.svg",
          // logoSRC: "/images/universities/lhi_midju_hvitt.png",
          logoSRC: "/images/universities/LHI_merki_2017_University_midjusett.png",
          
          link: "https://www.lhi.is/"
        },
      ]
    };
  }
  
  render() {

    var universities=this.state.universities.map(
      (university) => {
        return (
          <div
              key={university.id}
              className={style.margin_auto+" col-6 col-md-3"}>
            <a
              href={university.link}
              rel="noopener noreferrer"
              target="_blank"
            ><img className={'img-fluid'} src={university.logoSRC} alt={university.name}/></a>
          </div>
        )
      }
    );

    return (

      <footer className={style.footer + " text-center"}>
        <div className={"container"}>
          <div 
            key="Universities"
            className={style.padding_div+" row"}>
              <div className={"col-3"}></div>
              <div className={"col-6"}>
                <div className={"row"}>
                 {universities}
                </div>
              </div>
              <div className={"col-3"}></div>
            
          </div>
          <hr className={style.footer_hr}/>
          <div 
            key="Social"
            className={"row"}>
              <div className={"col-lg-12 col-xs-12"}>

                <a
                  className={style.facebook}
                  href={this.state.facebook}
                  target="_blank">
                    <i className={"fa fa-facebook fa-lg"}></i>
                </a>

                <a 
                  className={style.instagram}
                  href={this.state.instagram}
                  target="_blank">
                    <i className={"fa fa-instagram fa-lg"}></i>
                </a>

                <a
                  className={style.linkedIn}
                  href={this.state.linkedin}
                  target="_blank">
                    <i className={"fa fa-linkedin-square fa-lg"}></i>
                </a>

                <a
                  className={style.github}
                  href={this.state.github}
                  target="_blank">
                    <i className={"fa fa-github fa-lg"}></i>
                </a>
              </div>
            </div>
            <div className={style.spacing}></div>
            <div
              key="Email"
              className={"row"}>
              <div className={"col-lg-12 col-xs-12"}>
                <div className={style.on_hover_section}><span>Official email:</span> <button
                                        className={style.email_button}
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
                    key='Coppied_Text'
                    className={style.footer_copy_text}
                    >{this.state.copied}
                  </div>
              </div>
            </div>
            <div
              key="Created_by"
              className={"row"}>
              <div className={"col-lg-12 col-xs-12"}>
                <p className={style.created}>
                  <i>Created with love by <b className={style.bold}>Reboot Hack</b> Team</i>
                </p>
              </div>
            </div>

          </div>
        </footer>
    );
  }
}


export default Footer;
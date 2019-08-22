import React, { Component } from 'react';
import './footer.css';

const baseurl = process.env.REACT_APP_SUB_URL;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'reboothackiceland@gmail.com',
      copied: 'Click to copy',
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="footer--sponsors">
          <div className="footer--sponsors-img">
            <a
              href="https://www.hi.is/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={`${baseurl}/images/ImgTwo.png`}
                alt="University of Iceland logo"
              />
            </a>
          </div>
          <div className="footer--sponsors-img">
            <a
              href="https://www.ru.is/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={`https://en.ru.is/skin/basic9k/i/foot-logo-2x.svg`}
                alt="Reykjavík University logo"
              />
            </a>
          </div>
        </div>
        <div className="footer--info">
          <div className="footer--contact">
            <div className="footer--email">
              {/* Clipboard handler*/ 'clipboard' in navigator && (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(this.state.email);
                    this.setState(state => ({
                      copied: 'Copied!',
                    }));
                    setTimeout(
                      function() {
                        this.setState(state => ({
                          copied: 'Click to copy',
                        }));
                      }.bind(this),
                      3000
                    );
                  }}
                >
                  <p>reboothack@reboothack.is</p>
                </button>
              )}
              <div className="footer-copy-text">{this.state.copied}</div>
            </div>
            <div className="footer--social">
              <a
                href="https://www.facebook.com/reboothackiceland/"
                rel="noopener noreferrer"
                target="_blank"
                className="fa fa-facebook"
              >
                <span>Reboot Hack Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/reboothackiceland/"
                rel="noopener noreferrer"
                target="_blank"
                className="fa fa-instagram"
              >
                <span>Reboot Hack Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/reboot-hack-iceland/"
                rel="noopener noreferrer"
                target="_blank"
                className="fa fa-linkedin"
              >
                <span>Reboot Hack LinkedIn</span>
              </a>
            </div>
          </div>
          <a
            href="https://github.com/fridasnaedis/reboot_hackathon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={`${baseurl}/images/GitHub-Mark-32px.png`} alt="github" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;

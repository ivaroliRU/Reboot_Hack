import React, { Component } from 'react';
import Translate from '../../../translate';
import './reboot2020Signup.css';

class Reboot2020Signup extends Component {
  render() {
    const { reboot2020Signup } = this.props.translations.home;

    return (
      <div className="reboot2020Signup">
        <a
          href={'mailto:reboothack@reboothack.is'}
        >
          {reboot2020Signup.signupText}
        </a>
      </div>
    );
  }
}

export default Translate(Reboot2020Signup);

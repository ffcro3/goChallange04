import React, { Component } from 'react';

// CSS
import './Header.css';

import logo from '../../assets/fb.png';
import pushNotifications from '../../assets/fb_push.png';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <img src={logo} className="logo" alt="FacebookLogo" />
          <span className="header">
            <img src={pushNotifications} className="notifications" />
          </span>
        </div>
      </>
    );
  }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import gitlogo from '../images/gitlogo.png';
import phonelogo from '../images/phonelogo.png';
import emaillogo from '../images/emaillogo.png';
import fblogo from '../images/fb.png';
import instalogo from '../images/insta.png'

export default class Contact extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="content">
        <div className="contactContent">
          <p><a href="https://facebook.com"><img src={fblogo} className="contactLogo"/></a></p>
          <p><a href="tel:9199243574"><img src={phonelogo} className="contactLogo"/></a></p>
          <p><a href="mailto:jellis720@gmail.com"><img src={emaillogo} className="contactLogo"/></a></p>
          <p><a href="https://github.com/jellis720"><img src={gitlogo} className="contactLogo"/></a></p>
          <p><a href="https://instagram.com/"><img src={instalogo} className="contactLogo"/></a></p>
        </div>
      </div>
      </BaseLayout>
    );
  }
}

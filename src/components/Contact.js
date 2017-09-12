import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import gitlogo from '../images/gitlogo.png'
import phonelogo from '../images/phonelogo.png'
import emaillogo from '../images/emaillogo.png'


export default class Contact extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="content">
        <div className="contactContent">
          <p><a href="tel:9199243574"><img src={phonelogo} className="contactLogo"/></a></p>
          <p><a href="mailto:jellis720@gmail.com"><img src={emaillogo} className="contactLogo"/></a></p>
          <p><a href="https://github.com/jellis720"><img src={gitlogo} className="contactLogo"/></a></p>
          <p></p>
        </div>
      </div>
      </BaseLayout>
    );
  }
}

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logoImage from '../images/logo.jpg'

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav>
          <div>
            <div className="navbar-fixed-top">
              <ul className="navbar-nav">
                <li className="nav-link">
                  <NavLink to="/" className="navText"><img src={logoImage} className="logoImage"/></NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/About" className="navText">Our Team</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Products" className="navText">Our Software</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Services" className="navText">Custom Needs</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Contact" className="navText">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
          <p>©Duality Development and Consulting, 2017. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

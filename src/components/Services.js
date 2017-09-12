import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import image2 from '../images/outWithTheOld.jpg'

export default class Services extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="innerContent">
        <img src={image2} className="servicesPicture"/>
        <p>Need custom work? No problem! Here is a list of services we can offer to help your company succeed.</p>
      </div>
      <div className="tableContent">
      <table>
        <tr>
          <th>Service</th>
          <th>Description</th>
          <th>Price Estimate</th>
        </tr>
        <tr>
          <td>Website Upgrade</td>
          <td>Taking a preexisting website and providing a facelift to modernize your look.</td>
          <td>$250-$750</td>
        </tr>
        <tr>
          <td>Basic Website</td>
          <td>A ground up build of a new website for your personal or business needs.</td>
          <td>$500-$2000</td>
        </tr>
        <tr>
          <td>Website + Mobile App</td>
          <td>The same package as above as well as a custom built mobile app.</td>
          <td>$2000-$6000</td>
        </tr>
      </table>
      </div>
      </BaseLayout>
    );
  }
}

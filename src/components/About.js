import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class About extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="jumbotron title-md">
          <h1 className="pageName">Our Team</h1>
      </div>
      <div className="content">
        <div className="innerContent">
        <p>
          Founded after an intense 12 week development bootcamp, Duality Development and Consulting came to be when four graduates decided that venturing out on their own was better than going back to the 9 to 5 life. With that notion, a company was born. After forming a good working relationship, Duality D & C is able to bring comprehensive solutions to your web based issues. Need a basic website? No problem! What about an app that's a little larger with a large database of users that's fully interactive? We can do that to. Maybe you're thinking that you need to update an existing website or app and rollout new features? The sky is the limit and we're here to help. Please visit our <a href="/Contact" className="innerContentTag">contact</a> page for more information.
        </p>
      </div>
      <div className="jumbotron title-sm">
        <h3 className="pageName">Why Duality</h3>
      </div>
      <div className="aboutContent">
        <p>When you hear the word "duality", what comes to mind? For us, it's two-fold. </p>
        <p>First, we envision a stylistic view point. Through an eclectic team, we are able to provide a design to fit YOUR style and your company needs. Through an extensive portfolio of work, we show our range of both clean, elegant designs as well as bright, abstract concepts.</p>
        <p>Second, we consider our offerings to you, our client. Our team is able to provide you with services on both the front-end as well as back-end. Whether you need great visual representation or a strong server side structure, Duality is here to help</p>
        </div>
      </div>
      </BaseLayout>
    );
  }
}

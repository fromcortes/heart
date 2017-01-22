import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const blackLogo =     require('../../img/roc-logo.png');

    return (
      <div id="Footer" className="pv2 mt4">
        <img src={blackLogo} alt="Rate of Change Logo" className="db h3 center mb3 tc"/>
        <a href="http://designinc.com/o/cd" className="link black-40 hover-light-blue f5 db tc i">Sponsored by Design Inc.</a>
        <div className="tc mt3 mb4">
          <a href="#" title="Subscribe" className="f6 dib ph2 link blue b hover-light-blue">Subscribe</a>
          <a href="#" title="Sponsor" className="f6 dib ph2 link blue b hover-light-blue">Sponsor</a>
          <a href="#" title="Contact" className="f6 dib ph2 link blue b hover-light-blue">Contact</a>
        </div>
        <small className="f6 db tc f7 black-20">© 2017 <b>Dennis Cortés</b>, All Rights Reserved</small>
      </div>
    );
  }
}

export default Footer;

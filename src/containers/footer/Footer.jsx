import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    {/* <div className="gpt3__footer-btn">
      <p>Contact </p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>OCPL Trades, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
      {/* <h4>Get in touch</h4>
        <p>OCPL Trades</p>
        <p>+91 9555-555-801</p>
        <p>info@ocpl.tech</p> */}
      </div>
      <div className="gpt3__footer-links_div">
      <h4>Get in touch</h4>
        <p>Manish Soni</p>
        <p>CEO and Director</p>
        <p> +91 9555-555-801</p>
        <p>info@ocpl.tech</p>
      </div>
      <div className="gpt3__footer-links_div">
        {/* <h4>Get in touch</h4>
        <p>OCPL Trades</p>
        <p>+91 9555-555-801</p>
        <p>info@ocpl.tech</p> */}
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 OCPL Trades. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

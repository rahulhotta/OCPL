import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started. Mail at info@ocpl.tech</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      {/* <p>If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.</p> */}
      {/* <h4>Request Early Access to Get Started. Mail at info@ocpl.tech</h4> */}
    </div>
  </div>
);

export default Possibility;

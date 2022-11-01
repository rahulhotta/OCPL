import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end to end connectivity',
    text: 'By Inetgrating Our Best-in-class frameworks and Solutions. Security will only be History.',
  },
  {
    title: 'Escalating ahead of Competetion',
    text: 'Getting ahead is competetion not only depend on your product but truly on your Implementation.',
  },
  {
    title: 'You plan your success, Infinity',
    text: 'You Plan your success, and we will take care of your tech needs.',
  },
  {
    title: 'Moving Forward, Always',
    text: 'Continuous Upgrade is the minimum requirement for success in any field.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

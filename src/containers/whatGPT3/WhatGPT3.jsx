import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is OCPL Trades?" text="If you don't innovate fast, disrupt your industry, disrupt yourself, you'll be left behind. We at OCPL is one of the most advanced tech companies using top framweorks to create your tech needs.
      Its just a matter of time when India will be the pioneer in Technology Advancement." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots can be an incredibly useful tool when it comes to forging good customer relationships. Your business can leverage it to build strong connections by engaging, and interacting with, users coming to the website." />
      <Feature title="App Development" text="Offering the best possible mobile app experience will ensure you are best placed to take advantage of changing consumer habits." />
      <Feature title="Custom Enterprise Solutions" text="Creating a Custom Enterprise Solution helps Business Owners, Controlling Every aspect of there business sector on tips." />
      <Feature title="Web Development" text="We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites." />

    </div>
  </div>
);

export default WhatGPT3;

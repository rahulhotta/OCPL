import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Integrated with TradingView.</h1>
      {/* <p>If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.</p> */}

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Creating Complex Custom Solutions for Enterprises.</p>
      </div> */}
    </div>

    {/* <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
    const App = () ={'>'} (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="en"
    
  />
);

  </div>
);

export default Header;

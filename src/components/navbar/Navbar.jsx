import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          {/* <p><a href="#dev">Development</a></p> */}
          <p>
            <Link to="/BlockChain">Blockchain</Link>
          </p>
          <p>
            <Link to="/WebsiteDevelopment">Website Development</Link>
          </p>
          <p>
            <Link to="/Library">Library</Link>
          </p>
          <p>
            <Link to="/Contact">Contact Us</Link>
          </p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="/">Home</Link>
              </p>
              {/* <p><a href="#wgpt3">What is GPT3?</a></p> */}
              <p>
                <Link to="/BlockChain">Blockchain</Link>
              </p>
              <p>
                <Link to="/WebsiteDevelopment">Website Development</Link>
              </p>
              <p>
                <Link to="/Library">Library</Link>
              </p>

              <p>
                <Link to="/Contact">Contact Us</Link>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              {/* <p>Sign in</p>
            <button type="button">Sign up</button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

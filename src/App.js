import React from 'react';
import {  Routes, Route } from "react-router-dom";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import Home from './Pages/Home'
import BlockChain from './Pages/BlockChain'
import WebsiteDevelopment from './Pages/WebsiteDevelopment'
import Library from './Pages/Library'
import ContactUs from './Pages/ContactUs'

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      {/* <Header /> */}
    </div>

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/BlockChain" exact element={<BlockChain />} />
      <Route
        path="/WebsiteDevelopment"
        exact
        element={<WebsiteDevelopment />}
      />
      <Route path="/Library" exact element={<Library />} />
      <Route path="/Contact" exact element={<ContactUs />} />
    </Routes>

    {/* <Brand /> */}
    {/* <WhatGPT3 /> */}
    {/* <Features /> */}
    {/* <Possibility /> */}
    {/* <CTA /> */}
    {/* <Blog /> */}
    {/* <Footer /> */}
  </div>
);

export default App;


import '../App.css';
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <h3 id="left-icon">Github Repository</h3>
      <div className="title-container">
        <h1 id="nav-title">Divided We Fall</h1>
        <h6 id="subnav-title">Political Sentiment Analysis</h6>
      </div>
      <h3 id="right-icon">About Our Project</h3>
    </header>
  );
};

export default Navbar;
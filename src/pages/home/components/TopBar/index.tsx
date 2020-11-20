import React from 'react';
import './style.css';
function TopBar() {
  return (
    <header id="top-bar">
      <nav id="links">
        <div className="top-bar-link">
          <a href="#" >News</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Matches</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Results</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Events</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Stats</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Galleries</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Forums</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Bets</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Live</a>
        </div>
        <div className="top-bar-link">
          <a href="#" >Fantasy</a>
        </div>
      </nav>
      <div id="search-box">
        <div id="search-box-input">
          <input type="text" placeholder="Search..." />
          <div id="search-icon-box">
            <i id="search-icon" className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div id="user-actions">
        <div id="user-bell-envelope">
          <div className="user-icon">
            <i className="fa fa-bell"></i>
          </div>
          <div className="user-icon">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
        <div id="user-caret">
          <i className="fa fa-caret-down"></i>
        </div>
      </div>
    </header>
  )
}

export default TopBar;

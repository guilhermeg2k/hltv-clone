import React from 'react';
import './style.css';
import shirt from '../../../../assets/images/hltv_shirt.png';
import appleStore from '../../../../assets/images/appleStore.svg';
import playStore from '../../../../assets/images/playStore.png';
import app from '../../../../assets/images/app.png';
import gamcare from '../../../../assets/images/gamcare.png';
import gambleAware from '../../../../assets/images/gambleaware.png';
function Footer() {
  return (
    <footer id="page-footer-wraper">
      <div id="page-footer">
        <div id="merch-app">
          <div id="hltv-merchandise">
            <div id="hltv-merchandise-buy">
              <h2>HLTV merchandise</h2>
              <span>Show your support for HLTV with our HLTV t-shirt</span>
              <div id="merch-buy-btn">
                <span>Buy HLTV t-shirt</span>
              </div>
            </div>
            <img src={shirt} alt="hltv shirt" />
          </div>
          <div id="hltv-app">
            <div id="hltv-app-download">
              <h2>Download the HLTV app</h2>
              <span>Optimized to keep you up to date on the go</span>
              <div id="app-downloads">
                <img src={appleStore} alt="AppStore image" />
                <img id="playStore" src={playStore} alt="PlayStore image" />
              </div>
            </div>
            <img src={app} alt="hltv shirt" />
          </div>
        </div>
        <div className="footer-links">
          <a href="#">
            Jobs
          </a>
          <a href="#">
            Contact
          </a>
          <a href="#">
            Terms
          </a>
          <a href="#">
            Privacy policy
          </a>
          <a href="#">
            Cookie policy
          </a>
          <a href="#">
            Disclosures
          </a>
          <a href="#">
            RSS
        </a>
          <div id="media-links">
            <i id="media-icon" className="fa fa-facebook"></i>
            <i id="media-icon" className="fa fa-twitch"></i>
            <i id="media-icon" className="fa fa-youtube"></i>
            <i id="media-icon" className="fa fa-twitter"></i>
            <i id="media-icon" className="fa fa-vk"></i>
            <i id="media-icon" className="fa fa-instagram"></i>
          </div>
          <span id="hltv-mark">© HLTV.org</span>
        </div>
        <div id="gamble-aware">
          <img src={gamcare} alt="gamble care image" />
          <span>18+ Bet Responsibly |</span>
          <img src={gambleAware} alt="gamble aware image" />
        </div>
      </div>

    </footer>
  )
}

export default Footer;

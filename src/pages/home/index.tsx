import React from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';
import ad1 from '../../assets/images/ad1.png';
import ad2 from '../../assets/images/ad2.png';
import ad3 from '../../assets/images/ad3.png';
import ad4 from '../../assets/images/ad4.png';
import Team from './components/RankingTeam';
import Event from './components/Events';
import PlayerOfTheWeek from './components/PlayerOfTheWeek';
import fakeData from '../../fakeData';
function Home() {
  return (
    <>
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
      <div id="main">
        <div id="logo">
          <a href="#"><img src={logo} alt="logo" id="logo-img" /></a>
          <a href="#"><img src={ad1} alt="logo" /></a>
          <a href="#"><img src={ad2} alt="logo" /></a>
        </div>
        <div id="main-content">
          <aside id="left-content">
            <div id="loot-bet-ad">
              <a href="#"><img src={ad3} alt="Loot bet ad" /></a>
            </div>
            <PlayerOfTheWeek
              name={fakeData.playerOfTheWeek.name}
              nickName={fakeData.playerOfTheWeek.nickName}
              photoUrl={fakeData.playerOfTheWeek.photoUrl}
              team={fakeData.playerOfTheWeek.team}
              data={fakeData.playerOfTheWeek.data}
            />
            <div id="betway-ad">
              <a href="#"><img src={ad4} alt="betway" /></a>
            </div>
            <div id="ranking">
              <h5><a href="#">RANKING</a></h5>
              <div id="teams-box">
                {fakeData.teamsData.map(team => (
                  <Team rank={team.rank} name={team.name} logoUrl={team.logoUrl} />
                ))}
              </div>
              <div id="complete-ranking">
                <span>Complete ranking</span>
                <span>Last updated: 26th of Oct</span>
              </div>
            </div>
            <div id="events">
              <h5><a href="#">EVENTS</a></h5>
              <div id="events-box">
                {fakeData.eventsData.map(event => (
                  <Event name={event.name} daysToStart={event.daysToStart} logoUrl={event.logoUrl} />
                ))}

              </div>
            </div>
          </aside>
          <div id="center-content">CENTER</div>
          <aside id="right-content">
          </aside>
        </div>
      </div>
    </>
  )
}

export default Home;

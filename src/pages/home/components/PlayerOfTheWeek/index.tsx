import React from 'react';

import './style.css';
interface PlayerOfTheWeekProps {
  name: string,
  nickName: string,
  photoUrl: string,
  team: {
    name: string,
    iconUrl: string
  }
  data:
  {
    name: string,
    value: string
  }
}
const PlayerOfTheWeek: React.FC<PlayerOfTheWeekProps> = ({ name, nickName, photoUrl, team, data }) => {
  return (
    <div id="player-of-the-week">
      <div id="player-image-box">
        <img id="player-image" alt={name} title={name} src={photoUrl} />
      </div>
      <div id="player-team-image-box">
        <img id="player-team-image" alt={team.name} title={team.name} src={team.iconUrl} />
      </div>
      <div id="player-data">
        <header>
          <strong>{nickName}</strong>
          <span>Player of the week</span>
        </header>
        <footer>
          <strong>{data.value}</strong>
          <span>{data.name}</span>
        </footer>
      </div>
    </div>

  )

}

export default PlayerOfTheWeek;

import React from 'react';
import './style.css';

interface TeamInfo {
  name: string,
  icon: string,
  mapPoints?: number,
  roundPoints?: number,

}

interface MatchProps {
  title?: string,
  time?: string,
  teams: {
    1: TeamInfo,
    2: TeamInfo
  }
}

const Match: React.FC<MatchProps> = ({ title, teams }) => {
  return (
    <div className="match">
      <div className="match-team-points">
        <div className="match-team">
          <img src={teams[1].icon} alt={teams[1].name} />
          <span>{teams[1].name}</span>
        </div>
        <div>
          <span
            className={(teams[1].roundPoints! > teams[2].roundPoints!) ? "match-round-points green" : "match-round-points red"}>
            {teams[1].roundPoints}
          </span>
          {(teams[1].mapPoints != null) ?
            (<span>(<span
              className={
                (teams[1].mapPoints == teams[2].mapPoints) ? "" : (teams[1].mapPoints! > teams[2].mapPoints! ? "green" : "red")
              }
            >{teams[1].mapPoints}</span>)</span>) : (<></>)
          }
        </div>
      </div>
      <div className="match-team-points">
        <div className="match-team">
          <img src={teams[2].icon} alt={teams[2].name} />
          <span>{teams[2].name}</span>
        </div>
        <div>
          <span
            className={(teams[2].roundPoints! > teams[1].roundPoints!) ? "match-round-points green" : "match-round-points red"}>
            {teams[2].roundPoints}
          </span>
          {(teams[2].mapPoints != null) ?
            (<span>(<span
              className={
                (teams[2].mapPoints == teams[1].mapPoints) ? "" : (teams[2].mapPoints! > teams[1].mapPoints! ? "green" : "red")
              }
            >{teams[2].mapPoints}</span>)</span>) : (<></>)
          }
        </div>
      </div>
    </div>
  )
}

export default Match;

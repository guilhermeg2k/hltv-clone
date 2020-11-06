import React from 'react';
import './style.css';

interface TeamInfo {
  name: string,
  icon: string,
  mapPoints?: number,
  roundPoints?: number,

}

interface MatchProps {
  time?: string,
  teams: {
    1: TeamInfo,
    2: TeamInfo
  }
}

const Match: React.FC<MatchProps> = ({ teams, time }) => {
  return (
    <div className="match">
      <div className="match-teams">
        <div className="match-team-points">
          <div className="match-team">
            <img src={teams[1].icon} alt={teams[1].name} />
            <span>{teams[1].name}</span>
          </div>
          <div className="team-point">
            {teams[1].roundPoints !== undefined && (
              <span
                className={(teams[1].roundPoints !== teams[2].roundPoints!) ? (teams[1].roundPoints > teams[2].roundPoints! ? "match-round-points green" : "match-round-points red") : "match-round-points"}>
                {teams[1].roundPoints}
              </span>
            )}
            {teams[1].mapPoints !== undefined && (
              <span> {teams[1].roundPoints !== undefined && (<span>(</span>)}
                <span
                  className={teams[1].mapPoints !== teams[2].mapPoints ? (teams[1].mapPoints > teams[2].mapPoints! ? "green" : "red") : ""}>
                  {teams[1].mapPoints}
                </span>{teams[1].roundPoints !== undefined && (<span>)</span>)}
              </span>
            )}
          </div>
        </div>
        <div className="match-team-points">
          <div className="match-team">
            <img src={teams[2].icon} alt={teams[2].name} />
            <span>{teams[2].name}</span>
          </div>
          <div className="team-point">
            {teams[2].roundPoints !== undefined && (
              <span
                className={(teams[2].roundPoints !== teams[1].roundPoints!) ? (teams[2].roundPoints > teams[1].roundPoints! ? "match-round-points green" : "match-round-points red") : "match-round-points"}>
                {teams[2].roundPoints}
              </span>
            )}
            {teams[2].mapPoints !== undefined && (
              <span> {teams[1].roundPoints !== undefined && (<span>(</span>)}
                <span
                  className={teams[2].mapPoints !== teams[1].mapPoints ? (teams[2].mapPoints > teams[1].mapPoints! ? "green" : "red") : ""}>
                  {teams[2].mapPoints}
                </span>{teams[1].roundPoints !== undefined && (<span>)</span>)}
              </span>
            )}
          </div>
        </div>
      </div>
      {time !== undefined && (
        <div className="match-time">
          <span> {time} </span>
          <span></span>
        </div>
      )}
    </div>
  )
}

export default Match;

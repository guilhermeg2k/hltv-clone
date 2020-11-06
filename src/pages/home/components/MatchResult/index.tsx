import React from 'react';
import './style.css';

interface TeamInfo {
  name: string,
  icon: string,
  mapPoints: number,
}

interface MatchProps {
  title: string,
  teams: {
    1: TeamInfo,
    2: TeamInfo
  }
}

const Match: React.FC<MatchProps> = ({ title, teams }) => {
  return (
    <div className="match-result">
      <div className="match-result-teams">
        <div className="match-result-title">
          <span >{title}</span>
        </div>
        <div className="match-result-team-points">
          <div className="match-result-team">
            <img src={teams[1].icon} alt={teams[1].name} />
            <span>{teams[1].name}</span>
          </div>
          <div>
            {teams[1].mapPoints !== undefined && (
              <span
                className={teams[1].mapPoints !== teams[2].mapPoints ? (teams[1].mapPoints > teams[2].mapPoints! ? "green" : "red") : ""}>
                {teams[1].mapPoints}
              </span>
            )}
          </div>
        </div>
        <div className="match-result-team-points">
          <div className="match-result-team">
            <img src={teams[2].icon} alt={teams[2].name} />
            <span>{teams[2].name}</span>
          </div>
          <div>
            {teams[2].mapPoints !== undefined && (
              <span
                className={teams[2].mapPoints !== teams[1].mapPoints ? (teams[2].mapPoints > teams[1].mapPoints! ? "green" : "red") : ""}>
                {teams[2].mapPoints}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match;

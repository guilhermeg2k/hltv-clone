import React from 'react';
import './style.css';

interface TeamProps {
  rank: number,
  name: string,
  logoUrl: string
}

const Team: React.FC<TeamProps> = ({ rank, name, logoUrl }) => {
  return (
    <div id="team">
      <a href="#">
        <span id="team-rank">{rank}.</span>
      </a>
      <img src={logoUrl} />
      <a href="#">
        <span>{name}</span>
      </a>
    </div>
  );
}

export default Team;

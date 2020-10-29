import React from 'react';
import './style.css';

interface TeamProps {
  name: string,
  daysToStart?: string,
  logoUrl: string
}

const Team: React.FC<TeamProps> = ({ name, daysToStart, logoUrl }) => {
  return (
    <div id="event">
      <img src={logoUrl} />
      <div id="event-data">
        <a href="#">
          <h4>{name}</h4>
        </a>
        {daysToStart != null ? (
          <a href="#">
            <span>{daysToStart}</span>
          </a>
        ) : (<></>)}
      </div>
    </div>
  );
}

export default Team;

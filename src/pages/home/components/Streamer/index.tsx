import React from 'react';
import './style.css';
interface StreamerProps {
  typeIcon: string,
  flagIcon: string,
  name: string,
  viewers: number
}

const Streamer: React.FC<StreamerProps> = ({ typeIcon, flagIcon, name, viewers }) => {
  return (
    <div className="streamer">
      <div className="streamer-info">
        <img src={typeIcon} alt="streamer type" />
        <img className="streamer-flag" src={flagIcon} alt="streamer flag" />
        <span>{name}</span>
      </div>
      <div className="streamer-viewers">
        {viewers}
      </div>
    </div>
  )
}

export default Streamer;

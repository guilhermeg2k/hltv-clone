import React from 'react';
import './style.css';

interface ActivityProps {
  type: number,
  title: string,
  comments: number
};

const Activity: React.FC<ActivityProps> = ({ type, title, comments }) => {
  return (
    <div className={
      type === 0 ? "activity community" :
        (type === 1 ? "activity official" :
          (type === 2 ? "activity announcement" : ""))
    }>
      <span className="activity-title">{title}</span>
      <span className="activity-comments">{comments}</span>
    </div>
  )
};

export default Activity;

import React from 'react';
import './style.css';

interface NewsProps {
  flagUrl: string,
  title: string,
  time: string,
  comments: number
}

const News: React.FC<NewsProps> = ({ flagUrl, title, time, comments }) => {
  return (
    <div className="news">
      <div className="news-info">
        <img src={flagUrl} alt={`${title} image`} />
        <span className="news-title">{title}</span>
      </div>
      <div className="news-time">
        <span className="news-time-hour">{time}</span>
        <span>{`${comments} comments`}</span>
      </div>
    </div>
  );
}

export default News;

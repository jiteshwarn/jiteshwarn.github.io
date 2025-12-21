import React from 'react';

const TimelineItem = ({ date, title, company, location }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default TimelineItem;


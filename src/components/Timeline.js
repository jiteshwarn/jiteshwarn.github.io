import React from 'react';
import TimelineItem from '../components/TimelineItem';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          company={item.company}
          location={item.location}
        />
      ))}
    </div>
  );
};

export default Timeline;


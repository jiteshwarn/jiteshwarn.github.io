import React from 'react';

const HeroHighlights = ({ highlights }) => {
  if (!highlights) return null;

  return (
    <div className="hero-highlights">
      {highlights.map((highlight, index) => (
        <div key={index} className="highlight-item">
          ✓ {highlight}
        </div>
      ))}
    </div>
  );
};

export default HeroHighlights;


import React from 'react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: "⚡",
      title: "Performance Obsessed",
      description: "Optimized applications for millions of users"
    },
    {
      icon: "🧠",
      title: "AI-Ready Frontend",
      description: "Integrating ML models into user interfaces"
    },
    {
      icon: "🛠️",
      title: "Modern Tooling Expert",
      description: "GitHub Copilot, ESLint, Storybook, Figma"
    },
    {
      icon: "🌐",
      title: "Full-Stack Understanding",
      description: "Node.js, APIs, and backend integration"
    }
  ];

  return (
    <div className="differentiators">
      <h3>What Sets Me Apart:</h3>
      <div className="diff-grid">
        {differentiators.map((diff, index) => (
          <div key={index} className="diff-item">
            <span className="diff-icon">{diff.icon}</span>
            <div>
              <strong>{diff.title}</strong>
              <p>{diff.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Differentiators;


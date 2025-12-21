import React from 'react';

const TechStackMarquee = () => {
  const techStack = [
    "⚛️ React.js",
    "📘 TypeScript",
    "🅰️ Angular",
    "🔄 Redux",
    "📦 Webpack",
    "🎨 CSS3",
    "🤖 Machine Learning",
    "✨ Generative AI",
    "🔗 Node.js",
    "🎯 REST APIs"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
        {/* Duplicate for seamless loop */}
        {techStack.map((tech, index) => (
          <span key={`dup-${index}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default TechStackMarquee;


import React from 'react';

export const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <button className="dark-mode-toggle" onClick={onToggle} aria-label="Toggle dark mode">
      <div className={`toggle-track ${isDark ? 'dark' : ''}`}>
        <span className="toggle-icon sun">☀️</span>
        <span className="toggle-icon moon">🌙</span>
        <div className="toggle-thumb" />
      </div>
    </button>
  );
};


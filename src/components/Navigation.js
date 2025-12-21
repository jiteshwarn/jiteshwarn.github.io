import React from 'react';
import { GradientText, DarkModeToggle } from '../common/CreativeEffects';

const Navigation = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <GradientText>JN</GradientText>
        </h1>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <DarkModeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;


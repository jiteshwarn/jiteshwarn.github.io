import React from 'react';

const SkillBar = ({ name, level, isEmphasized = false }) => {
  return (
    <div className={`skill ${isEmphasized ? "emphasized" : ""}`}>
      <div className="skill-info">
        <span>{name} {isEmphasized && "⭐"}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;


import React from 'react';
import type { SkillBarProps } from '../types';

const SkillBar: React.FC<SkillBarProps> = ({ name, level, isEmphasized }) => {
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


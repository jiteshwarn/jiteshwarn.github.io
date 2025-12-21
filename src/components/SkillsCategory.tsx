import React from 'react';
import SkillBar from '../components/SkillBar';
import type { SkillsCategoryProps } from '../types';

const SkillsCategory: React.FC<SkillsCategoryProps> = ({ title, skills, isEmphasized }) => {
  return (
    <div className="skills-category">
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          name={skill.name}
          level={skill.level}
          isEmphasized={isEmphasized(skill.name)}
        />
      ))}
    </div>
  );
};

export default SkillsCategory;


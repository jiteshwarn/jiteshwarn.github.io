import React from 'react';
import SkillsCategory from '../components/SkillsCategory';

const Skills = ({ companyProfile }) => {
  // Check if skill should be emphasized
  const isEmphasized = (skillName) => {
    if (!companyProfile.skillsEmphasis) return false;
    return companyProfile.skillsEmphasis.includes(skillName);
  };

  const frontendSkills = [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Angular", level: 90 },
    { name: "Redux", level: 85 },
    { name: "HTML5/CSS3", level: 95 }
  ];

  const toolsSkills = [
    { name: "Node.js", level: 75 },
    { name: "Machine Learning", level: 70 },
    { name: "GenAI", level: 75 },
    { name: "Webpack", level: 85 },
    { name: "GitHub Copilot", level: 85 },
    { name: "Figma", level: 80 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <SkillsCategory
            title="Frontend Development"
            skills={frontendSkills}
            isEmphasized={isEmphasized}
          />
          <SkillsCategory
            title="Tools & Emerging Tech"
            skills={toolsSkills}
            isEmphasized={isEmphasized}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import ValueProposition from '../components/ValueProposition';
import AchievementCards from '../components/AchievementCards';
import Differentiators from '../components/Differentiators';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Why Hire Me?</h2>
        <ValueProposition />
        <AchievementCards />
        <Differentiators />
      </div>
    </section>
  );
};

export default About;


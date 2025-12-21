import React from 'react';
import { TiltCard } from '../common/CreativeEffects';

const AchievementCards = () => {
  const achievements = [
    {
      icon: "🏢",
      title: "Enterprise Impact",
      description: (
        <>
          Led frontend development for Fortune 500 clients across{" "}
          <strong>IoT, OTT, Healthcare & FinTech</strong>
        </>
      )
    },
    {
      icon: "🎓",
      title: "IIT Jodhpur",
      description: (
        <>
          Pursuing <strong>M.Tech in AI/ML</strong> – bridging frontend
          with artificial intelligence
        </>
      )
    },
    {
      icon: "🤖",
      title: "GenAI Certified",
      description: (
        <>
          <strong>Generative AI Mastermind</strong> – Ready to implement
          AI-powered features
        </>
      )
    },
    {
      icon: "👨‍💼",
      title: "Leadership",
      description: (
        <>
          <strong>Lead Developer</strong> at CSG Systems – Mentoring
          teams & driving architecture
        </>
      )
    }
  ];

  return (
    <div className="about-grid stagger-children">
      {achievements.map((achievement, index) => (
        <TiltCard key={index}>
          <div className="about-card achievement shine-effect">
            <h3>{achievement.icon} {achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        </TiltCard>
      ))}
    </div>
  );
};

export default AchievementCards;


import React from 'react';
import {
  TypeWriter,
  ParticleBackground,
  GradientText,
} from '../common/CreativeEffects';
import HeroStats from '../components/HeroStats';
import HeroHighlights from '../components/HeroHighlights';
import HeroButtons from '../components/HeroButtons';
import SocialLinks from '../components/SocialLinks';

const Hero = ({ companyProfile }) => {
  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="container">
        <div className="hero-content">
          <p className="hero-tagline floating">
            🚀 Available for Opportunities
          </p>
          <h1 className="hero-title">
            <GradientText animate>Jiteshwar Nishad</GradientText>
          </h1>
          <p className="hero-subtitle">
            <TypeWriter
              texts={[
                "Front End Lead Developer",
                "Gen AI & ML Engineer",
                "React.js Expert",
                "IIT Jodhpur M.Tech",
                "13+ Years Experience",
              ]}
              speed={80}
              deleteSpeed={40}
              pauseTime={2000}
            />
          </p>
          <p className="hero-description">{companyProfile.headline}</p>

          <HeroStats />
          <HeroHighlights highlights={companyProfile.highlights} />
          <HeroButtons />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;


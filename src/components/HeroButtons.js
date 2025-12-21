import React from 'react';
import { GlowButton } from '../common/CreativeEffects';

const HeroButtons = () => {
  return (
    <div className="hero-buttons">
      <GlowButton href="#contact">📧 Hire Me</GlowButton>
      <GlowButton href="https://www.linkedin.com/in/jiteshwar-nishad-21018517b/">
        💼 LinkedIn
      </GlowButton>
      <GlowButton href="https://bold.pro/my/jiteshwar-nishad-250426153343">
        📄 Full Resume
      </GlowButton>
    </div>
  );
};

export default HeroButtons;


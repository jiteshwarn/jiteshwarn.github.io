import React from 'react';
import { GradientText } from '../common/CreativeEffects';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          ✨ Crafted with <GradientText>React.js</GradientText> &{" "}
          <GradientText>AI</GradientText> by Jiteshwar Nishad ©{" "}
          {new Date().getFullYear()}
        </p>
        <p className="footer-tagline">
          Frontend Lead Developer | Gen AI & ML Engineer | IIT Jodhpur
        </p>
      </div>
    </footer>
  );
};

export default Footer;


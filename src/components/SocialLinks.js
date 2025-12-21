import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/jiteshwar-nishad-21018517b/",
      icon: "in",
      tooltip: "LinkedIn"
    },
    {
      href: "https://github.com/jiteshwarn",
      icon: "⌘",
      tooltip: "GitHub"
    },
    {
      href: "mailto:jiteshnishad1989@gmail.com",
      icon: "✉",
      tooltip: "Email Me"
    }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('http') ? "_blank" : undefined}
          rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
          className="social-link tooltip"
          data-tooltip={link.tooltip}
        >
          <span>{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;


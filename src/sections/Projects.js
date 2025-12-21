import React from "react";
import { TiltCard } from "../common/CreativeEffects";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Portfolio Chatbot",
      icon: "🤖",
      description:
        "Built an intelligent portfolio assistant using Google Gemini AI and Python FastAPI. The chatbot provides context-aware responses about my skills, experience, and projects.",
      tech: ["Python", "FastAPI", "Google Gemini AI", "React", "REST API"],
      features: [
        "Real-time AI responses using Gemini 2.5 Flash",
        "Python FastAPI backend deployed on Render",
        "Secure API integration with environment variables",
        "Context-aware responses about portfolio content",
        "Error handling with graceful fallbacks",
      ],
      github: "https://github.com/jiteshwarn/portfolio-chatbot-api",
      live: "https://portfolio-chatbot-api-vtye.onrender.com",
      highlight: true,
    },
    {
      title: "Modern Portfolio Website",
      icon: "🎨",
      description:
        "Fully responsive portfolio showcasing 13+ years of frontend experience. Features modular component architecture, creative effects, and dark mode.",
      tech: ["React", "JavaScript", "CSS3", "GitHub Pages"],
      features: [
        "18 reusable components with single responsibility",
        "5 organized sections with clean architecture",
        "Particle effects and 3D tilt cards",
        "Company-specific customization via URL params",
        "Fully responsive design",
      ],
      github: "https://github.com/jiteshwarn/my-portfolio",
      live: "https://jiteshwarn.github.io",
      highlight: false,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications showcasing full-stack development and AI
          integration
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <TiltCard key={index}>
              <div
                className={`project-card ${
                  project.highlight ? "highlight" : ""
                }`}
              >
                {project.highlight && (
                  <div className="project-badge">✨ Latest</div>
                )}

                <div className="project-header">
                  <span className="project-icon">{project.icon}</span>
                  <h3>{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>⌘</span> View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    <span>🚀</span> Live Demo
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="projects-cta">
          <p>
            💡 <strong>Technical Implementation:</strong> The AI chatbot
            demonstrates full-stack development: React frontend communicates
            with Python FastAPI backend via REST API, which integrates with
            Google Gemini for intelligent responses. All deployed at zero cost
            using GitHub Pages and Render's free tier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

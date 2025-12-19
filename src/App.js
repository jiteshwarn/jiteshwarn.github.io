import "./App.css";
import { useState, useEffect } from "react";
import { getCompanyProfile } from "./companyProfiles";
import AIChat from "./AIChat";
import {
  TypeWriter,
  ParticleBackground,
  TiltCard,
  DarkModeToggle,
  GradientText,
  GlowButton,
  AnimatedCounter,
} from "./CreativeEffects";
import "./CreativeEffects.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [companyProfile, setCompanyProfile] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Get company parameter from URL and load profile
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const company = params.get("company");
    const profile = getCompanyProfile(company);
    setCompanyProfile(profile);

    // Apply dynamic theme colors
    if (profile && profile.theme) {
      document.documentElement.style.setProperty(
        "--primary-color",
        profile.theme.primary
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        profile.theme.secondary
      );
      document.documentElement.style.setProperty(
        "--hero-gradient",
        profile.theme.gradient
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show loading state until profile is loaded
  if (!companyProfile) {
    return <div className="loading">Loading...</div>;
  }

  // Check if skill should be emphasized
  const isEmphasized = (skillName) => {
    if (!companyProfile.skillsEmphasis) return false;
    return companyProfile.skillsEmphasis.includes(skillName);
  };

  return (
    <div className="App">
      {/* Company-specific banner */}
      {companyProfile.name !== "Default" && (
        <div className="company-banner">
          <div className="container">
            <span>👋 Customized for {companyProfile.name}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">
            <GradientText>JN</GradientText>
          </h1>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <DarkModeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
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

            {/* Key Stats - Recruiter Attention Grabbers */}
            <div className="hero-stats glass">
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter end={13} suffix="+" />
                </span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter end={4} />
                </span>
                <span className="stat-label">Fortune 500 Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">IIT</span>
                <span className="stat-label">Jodhpur M.Tech</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">AI/ML</span>
                <span className="stat-label">+ Frontend Expert</span>
              </div>
            </div>

            {/* Show company-specific highlights */}
            {companyProfile.highlights && (
              <div className="hero-highlights">
                {companyProfile.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    ✓ {highlight}
                  </div>
                ))}
              </div>
            )}

            <div className="hero-buttons">
              <GlowButton href="#contact">📧 Hire Me</GlowButton>
              <GlowButton href="https://www.linkedin.com/in/jiteshwar-nishad-21018517b/">
                💼 LinkedIn
              </GlowButton>
              <GlowButton href="https://bold.pro/my/jiteshwar-nishad-250426153343">
                📄 Full Resume
              </GlowButton>
            </div>

            {/* Social Links for Recruiters */}
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/jiteshwar-nishad-21018517b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tooltip"
                data-tooltip="LinkedIn"
              >
                <span>in</span>
              </a>
              <a
                href="https://github.com/jiteshwarn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tooltip"
                data-tooltip="GitHub"
              >
                <span>⌘</span>
              </a>
              <a
                href="mailto:jiteshnishad1989@gmail.com"
                className="social-link tooltip"
                data-tooltip="Email Me"
              >
                <span>✉</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Why Hire Me?</h2>

          {/* Value Proposition */}
          <div className="value-proposition">
            <h3>🎯 Unique Value: Frontend Excellence + AI/ML Innovation</h3>
            <p>
              One of the rare developers who combines{" "}
              <strong>13+ years of frontend leadership</strong> with
              <strong> cutting-edge AI/ML expertise from IIT Jodhpur</strong>. I
              don't just build interfaces – I create intelligent, data-driven
              user experiences.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="about-grid stagger-children">
            <TiltCard>
              <div className="about-card achievement shine-effect">
                <h3>🏢 Enterprise Impact</h3>
                <p>
                  Led frontend development for Fortune 500 clients across{" "}
                  <strong>IoT, OTT, Healthcare & FinTech</strong>
                </p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="about-card achievement shine-effect">
                <h3>🎓 IIT Jodhpur</h3>
                <p>
                  Pursuing <strong>M.Tech in AI/ML</strong> – bridging frontend
                  with artificial intelligence
                </p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="about-card achievement shine-effect">
                <h3>🤖 GenAI Certified</h3>
                <p>
                  <strong>Generative AI Mastermind</strong> – Ready to implement
                  AI-powered features
                </p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="about-card achievement shine-effect">
                <h3>👨‍💼 Leadership</h3>
                <p>
                  <strong>Lead Developer</strong> at CSG Systems – Mentoring
                  teams & driving architecture
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Key Differentiators */}
          <div className="differentiators">
            <h3>What Sets Me Apart:</h3>
            <div className="diff-grid">
              <div className="diff-item">
                <span className="diff-icon">⚡</span>
                <div>
                  <strong>Performance Obsessed</strong>
                  <p>Optimized applications for millions of users</p>
                </div>
              </div>
              <div className="diff-item">
                <span className="diff-icon">🧠</span>
                <div>
                  <strong>AI-Ready Frontend</strong>
                  <p>Integrating ML models into user interfaces</p>
                </div>
              </div>
              <div className="diff-item">
                <span className="diff-icon">🛠️</span>
                <div>
                  <strong>Modern Tooling Expert</strong>
                  <p>GitHub Copilot, ESLint, Storybook, Figma</p>
                </div>
              </div>
              <div className="diff-item">
                <span className="diff-icon">🌐</span>
                <div>
                  <strong>Full-Stack Understanding</strong>
                  <p>Node.js, APIs, and backend integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Frontend Development</h3>
              <div
                className={`skill ${
                  isEmphasized("React.js") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>React.js {isEmphasized("React.js") && "⭐"}</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("TypeScript") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>TypeScript {isEmphasized("TypeScript") && "⭐"}</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("JavaScript") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>JavaScript {isEmphasized("JavaScript") && "⭐"}</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("Angular") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>Angular {isEmphasized("Angular") && "⭐"}</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${isEmphasized("Redux") ? "emphasized" : ""}`}
              >
                <div className="skill-info">
                  <span>Redux {isEmphasized("Redux") && "⭐"}</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("HTML5/CSS3") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>HTML5/CSS3 {isEmphasized("HTML5/CSS3") && "⭐"}</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools & Emerging Tech</h3>
              <div
                className={`skill ${
                  isEmphasized("Node.js") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>Node.js {isEmphasized("Node.js") && "⭐"}</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("Machine Learning") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>
                    Machine Learning {isEmphasized("Machine Learning") && "⭐"}
                  </span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${isEmphasized("GenAI") ? "emphasized" : ""}`}
              >
                <div className="skill-info">
                  <span>Generative AI {isEmphasized("GenAI") && "⭐"}</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("Webpack") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>Webpack {isEmphasized("Webpack") && "⭐"}</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${
                  isEmphasized("GitHub Copilot") ? "emphasized" : ""
                }`}
              >
                <div className="skill-info">
                  <span>
                    GitHub Copilot {isEmphasized("GitHub Copilot") && "⭐"}
                  </span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`skill ${isEmphasized("Figma") ? "emphasized" : ""}`}
              >
                <div className="skill-info">
                  <span>Figma/Storybook {isEmphasized("Figma") && "⭐"}</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2019 - Present</div>
              <div className="timeline-content">
                <h3>Lead Front End Developer</h3>
                <h4>CSG Systems International</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2017 - 2019</div>
              <div className="timeline-content">
                <h3>Senior Front-End Developer</h3>
                <h4>Apttus</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2016 - 2017</div>
              <div className="timeline-content">
                <h3>Front-End Developer</h3>
                <h4>Capgemini India Pvt Ltd</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2013 - 2016</div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <h4>Accenture Pvt Ltd</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: "4rem" }}>
            Education
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024 - Present</div>
              <div className="timeline-content">
                <h3>M.Tech - Artificial Intelligence / Machine Learning</h3>
                <h4>IIT Jodhpur</h4>
                <p>Jodhpur, India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2007 - 2011</div>
              <div className="timeline-content">
                <h3>B.E. - Electronics & Telecommunication</h3>
                <h4>Government Engineering College</h4>
                <p>Bilaspur, India</p>
              </div>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: "4rem" }}>
            Certification
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Generative AI Mastermind</h3>
                <h4>Outskill</h4>
                <p>AI/ML Certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <h3>📍 Address</h3>
                <p>
                  H 214, Karthik Nagar
                  <br />
                  Bangalore, India
                </p>
              </div>
              <div className="contact-card">
                <h3>📱 Mobile Number</h3>
                <p>+91 9590325564</p>
              </div>
              <div className="contact-card">
                <h3>✉️ Email</h3>
                <p>jiteshnishad1989@gmail.com</p>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <h3>Get In Touch</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>⚛️ React.js</span>
          <span>📘 TypeScript</span>
          <span>🅰️ Angular</span>
          <span>🔄 Redux</span>
          <span>📦 Webpack</span>
          <span>🎨 CSS3</span>
          <span>🤖 Machine Learning</span>
          <span>✨ Generative AI</span>
          <span>🔗 Node.js</span>
          <span>🎯 REST APIs</span>
          <span>⚛️ React.js</span>
          <span>📘 TypeScript</span>
          <span>🅰️ Angular</span>
          <span>🔄 Redux</span>
          <span>📦 Webpack</span>
          <span>🎨 CSS3</span>
          <span>🤖 Machine Learning</span>
          <span>✨ Generative AI</span>
          <span>🔗 Node.js</span>
          <span>🎯 REST APIs</span>
        </div>
      </div>

      {/* Footer */}
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

      {/* AI Assistant - Browser-based LLM (Gemini Nano when available) */}
      <AIChat />
    </div>
  );
}

export default App;

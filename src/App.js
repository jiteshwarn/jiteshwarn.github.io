import "./App.css";
import { useState, useEffect } from "react";
import { getCompanyProfile } from "./companyProfiles";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [companyProfile, setCompanyProfile] = useState(null);

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
          <h1 className="logo">JN</h1>
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
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Jiteshwar Nishad</h1>
            <p className="hero-subtitle">Front End Lead Developer | Gen AI ML Engineer</p>
            <p className="hero-description">{companyProfile.headline}</p>

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
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#experience" className="btn btn-secondary">
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>💼 Experience</h3>
              <p>13+ Years</p>
            </div>
            <div className="about-card">
              <h3>🎓 Education</h3>
              <p>M.Tech AI/ML<br/>IIT Jodhpur (Ongoing)</p>
            </div>
            <div className="about-card">
              <h3>💬 Languages</h3>
              <p>
                Hindi (Native)
                <br />
                English (Fluent)
              </p>
            </div>
            <div className="about-card">
              <h3>📍 Location</h3>
              <p>Bangalore, Karnataka</p>
            </div>
          </div>
          <div className="about-summary">
            <p>
              Results-driven Front-End Developer with over 12 years of experience delivering responsive, 
              accessible, and high-performance web applications. Demonstrated expertise in React.js, AngularJS, 
              TypeScript, Redux, HTML5, CSS3, and modern UI/UX design principles. Proven track record of building 
              scalable solutions across IoT, OTT, healthcare, and financial platforms.
            </p>
            <p>
              Currently pursuing M.Tech in AI/ML Technologies from IIT Jodhpur, deepening expertise in artificial 
              intelligence and machine learning to build smarter, data-driven front-end solutions.
            </p>
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
              <div className={`skill ${isEmphasized("React.js") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>React.js {isEmphasized("React.js") && "⭐"}</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("TypeScript") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>TypeScript {isEmphasized("TypeScript") && "⭐"}</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("JavaScript") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>JavaScript {isEmphasized("JavaScript") && "⭐"}</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("Angular") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Angular {isEmphasized("Angular") && "⭐"}</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("Redux") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Redux {isEmphasized("Redux") && "⭐"}</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("HTML5/CSS3") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>HTML5/CSS3 {isEmphasized("HTML5/CSS3") && "⭐"}</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools & Emerging Tech</h3>
              <div className={`skill ${isEmphasized("Node.js") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Node.js {isEmphasized("Node.js") && "⭐"}</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("Machine Learning") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Machine Learning {isEmphasized("Machine Learning") && "⭐"}</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("GenAI") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Generative AI {isEmphasized("GenAI") && "⭐"}</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("Webpack") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Webpack {isEmphasized("Webpack") && "⭐"}</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("GitHub Copilot") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>GitHub Copilot {isEmphasized("GitHub Copilot") && "⭐"}</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className={`skill ${isEmphasized("Figma") ? "emphasized" : ""}`}>
                <div className="skill-info">
                  <span>Figma/Storybook {isEmphasized("Figma") && "⭐"}</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "80%" }}></div>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Made By: Jiteshwar Nishad © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

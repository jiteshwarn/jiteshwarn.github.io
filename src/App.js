import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">JN</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Jiteshwar Nishad</h1>
            <p className="hero-subtitle">Front End Developer</p>
            <p className="hero-description">
              Hi, I'm Jitesh. I'm a Tech Savvy living in Bangalore, India. 
              I have 5+ years of experience in web and mobile based applications. 
              I'm currently employed at Apttus where I develop HTML, CSS and JavaScript 
              for consumer facing applications.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#experience" className="btn btn-secondary">View Work</a>
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
              <h3>📅 Birth</h3>
              <p>April 28, 1989</p>
            </div>
            <div className="about-card">
              <h3>🌍 Nationality</h3>
              <p>India</p>
            </div>
            <div className="about-card">
              <h3>💬 Languages</h3>
              <p>Hindi (Native)<br/>English (Intermediate)</p>
            </div>
            <div className="about-card">
              <h3>📍 Location</h3>
              <p>Bangalore, India</p>
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
              <h3>Coding Skills</h3>
              <div className="skill">
                <div className="skill-info">
                  <span>HTML5</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>CSS3</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>Angular JS 1.x</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>Angular JS 6</span>
                  <span>60%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools</h3>
              <div className="skill">
                <div className="skill-info">
                  <span>SVN</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>Sublime</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>ALM</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-info">
                  <span>JIRA</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
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
              <div className="timeline-date">2017 - Present</div>
              <div className="timeline-content">
                <h3>Senior Software Engineer</h3>
                <h4>Apttus & Software Limited</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2016 - 2017</div>
              <div className="timeline-content">
                <h3>Senior Software Engineer</h3>
                <h4>Capgemini</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2013 - 2016</div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <h4>Accenture</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>

          <h2 className="section-title" style={{marginTop: '4rem'}}>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2007 - 2011</div>
              <div className="timeline-content">
                <h3>Electronics & Telecommunication</h3>
                <h4>Government Engineering College</h4>
                <p>Bilaspur, India</p>
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
                <p>H 214, Karthik Nagar<br/>Bangalore, India</p>
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
                <button type="submit" className="btn btn-primary">Submit</button>
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

import "./App.css";
import { useState, useEffect } from "react";
import { getCompanyProfile } from "./common/companyProfiles";
import AIChat from "./AIChat";
import "./common/CreativeEffects.css";
import type { CompanyProfile, ContactFormData } from "./types";

// Import Components
import Navigation from "./components/Navigation";
import CompanyBanner from "./components/CompanyBanner";
import Footer from "./components/Footer";
import TechStackMarquee from "./components/TechStackMarquee";

// Import Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./sections/Projects.css";

const App: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [companyProfile, setCompanyProfile] = useState<CompanyProfile | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Toggle dark mode
  const toggleDarkMode = (): void => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show loading state until profile is loaded
  if (!companyProfile) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <CompanyBanner companyName={companyProfile.name} />
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero companyProfile={companyProfile} />
      <About />
      <Skills companyProfile={companyProfile} />
      <Projects />
      <Experience />
      <Contact
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TechStackMarquee />
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;


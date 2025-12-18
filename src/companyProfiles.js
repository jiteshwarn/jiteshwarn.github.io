// Company-specific profile configurations
// Usage: https://jiteshwarn.github.io/?company=google

export const companyProfiles = {
  google: {
    name: "Google",
    theme: {
      primary: "#4285f4",
      secondary: "#34a853",
      gradient: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)"
    },
    headline: "Front End Developer specializing in modern web technologies and scalable applications",
    highlights: [
      "Expert in Angular (5+ years experience)",
      "Strong JavaScript fundamentals",
      "Experience with large-scale enterprise applications",
      "Focus on performance optimization and user experience"
    ],
    skillsEmphasis: ["Angular JS 1.x", "Angular JS 6", "JavaScript", "HTML5"],
    projects: [
      {
        title: "Enterprise CPQ Solution",
        description: "Developed complex UI components for Apttus CPQ platform serving Fortune 500 companies"
      }
    ]
  },
  
  microsoft: {
    name: "Microsoft",
    theme: {
      primary: "#0078d4",
      secondary: "#00bcf2",
      gradient: "linear-gradient(135deg, #0078d4 0%, #00bcf2 100%)"
    },
    headline: "Front End Developer with expertise in JavaScript frameworks and enterprise solutions",
    highlights: [
      "Extensive experience with Angular and modern JavaScript",
      "5+ years building enterprise web applications",
      "Strong collaboration and agile development experience",
      "Proven track record at top consulting firms (Accenture, Capgemini)"
    ],
    skillsEmphasis: ["JavaScript", "Angular JS 6", "HTML5", "CSS3"],
    projects: [
      {
        title: "Client-facing Business Applications",
        description: "Built responsive, accessible web applications for global enterprises"
      }
    ]
  },
  
  amazon: {
    name: "Amazon",
    theme: {
      primary: "#ff9900",
      secondary: "#146eb4",
      gradient: "linear-gradient(135deg, #146eb4 0%, #ff9900 100%)"
    },
    headline: "Front End Developer focused on performance, scalability, and customer experience",
    highlights: [
      "5+ years developing high-performance web applications",
      "Experience with component-based architecture (Angular)",
      "Strong focus on code quality and best practices",
      "Track record of delivering customer-centric solutions"
    ],
    skillsEmphasis: ["JavaScript", "Angular JS 1.x", "Angular JS 6", "CSS3"],
    projects: [
      {
        title: "High-Performance Enterprise Platform",
        description: "Optimized web applications serving millions of users with focus on speed and reliability"
      }
    ]
  },
  
  meta: {
    name: "Meta",
    theme: {
      primary: "#1877f2",
      secondary: "#0866ff",
      gradient: "linear-gradient(135deg, #1877f2 0%, #0866ff 100%)"
    },
    headline: "Front End Developer passionate about creating engaging user experiences",
    highlights: [
      "Expert in modern JavaScript and reactive frameworks",
      "Strong focus on UI/UX and user engagement",
      "Experience building complex, interactive web applications",
      "5+ years in front-end development"
    ],
    skillsEmphasis: ["JavaScript", "Angular JS 6", "HTML5", "CSS3"],
    projects: [
      {
        title: "Interactive Web Applications",
        description: "Created dynamic, user-focused interfaces for enterprise customers"
      }
    ]
  },
  
  apple: {
    name: "Apple",
    theme: {
      primary: "#000000",
      secondary: "#555555",
      gradient: "linear-gradient(135deg, #555555 0%, #000000 100%)"
    },
    headline: "Front End Developer with a passion for elegant design and exceptional user experiences",
    highlights: [
      "5+ years crafting beautiful, intuitive web interfaces",
      "Strong attention to detail and design principles",
      "Expert in Angular and modern web technologies",
      "Focus on accessibility and user-centric design"
    ],
    skillsEmphasis: ["JavaScript", "Angular JS 6", "CSS3", "HTML5"],
    projects: [
      {
        title: "Premium Enterprise Solutions",
        description: "Developed refined, elegant web applications with focus on design excellence"
      }
    ]
  },

  startup: {
    name: "Startup",
    theme: {
      primary: "#8b5cf6",
      secondary: "#ec4899",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    headline: "Versatile Front End Developer ready to wear multiple hats and drive innovation",
    highlights: [
      "Full-stack understanding with strong front-end expertise",
      "Fast learner, adaptable to new technologies",
      "5+ years experience across multiple companies and domains",
      "Experience with agile development and rapid iteration"
    ],
    skillsEmphasis: ["JavaScript", "Angular JS 1.x", "Angular JS 6", "HTML5", "CSS3"],
    projects: [
      {
        title: "End-to-End Web Solutions",
        description: "Built complete web applications from concept to deployment for enterprise clients"
      }
    ]
  },

  default: {
    name: "Default",
    theme: {
      primary: "#2563eb",
      secondary: "#1e40af",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    headline: "Hi, I'm Jitesh. I'm a Tech Savvy living in Bangalore, India. I have 5+ years of experience in web and mobile based applications. I'm currently employed at Apttus where I develop HTML, CSS and JavaScript for consumer facing applications.",
    highlights: null,
    skillsEmphasis: null,
    projects: null
  }
};

// Utility function to get company profile
export const getCompanyProfile = (companyParam) => {
  if (!companyParam) return companyProfiles.default;
  
  const company = companyParam.toLowerCase().trim();
  return companyProfiles[company] || companyProfiles.default;
};

// List of supported companies for easy reference
export const supportedCompanies = Object.keys(companyProfiles).filter(c => c !== 'default');


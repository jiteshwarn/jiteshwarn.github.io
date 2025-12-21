import type { CompanyProfile } from '../types';

// Company-specific profile configurations
// Usage: https://jiteshwarn.github.io/?company=google

export const companyProfiles: Record<string, CompanyProfile> = {
  google: {
    name: "Google",
    theme: {
      primary: "#4285f4",
      secondary: "#34a853",
      gradient: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)"
    },
    headline: "Results-driven Front-End Lead Developer with 13+ years of experience building high-performance, scalable web applications. Expert in React.js, TypeScript, and modern JavaScript. Currently pursuing M.Tech in AI/ML from IIT Jodhpur.",
    highlights: [
      "13+ years delivering enterprise-grade web applications",
      "Expert in React.js, Angular, TypeScript, and Redux",
      "Lead Developer at CSG Systems International",
      "M.Tech AI/ML from IIT Jodhpur (Ongoing)",
      "Generative AI Mastermind Certified"
    ],
    skillsEmphasis: ["React.js", "TypeScript", "JavaScript", "Machine Learning", "GenAI"],
    projects: [
      {
        title: "Enterprise Web Platform",
        description: "Led development of scalable front-end solutions for Fortune 500 companies"
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
    headline: "Seeking Front-End Lead / Gen AI ML Engineer roles where I can leverage 13+ years of enterprise development experience combined with cutting-edge AI/ML expertise from IIT Jodhpur to build intelligent, high-performance web applications.",
    highlights: [
      "✨ 13+ Years: React.js, TypeScript, Angular, JavaScript expertise",
      "🎓 IIT Jodhpur: M.Tech in AI/ML (Ongoing) – Rare Frontend + AI combo",
      "🏆 Lead Developer: Currently leading frontend at CSG Systems International",
      "🤖 GenAI Certified: Ready to implement AI-powered user experiences",
      "🌐 Domain Expert: IoT, OTT, Healthcare, FinTech platforms"
    ],
    skillsEmphasis: ["React.js", "TypeScript", "JavaScript", "Machine Learning", "GenAI"],
    projects: null
  }
};

// Utility function to get company profile
export const getCompanyProfile = (companyParam: string | null): CompanyProfile => {
  if (!companyParam) return companyProfiles.default;
  
  const company = companyParam.toLowerCase().trim();
  return companyProfiles[company] || companyProfiles.default;
};

// List of supported companies for easy reference
export const supportedCompanies: string[] = Object.keys(companyProfiles).filter(c => c !== 'default');


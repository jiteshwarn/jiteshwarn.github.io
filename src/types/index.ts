// Company Profile Types
export interface CompanyTheme {
  primary: string;
  secondary: string;
  gradient: string;
}

export interface CompanyProject {
  title: string;
  description: string;
}

export interface CompanyProfile {
  name: string;
  theme: CompanyTheme;
  headline: string;
  highlights: string[] | null;
  skillsEmphasis: string[];
  projects: CompanyProject[] | null;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// AI Chat Types
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  message: string;
  conversation_history?: ChatMessage[];
}

export interface ChatResponse {
  response: string;
  success: boolean;
}

export type APIStatus = 'ready' | 'connecting' | 'error';

// Skill Types
export interface Skill {
  name: string;
  level: number;
}

// Timeline Types
export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  location: string;
}

// Project Types
export interface Project {
  title: string;
  icon: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  highlight: boolean;
}

// Component Props Types
export interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface CompanyBannerProps {
  companyName: string;
}

export interface HeroProps {
  companyProfile: CompanyProfile;
}

export interface SkillsProps {
  companyProfile: CompanyProfile;
}

export interface SkillBarProps {
  name: string;
  level: number;
  isEmphasized: boolean;
}

export interface SkillsCategoryProps {
  title: string;
  skills: Skill[];
  isEmphasized: (skillName: string) => boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export interface TimelineItemProps extends TimelineItem {}

export interface ContactProps {
  formData: ContactFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ContactFormProps extends ContactProps {}

export interface ContactCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export interface HeroHighlightsProps {
  highlights: string[] | null;
}

export interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export interface GradientTextProps {
  children: React.ReactNode;
  animate?: boolean;
}

export interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}


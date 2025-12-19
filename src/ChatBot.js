import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

// Knowledge base about Jiteshwar Nishad
const knowledgeBase = {
  experience: `Jitesh has 13+ years of professional experience in frontend development. He's currently a Lead Front End Developer at CSG Systems International (since 2019). Previously worked at Apttus, Capgemini, and Accenture.`,
  
  skills: `Technical expertise includes:
• Frontend: React.js (Expert), TypeScript, Angular, Redux, JavaScript ES6+
• Styling: HTML5, CSS3, SASS, Responsive Design
• Tools: Webpack, Storybook, Figma, GitHub Copilot
• AI/ML: Machine Learning, Generative AI, Python basics
• Others: Node.js, REST APIs, Progressive Web Apps`,

  education: `Jitesh is pursuing M.Tech in AI/ML from IIT Jodhpur (one of India's premier institutes). He also holds a B.E. in Electronics & Telecommunication from Government Engineering College, Bilaspur (2007-2011).`,

  current: `Currently working as Lead Front End Developer at CSG Systems International in Bangalore. Also pursuing M.Tech in AI/ML from IIT Jodhpur to bridge frontend development with artificial intelligence.`,

  aiml: `Jitesh is uniquely positioned at the intersection of Frontend and AI/ML:
• Pursuing M.Tech in AI/ML from IIT Jodhpur
• Certified: Generative AI Mastermind by Outskill
• Building intelligent, data-driven user experiences
• Expertise in integrating ML models into web applications`,

  hire: `Why hire Jitesh?
• 13+ years of enterprise experience
• Rare combo: Frontend Lead + AI/ML expertise
• IIT Jodhpur M.Tech (AI/ML)
• Led projects for Fortune 500 companies
• Domain expertise: IoT, OTT, Healthcare, FinTech
• GenAI Certified - Ready for AI-powered features`,

  contact: `You can reach Jitesh at:
• Email: jiteshnishad1989@gmail.com
• Location: Bangalore, Karnataka, India
• Full Resume: bold.pro/my/jiteshwar-nishad-250426153343`,

  companies: `Companies Jitesh has worked with:
• CSG Systems International (2019-Present) - Lead Developer
• Apttus (2017-2019) - Senior Developer  
• Capgemini (2016-2017) - Frontend Developer
• Accenture (2013-2016) - Software Engineer`,

  projects: `Key project domains:
• IoT Platform Development
• OTT Streaming Interfaces
• Healthcare Applications
• Financial/FinTech Platforms
• Enterprise CPQ Solutions`,
};

// AI Response Generator
const generateResponse = (userMessage) => {
  const msg = userMessage.toLowerCase();
  
  // Greetings
  if (msg.match(/^(hi|hello|hey|greetings)/)) {
    return `Hello! 👋 I'm Jitesh's AI assistant. I can tell you about his:
    
• 💼 Experience (13+ years)
• 🛠️ Technical Skills
• 🎓 Education (IIT Jodhpur)
• 🤖 AI/ML Expertise
• 📞 Contact Information

What would you like to know?`;
  }

  // Experience related
  if (msg.match(/experience|years|work|career|background/)) {
    return knowledgeBase.experience;
  }

  // Skills related
  if (msg.match(/skill|tech|stack|know|language|framework|react|angular|javascript|typescript/)) {
    return knowledgeBase.skills;
  }

  // Education related
  if (msg.match(/education|study|degree|iit|college|university|mtech|btech/)) {
    return knowledgeBase.education;
  }

  // Current role
  if (msg.match(/current|now|doing|working|present/)) {
    return knowledgeBase.current;
  }

  // AI/ML related
  if (msg.match(/ai|ml|machine learning|artificial|genai|generative|llm|deep learning/)) {
    return knowledgeBase.aiml;
  }

  // Why hire
  if (msg.match(/hire|why|recruit|candidate|best|unique|different|special/)) {
    return knowledgeBase.hire;
  }

  // Contact
  if (msg.match(/contact|email|phone|reach|connect|linkedin/)) {
    return knowledgeBase.contact;
  }

  // Companies
  if (msg.match(/company|companies|worked|employer|csg|apttus|capgemini|accenture/)) {
    return knowledgeBase.companies;
  }

  // Projects
  if (msg.match(/project|built|create|develop|domain|industry/)) {
    return knowledgeBase.projects;
  }

  // Resume
  if (msg.match(/resume|cv|portfolio/)) {
    return `You can view Jitesh's full resume at: bold.pro/my/jiteshwar-nishad-250426153343
    
Or scroll through this portfolio to learn about his experience, skills, and achievements!`;
  }

  // Default response
  return `I'm Jitesh's AI assistant! I can help you learn about:

• His **13+ years** of experience
• **Technical skills** (React, TypeScript, Angular, etc.)
• **Education** (M.Tech AI/ML from IIT Jodhpur)
• **AI/ML expertise** and certifications
• **Why you should hire him**

Try asking something like:
- "What are his skills?"
- "Tell me about his AI experience"
- "Why should I hire Jitesh?"`;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hi! 👋 I'm Jitesh's AI Assistant, built to showcase his Gen AI expertise!\n\nAsk me anything about his skills, experience, or why he'd be a great hire!`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage = {
        type: 'bot',
        text: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are his skills?",
    "AI/ML experience?",
    "Why hire Jitesh?",
  ];

  return (
    <>
      {/* Chat Button */}
      <button 
        className={`chat-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <span className="chat-button-icon">🤖</span>
        <span className="chat-button-text">Ask AI</span>
        <span className="chat-button-pulse"></span>
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <span className="chat-avatar">🤖</span>
            <div>
              <h4>Jitesh's AI Assistant</h4>
              <span className="chat-status">
                <span className="status-dot"></span>
                Powered by Gen AI
              </span>
            </div>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.type === 'bot' && <span className="message-avatar">🤖</span>}
              <div className="message-content">
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <span className="message-avatar">🤖</span>
              <div className="message-content typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="quick-questions">
          {quickQuestions.map((q, i) => (
            <button key={i} onClick={() => { setInputValue(q); }}>
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask about Jitesh's experience..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend} disabled={!inputValue.trim()}>
            ➤
          </button>
        </div>

        {/* Footer */}
        <div className="chat-footer">
          <span>✨ Built by Jitesh to showcase Gen AI skills</span>
        </div>
      </div>
    </>
  );
};

export default ChatBot;


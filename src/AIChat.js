import React, { useState, useEffect, useRef } from 'react';
import './AIChat.css';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState('checking'); // 'checking', 'available', 'fallback'
  const [session, setSession] = useState(null);
  const messagesEndRef = useRef(null);

  // Profile context for the AI
  const profileContext = `You are an AI assistant for Jiteshwar Nishad's portfolio website. Here's his profile:

Name: Jiteshwar Nishad
Role: Front End Lead Developer & Gen AI/ML Engineer
Experience: 13+ years
Current: Lead Front End Developer at CSG Systems International (since 2019)
Education: M.Tech in AI/ML from IIT Jodhpur (ongoing), B.E. in Electronics from GEC Bilaspur

Skills: React.js, Angular, TypeScript, Redux, Vue.js, HTML5, CSS3, JavaScript, Node.js basics, 
Machine Learning, Generative AI, Webpack, Storybook, API Integration, Responsive Design, PWAs

Previous Companies: Apttus (Senior FE Dev), Capgemini (FE Dev), Accenture (Software Engineer)
Domains: IoT, OTT, Healthcare, FinTech

Certifications: Generative AI Mastermind

Key Achievements:
- Led frontend teams building enterprise applications
- Built this AI-powered portfolio to demonstrate GenAI skills
- Delivered scalable solutions across multiple industries

Contact: jiteshnishad1989@gmail.com
LinkedIn: linkedin.com/in/jiteshwar-nishad-21018517b
Portfolio: jiteshwarn.github.io

Answer questions about Jitesh helpfully and professionally. Keep responses concise (2-3 sentences max).
If asked about hiring, encourage them to reach out via email or LinkedIn.`;

  // Initialize AI
  useEffect(() => {
    initializeAI();
  }, []);

  const initializeAI = async () => {
    try {
      // Check for Chrome's built-in AI (Gemini Nano)
      if (window.ai && window.ai.languageModel) {
        const capabilities = await window.ai.languageModel.capabilities();
        if (capabilities.available === 'readily' || capabilities.available === 'after-download') {
          const newSession = await window.ai.languageModel.create({
            systemPrompt: profileContext
          });
          setSession(newSession);
          setAiStatus('available');
          setMessages([{
            role: 'assistant',
            content: "🤖 Hi! I'm Jitesh's AI assistant powered by **Gemini Nano** running entirely in your browser! Ask me anything about his experience, skills, or projects."
          }]);
          return;
        }
      }
      
      // Fallback to smart rule-based system
      setAiStatus('fallback');
      setMessages([{
        role: 'assistant',
        content: "👋 Hi! I'm Jitesh's portfolio assistant. Ask me about his experience, skills, or how to get in touch! \n\n💡 *Tip: Try Chrome 127+ with AI features enabled for the full LLM experience!*"
      }]);
    } catch (error) {
      console.log('AI init error:', error);
      setAiStatus('fallback');
      setMessages([{
        role: 'assistant',
        content: "👋 Hello! I'm here to help you learn about Jitesh's experience and skills. What would you like to know?"
      }]);
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Smart fallback responses
  const getFallbackResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('experience') || q.includes('years') || q.includes('work')) {
      return "Jitesh has **13+ years** of experience as a Frontend Developer. He's currently a **Lead Frontend Developer at CSG Systems** (since 2019), and previously worked at Apttus, Capgemini, and Accenture.";
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
      return "Jitesh is expert in **React.js, Angular, TypeScript, Redux, Vue.js**. He also has skills in **Machine Learning & Generative AI**, and is pursuing M.Tech in AI/ML from **IIT Jodhpur**.";
    }
    if (q.includes('education') || q.includes('degree') || q.includes('iit') || q.includes('study')) {
      return "Jitesh is pursuing **M.Tech in AI/ML from IIT Jodhpur** and holds a **B.E. in Electronics** from Government Engineering College Bilaspur.";
    }
    if (q.includes('contact') || q.includes('hire') || q.includes('reach') || q.includes('email')) {
      return "You can reach Jitesh at **jiteshnishad1989@gmail.com** or connect on [LinkedIn](https://www.linkedin.com/in/jiteshwar-nishad-21018517b/). He's open to exciting opportunities!";
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('built')) {
      return "This portfolio itself showcases Jitesh's skills! It features **AI chatbot integration, dynamic company-specific content, particle effects, 3D cards**, and modern React patterns.";
    }
    if (q.includes('ai') || q.includes('ml') || q.includes('machine learning') || q.includes('genai')) {
      return "Jitesh is a **Generative AI Mastermind certified** professional, currently pursuing **M.Tech in AI/ML from IIT Jodhpur**. He's passionate about integrating AI into frontend experiences!";
    }
    if (q.includes('company') || q.includes('csg') || q.includes('current')) {
      return "Jitesh is currently a **Lead Frontend Developer at CSG Systems International** since August 2019, where he leads frontend development for enterprise applications.";
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return "Hello! 👋 I'm here to help you learn about Jitesh. You can ask about his skills, experience, education, or how to contact him!";
    }
    if (q.includes('why') || q.includes('hire') || q.includes('best')) {
      return "Jitesh combines **13+ years of frontend expertise** with cutting-edge **AI/ML knowledge from IIT Jodhpur**. He's led teams at 4 major companies and delivers high-performance, user-centric applications.";
    }
    
    return "I can tell you about Jitesh's **experience, skills, education, projects**, or **contact information**. What would you like to know?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      let response;
      
      if (aiStatus === 'available' && session) {
        // Use Chrome's built-in AI
        response = await session.prompt(userMessage);
      } else {
        // Use fallback
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate thinking
        response = getFallbackResponse(userMessage);
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('AI error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I encountered an issue. Feel free to ask another question or contact Jitesh directly at jiteshnishad1989@gmail.com" 
      }]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "What are Jitesh's key skills?",
    "Tell me about his experience",
    "How can I contact him?",
    "What's his education?"
  ];

  return (
    <>
      {/* Floating Button */}
      <button 
        className={`ai-chat-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="AI Chat"
      >
        {isOpen ? (
          <span className="close-icon">✕</span>
        ) : (
          <span className="ai-icon">🤖</span>
        )}
        {aiStatus === 'available' && <span className="ai-badge">AI</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="header-info">
              <span className="header-icon">🤖</span>
              <div>
                <h4>Jitesh's AI Assistant</h4>
                <span className={`status ${aiStatus}`}>
                  {aiStatus === 'available' ? '● Gemini Nano Active' : '● Smart Assistant'}
                </span>
              </div>
            </div>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="message-content" dangerouslySetInnerHTML={{ 
                  __html: msg.content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
                    .replace(/\n/g, '<br/>')
                }} />
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="suggested-questions">
              {suggestedQuestions.map((q, idx) => (
                <button 
                  key={idx} 
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="suggestion-btn"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="ai-chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Jitesh..."
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;


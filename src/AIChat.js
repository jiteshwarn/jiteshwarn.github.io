import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as webllm from '@mlc-ai/web-llm';
import './AIChat.css';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState('checking'); // 'checking', 'gemini', 'webllm', 'loading', 'fallback'
  const [loadProgress, setLoadProgress] = useState(0);
  const [engine, setEngine] = useState(null);
  const messagesEndRef = useRef(null);

  // Profile context for the AI
  const profileContext = `You are a helpful AI assistant for Jiteshwar Nishad's portfolio. Answer questions about him professionally and concisely.

PROFILE:
- Name: Jiteshwar Nishad
- Role: Front End Lead Developer & Gen AI/ML Engineer  
- Experience: 13+ years in frontend development
- Current: Lead Frontend Developer at CSG Systems International (since Aug 2019)
- Education: M.Tech AI/ML from IIT Jodhpur (ongoing), B.E. Electronics from GEC Bilaspur
- Skills: React.js, Angular, TypeScript, Redux, Vue.js, JavaScript, HTML5, CSS3, Machine Learning, Generative AI
- Previous: Apttus, Capgemini, Accenture
- Domains: IoT, OTT, Healthcare, FinTech
- Certification: Generative AI Mastermind
- Contact: jiteshnishad1989@gmail.com
- LinkedIn: linkedin.com/in/jiteshwar-nishad-21018517b

Keep responses brief (2-3 sentences). Be enthusiastic about connecting him with recruiters.`;

  // Smart fallback responses
  const getFallbackResponse = useCallback((query) => {
    const q = query.toLowerCase();
    
    if (q.includes('experience') || q.includes('years') || q.includes('work')) {
      return "Jitesh has **13+ years** of frontend experience! He's currently a **Lead Frontend Developer at CSG Systems** and previously worked at Apttus, Capgemini, and Accenture across IoT, OTT, Healthcare & FinTech.";
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('know')) {
      return "Jitesh is expert in **React.js, Angular, TypeScript, Redux, Vue.js**. He's also diving deep into **Machine Learning & Generative AI** through his M.Tech at **IIT Jodhpur**!";
    }
    if (q.includes('education') || q.includes('degree') || q.includes('iit') || q.includes('study')) {
      return "Jitesh is pursuing **M.Tech in AI/ML from IIT Jodhpur** 🎓 and holds a **B.E. in Electronics** from GEC Bilaspur. Combining engineering fundamentals with cutting-edge AI!";
    }
    if (q.includes('contact') || q.includes('hire') || q.includes('reach') || q.includes('email') || q.includes('connect')) {
      return "Ready to connect! 📧 Email: **jiteshnishad1989@gmail.com** | 💼 LinkedIn: [Connect Here](https://www.linkedin.com/in/jiteshwar-nishad-21018517b/) - He's open to exciting opportunities!";
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('built') || q.includes('this')) {
      return "This portfolio showcases Jitesh's skills! ✨ Features: **AI chatbot (you're using it!)**, dynamic company-specific content, particle effects, 3D cards, and modern React patterns. All frontend magic! 🚀";
    }
    if (q.includes('ai') || q.includes('ml') || q.includes('machine learning') || q.includes('genai') || q.includes('llm')) {
      return "Jitesh is **Generative AI Mastermind certified** and pursuing **M.Tech in AI/ML from IIT Jodhpur**! This very chatbot demonstrates his AI integration skills - it can use real LLMs in your browser! 🤖";
    }
    if (q.includes('company') || q.includes('csg') || q.includes('current') || q.includes('job')) {
      return "Currently **Lead Frontend Developer at CSG Systems International** since 2019, leading frontend teams building enterprise-grade applications. Before that: Apttus, Capgemini, Accenture!";
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('how are')) {
      return "Hey there! 👋 Great to meet you! I'm here to tell you about Jitesh - a Frontend Lead with 13+ years experience and AI/ML expertise from IIT Jodhpur. What would you like to know?";
    }
    if (q.includes('why') || q.includes('hire') || q.includes('best') || q.includes('strength')) {
      return "Why Jitesh? 🎯 **13+ years** frontend mastery + **IIT Jodhpur AI/ML** education + Led teams at **4 major companies** + **GenAI certified** = A rare blend of experience AND cutting-edge skills!";
    }
    if (q.includes('salary') || q.includes('expect') || q.includes('ctc')) {
      return "For compensation discussions, please connect directly with Jitesh at **jiteshnishad1989@gmail.com**. He's open to discussing opportunities that match his experience level! 💼";
    }
    
    return "I can tell you about Jitesh's **experience, skills, education, projects**, or **how to contact him**. What interests you most? 😊";
  }, []);

  // Initialize AI - tries multiple options
  const initializeAI = useCallback(async () => {
    // Try Chrome's built-in AI first (fastest, no download)
    try {
      if (window.ai && window.ai.languageModel) {
        const capabilities = await window.ai.languageModel.capabilities();
        if (capabilities.available === 'readily') {
          setAiStatus('gemini');
          setMessages([{
            role: 'assistant',
            content: "🤖 **Gemini Nano Active!** I'm running locally in your browser using Chrome's built-in AI. Ask me anything about Jitesh!"
          }]);
          return;
        }
      }
    } catch (e) {
      console.log('Chrome AI not available:', e);
    }

    // Check for WebGPU support for WebLLM
    if (navigator.gpu) {
      setAiStatus('webllm-available');
      setMessages([{
        role: 'assistant',
        content: "🚀 **WebGPU Detected!** Your browser supports running AI models locally. Click **'Load AI Model'** below to enable Llama 3.2 (downloads ~700MB once, then runs offline!)\n\nOr just ask questions - I'll use smart responses until the model loads!"
      }]);
    } else {
      setAiStatus('fallback');
      setMessages([{
        role: 'assistant',
        content: "👋 Hi! I'm Jitesh's portfolio assistant. Ask me about his **experience, skills, education**, or **how to contact him**!\n\n💡 *Tip: Use Chrome 113+ for the full AI experience with WebGPU!*"
      }]);
    }
  }, []);

  useEffect(() => {
    initializeAI();
  }, [initializeAI]);

  // Load WebLLM model
  const loadWebLLM = async () => {
    setAiStatus('loading');
    setLoadProgress(0);
    
    try {
      const selectedModel = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
      
      const newEngine = await webllm.CreateMLCEngine(selectedModel, {
        initProgressCallback: (progress) => {
          setLoadProgress(Math.round(progress.progress * 100));
          console.log('Loading:', progress.text);
        }
      });
      
      setEngine(newEngine);
      setAiStatus('webllm');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "🎉 **Llama 3.2 is ready!** A real LLM is now running entirely in your browser - no server required! This showcases Jitesh's GenAI expertise. Ask me anything!"
      }]);
    } catch (error) {
      console.error('WebLLM error:', error);
      setAiStatus('fallback');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "⚠️ Couldn't load the AI model (may need more GPU memory). No worries - I'm still here to help! Ask away!"
      }]);
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      let response;
      
      if (aiStatus === 'gemini' && window.ai?.languageModel) {
        // Use Chrome's Gemini Nano
        const session = await window.ai.languageModel.create({
          systemPrompt: profileContext
        });
        response = await session.prompt(userMessage);
        session.destroy();
      } else if (aiStatus === 'webllm' && engine) {
        // Use WebLLM
        const completion = await engine.chat.completions.create({
          messages: [
            { role: 'system', content: profileContext },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 150,
          temperature: 0.7
        });
        response = completion.choices[0].message.content;
      } else {
        // Use smart fallback
        await new Promise(resolve => setTimeout(resolve, 400));
        response = getFallbackResponse(userMessage);
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('AI error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: getFallbackResponse(userMessage)
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
    "What are his key skills?",
    "Tell me about his experience",
    "How can I hire him?",
    "What's his AI/ML background?"
  ];

  const getStatusDisplay = () => {
    switch(aiStatus) {
      case 'gemini': return { text: '● Gemini Nano', color: '#10b981' };
      case 'webllm': return { text: '● Llama 3.2 Active', color: '#10b981' };
      case 'loading': return { text: `● Loading ${loadProgress}%`, color: '#fbbf24' };
      case 'webllm-available': return { text: '● AI Ready to Load', color: '#60a5fa' };
      default: return { text: '● Smart Assistant', color: '#fbbf24' };
    }
  };

  const status = getStatusDisplay();

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
        {(aiStatus === 'gemini' || aiStatus === 'webllm') && (
          <span className="ai-badge">LLM</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="header-info">
              <span className="header-icon">🤖</span>
              <div>
                <h4>AI Portfolio Assistant</h4>
                <span className="status" style={{ color: status.color }}>
                  {status.text}
                </span>
              </div>
            </div>
            {aiStatus === 'webllm-available' && (
              <button className="load-model-btn" onClick={loadWebLLM}>
                🚀 Load AI
              </button>
            )}
          </div>

          {/* Loading Progress */}
          {aiStatus === 'loading' && (
            <div className="loading-bar-container">
              <div className="loading-bar" style={{ width: `${loadProgress}%` }}></div>
              <span className="loading-text">Downloading Llama 3.2... {loadProgress}%</span>
            </div>
          )}

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
          {messages.length <= 2 && !isLoading && (
            <div className="suggested-questions">
              {suggestedQuestions.map((q, idx) => (
                <button 
                  key={idx} 
                  onClick={() => {
                    setInput(q);
                    setTimeout(handleSend, 100);
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

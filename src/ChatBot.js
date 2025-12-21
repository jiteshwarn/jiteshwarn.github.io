import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import { generateResponse, knowledgeBase } from './common/chatbotKnowledge';

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

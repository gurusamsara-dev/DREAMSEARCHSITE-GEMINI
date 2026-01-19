import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to your personal real estate concierge. How can I help you find your dream home today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onSend = async () => {
    if (!input.trim() || loading) return;
    
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const stream = await sendMessageToGemini(userText);
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);
      
      for await (const chunk of stream) {
        fullText += chunk.text || "";
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].text = fullText;
          return updated;
        });
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please try again.", isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-6 bg-white w-[400px] h-[600px] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
          >
            <div className="bg-brand-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg"><Bot className="h-6 w-6" /></div>
                <div>
                  <h3 className="font-serif font-bold tracking-wide">Concierge AI</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Ready to assist</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="h-5 w-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 custom-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' ? 'bg-brand-900 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                  } ${m.isError ? 'bg-red-50 text-red-600' : ''}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>

            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-2xl border border-gray-200">
                <input 
                  type="text" 
                  className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
                  placeholder="Tell me what you're looking for..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && onSend()}
                  disabled={loading}
                />
                <button 
                  onClick={onSend}
                  disabled={loading || !input.trim()}
                  className="p-3 bg-brand-900 text-white rounded-xl hover:bg-brand-800 transition-all disabled:opacity-50"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                </button>
              </div>
              <div className="flex items-center justify-center mt-4 gap-2 text-[10px] text-gray-400 uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-brand-400" /> Powered by Dream AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-900 text-white p-5 rounded-full shadow-floating"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearch: (q: string) => void;
  onBrowse: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onBrowse }) => {
  const [val, setVal] = useState('');

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80")' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight"
        >
          Find Your <span className="italic">Dream Estate</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-2 rounded-full shadow-2xl flex max-w-2xl mx-auto"
        >
          <div className="flex-grow flex items-center px-6">
            <Search className="text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Where do you want to live?" 
              className="w-full h-14 bg-transparent text-gray-900 focus:outline-none font-medium"
              value={val}
              onChange={e => setVal(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && onSearch(val)}
            />
          </div>
          <button 
            onClick={() => onSearch(val)}
            className="bg-brand-900 hover:bg-brand-800 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group"
          >
            Search <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
        <button 
          onClick={onBrowse}
          className="mt-12 text-sm uppercase tracking-[0.3em] font-bold border-b border-white/30 pb-2 hover:border-white transition-all"
        >
          Explore All Properties
        </button>
      </div>
    </section>
  );
};

export default Hero;
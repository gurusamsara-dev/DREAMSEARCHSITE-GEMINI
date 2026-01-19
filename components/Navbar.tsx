import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { NAV_LINKS } from '../constants';
import { Menu, X, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentView === 'HOME';
  const navBackground = (isHome && !scrolled) ? 'bg-transparent text-white' : 'bg-white/90 backdrop-blur-md text-gray-900 shadow-sm';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setCurrentView('HOME')}
        >
          <HomeIcon className={`h-7 w-7 transition-colors ${ (isHome && !scrolled) ? 'text-white' : 'text-brand-800' }`} />
          <span className="font-serif text-2xl font-bold tracking-tight">Dream Search</span>
        </div>

        <div className="hidden md:flex gap-10">
          {NAV_LINKS.map(link => (
            <button
              key={link.value}
              onClick={() => setCurrentView(link.value as ViewState)}
              className="relative text-sm font-semibold tracking-widest uppercase py-2 group"
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${ (isHome && !scrolled) ? 'bg-white' : 'bg-brand-800' } ${currentView === link.value ? 'scale-x-100' : ''}`} />
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white text-gray-900 border-b p-6 space-y-4 shadow-xl"
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.value}
                className="block w-full text-left text-lg font-serif font-bold py-2"
                onClick={() => { setCurrentView(link.value as ViewState); setIsOpen(false); }}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
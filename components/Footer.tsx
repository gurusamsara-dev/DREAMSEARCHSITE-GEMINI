import React from 'react';
import { Home, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Home className="h-8 w-8" />
            <span className="font-serif text-3xl font-bold tracking-tighter">Dream Search</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Curating the finest living experiences globally. We don't just find houses; we discover destinies.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-8">Navigation</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Search Collection</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Estates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Concierge Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-8">Contact</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-400" /> 100 Royal Dr, Beverly Hills, CA</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-400" /> +1 (800) DREAM-SEARCH</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-400" /> concierge@dreamsearch.co</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-8">Newsletter</h4>
          <p className="text-white/50 text-xs mb-6 uppercase tracking-widest">Access Off-Market Listings</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex-grow text-sm focus:outline-none focus:border-brand-500" 
            />
            <button className="bg-white text-brand-950 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-all text-xs uppercase">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Dream Search Company. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
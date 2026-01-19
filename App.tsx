import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import PropertyModal from './components/PropertyModal';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { Property, ViewState } from './types';
import { PROPERTIES } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selected, setSelected] = useState<Property | null>(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'All' | Property['type']>('All');
  const [filtered, setFiltered] = useState(PROPERTIES);

  useEffect(() => {
    let res = PROPERTIES;
    if (filter !== 'All') res = res.filter(p => p.type === filter);
    if (query) {
      const q = query.toLowerCase();
      res = res.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.address.toLowerCase().includes(q)
      );
    }
    setFiltered(res);
  }, [query, filter]);

  const onHeroSearch = (q: string) => {
    setQuery(q);
    setView('PROPERTIES');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={view} setCurrentView={setView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'HOME' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Hero onSearch={onHeroSearch} onBrowse={() => setView('PROPERTIES')} />
              
              <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                  <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Exclusivity Guaranteed</span>
                  <h2 className="text-5xl font-serif font-bold mt-4">Featured Collection</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {PROPERTIES.slice(0, 3).map(p => <PropertyCard key={p.id} property={p} onSelect={setSelected} />)}
                </div>
              </section>
            </motion.div>
          )}

          {view === 'PROPERTIES' && (
            <motion.div key="list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                  <h1 className="text-5xl font-serif font-bold mb-4">The Collection</h1>
                  <p className="text-gray-500">Discover {filtered.length} extraordinary properties</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search estates..." 
                      className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-100"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex bg-white p-1 rounded-full border border-gray-100 shadow-sm">
                    {['All', 'House', 'Villa', 'Apartment'].map(t => (
                      <button 
                        key={t}
                        onClick={() => setFilter(t as any)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === t ? 'bg-brand-900 text-white' : 'text-gray-400 hover:text-gray-900'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filtered.map(p => <PropertyCard key={p.id} property={p} onSelect={setSelected} />)}
                </div>
              ) : (
                <div className="py-40 text-center bg-white rounded-3xl border border-dashed">
                  <Filter className="mx-auto h-12 w-12 text-gray-200 mb-6" />
                  <p className="text-xl font-serif text-gray-400">No estates matching your refined criteria.</p>
                </div>
              )}
            </motion.div>
          )}

          {view === 'CONTACT' && (
            <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
                <h2 className="text-4xl font-serif font-bold mb-6">Contact the Concierge</h2>
                <p className="text-gray-500 mb-12">Our agents are available for private consultations worldwide.</p>
                <form className="space-y-6 text-left" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div><label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block">Name</label><input type="text" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 ring-brand-100 outline-none" placeholder="Johnathan Doe" /></div>
                    <div><label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block">Email</label><input type="email" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 ring-brand-100 outline-none" placeholder="john@concierge.co" /></div>
                  </div>
                  <div><label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block">Inquiry</label><textarea rows={5} className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 ring-brand-100 outline-none" placeholder="Tell us about your requirements..."></textarea></div>
                  <button className="w-full bg-brand-900 text-white py-5 rounded-2xl font-bold hover:bg-brand-800 transition-all shadow-xl">Send Inquiry</button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <ChatWidget />
      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default App;
import React from 'react';
import { Property } from '../types';
import { X, Check, MapPin, Calendar, Heart, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  property: Property | null;
  onClose: () => void;
}

const PropertyModal: React.FC<Props> = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={onClose} 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-auto"
        >
          <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white rounded-full transition-all">
            <X className="text-gray-900" />
          </button>

          <div className="w-full md:w-1/2 h-80 md:h-auto relative">
            <img src={property.imageUrl} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 flex gap-3">
              <button className="p-3 bg-white/90 rounded-full shadow hover:text-red-500 transition-colors"><Heart /></button>
              <button className="p-3 bg-white/90 rounded-full shadow hover:text-brand-600 transition-colors"><Share2 /></button>
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
            <div className="mb-8">
              <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">{property.type}</span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">{property.title}</h2>
              <div className="flex items-center text-gray-500 mb-6">
                <MapPin className="mr-2 text-brand-500" /> {property.address}
              </div>
              <p className="text-3xl font-serif font-bold text-brand-900">${property.price.toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100 mb-8 text-center">
              <div><p className="text-2xl font-bold">{property.beds}</p><p className="text-xs uppercase text-gray-400">Beds</p></div>
              <div><p className="text-2xl font-bold">{property.baths}</p><p className="text-xs uppercase text-gray-400">Baths</p></div>
              <div><p className="text-2xl font-bold">{property.sqft}</p><p className="text-xs uppercase text-gray-400">Sq Ft</p></div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Description</h4>
              <p className="text-gray-600 leading-relaxed font-light">{property.description}</p>
            </div>

            <div className="mb-10">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {property.features.map(f => (
                  <div key={f} className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded">
                    <Check className="h-4 w-4 text-brand-500 mr-2" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-brand-900 text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-brand-800 transition-all flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" /> Schedule Private View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PropertyModal;
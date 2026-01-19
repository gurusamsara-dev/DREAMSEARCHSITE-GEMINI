import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Maximize2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  property: Property;
  onSelect: (p: Property) => void;
}

const PropertyCard: React.FC<Props> = ({ property, onSelect }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all cursor-pointer group"
      onClick={() => onSelect(property)}
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-brand-900">
          {property.type}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-2xl font-serif font-bold drop-shadow-lg">${property.price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 truncate group-hover:text-brand-800 transition-colors">{property.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <MapPin className="h-4 w-4 mr-1 text-brand-500" />
          {property.address}
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-semibold">{property.beds}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-semibold">{property.baths}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-semibold">{property.sqft}</span>
            </div>
          </div>
          <div className="text-brand-600 font-bold text-sm tracking-tighter uppercase">Details</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
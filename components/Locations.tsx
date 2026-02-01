import React, { useState } from 'react';
import { Section } from './ui/Section';
import { MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { LocationInfo } from '../types';

const LOCATIONS: LocationInfo[] = [
  { city: "Teixeira de Freitas", phone: "(73) 99947-0290", whatsappLink: "#" },
  { city: "Eunápolis", phone: "(73) 98817-1354", whatsappLink: "#" },
  { city: "Porto Seguro", phone: "(73) 99832-3630", whatsappLink: "#" },
  { city: "Itamaraju", phone: "(73) 99105-4373", whatsappLink: "#" }
];

export const Locations: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <Section id="locations" className="bg-brand-dark border-t border-brand-steel">
      <div className="flex flex-col items-center mb-16">
        <MapPin className="text-brand-yellow mb-4" size={32} />
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase text-center">
          Nossas <span className="text-brand-yellow">Unidades</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {LOCATIONS.map((loc) => (
          <div 
            key={loc.city}
            className={`
              relative p-8 border cursor-pointer transition-all duration-300 group
              ${activeCity === loc.city ? 'bg-zinc-900 border-brand-yellow' : 'bg-transparent border-white/10 hover:border-white/30'}
            `}
            onMouseEnter={() => setActiveCity(loc.city)}
            onMouseLeave={() => setActiveCity(null)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            
            <h3 className="text-xl font-display uppercase text-white mb-4 group-hover:text-brand-yellow transition-colors">
              {loc.city}
            </h3>
            
            <div className="flex items-center gap-3 text-gray-400 mb-6">
              <Phone size={16} />
              <span className="font-sans text-sm">{loc.phone}</span>
            </div>

            <a href={`https://wa.me/55${loc.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">
              <MessageCircle size={14} />
              Chamar no Whats
              <ArrowRight size={14} className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};
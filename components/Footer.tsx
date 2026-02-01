import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
           <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tighter">
             House<span className="text-brand-yellow">190</span>
           </h2>
           <p className="text-gray-600 text-xs uppercase tracking-widest mt-2">
             All Rights Reserved © {new Date().getFullYear()}
           </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
            <Facebook size={24} />
          </a>
        </div>

        {/* Quick Link */}
        <div className="text-center md:text-right">
          <a href="https://beacons.ai/house190" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-brand-yellow transition-colors font-sans">
            beacons.ai/house190
          </a>
        </div>

      </div>
    </footer>
  );
};
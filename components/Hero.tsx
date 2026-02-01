import React from 'react';
import { ArrowDown, MapPin, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image - Switch to a Burger Close-up for higher appetite appeal on mobile */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] md:bg-center opacity-70 scale-105"
        style={{
          // Using the "Burger close up" style image (Image 5 reference)
          backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop')", 
          filter: "brightness(50%) contrast(110%)" 
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-16 md:pt-0">
        
        {/* Top Tagline */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in-down">
          <span className="h-[1px] w-8 bg-brand-yellow"></span>
          <h2 className="text-brand-yellow font-sans font-semibold tracking-widest uppercase text-xs md:text-sm">
            Est. 2019 • Soul of the City
          </h2>
          <span className="h-[1px] w-8 bg-brand-yellow"></span>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold text-white uppercase leading-[0.9] tracking-tighter mb-6 industrial-text-shadow">
          Experiência<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-yellow to-yellow-700">Nova-Iorquina</span>
        </h1>
        
        {/* Bio Text */}
        <p className="font-sans text-gray-200 max-w-xl mx-auto mb-8 text-base md:text-xl font-normal leading-relaxed text-center drop-shadow-md">
          Burgers artesanais, drinks e muito sabor. <br className="hidden md:block" />
          Cada detalhe pensado para te transportar para a noite urbana.
        </p>

        {/* Cashback Badge */}
        <div className="mb-10 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-brand-yellow/30 rounded-full px-4 py-2">
          <Sparkles size={16} className="text-brand-yellow" />
          <span className="text-xs md:text-sm text-white uppercase tracking-wider font-bold">
            Cashback no <span className="text-brand-yellow">Clube Fidelidade</span>
          </span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col w-full md:w-auto md:flex-row gap-4">
           <a href="https://beacons.ai/house190" target="_blank" rel="noreferrer" className="w-full md:w-auto">
             <Button fullWidth className="bg-brand-yellow text-black border-brand-yellow hover:bg-white hover:text-black">
               Pedir Agora
             </Button>
           </a>
           <Button variant="outline" onClick={scrollToMenu} className="hidden md:block">
             Explorar Menu
           </Button>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce md:hidden text-white/50">
        <ArrowDown size={24} />
      </div>

      {/* Desktop Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-md py-4 z-20 hidden md:flex justify-between items-center px-8 text-xs text-gray-400 font-display tracking-widest uppercase">
        <div className="flex items-center gap-2">
           <MapPin size={14} className="text-brand-yellow" />
           <span>Teixeira de Freitas • Eunápolis • Porto Seguro • Itamaraju</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={12} className="text-brand-yellow" fill="currentColor"/>
          <span>Qualidade Artesanal</span>
        </div>
      </div>
    </div>
  );
};
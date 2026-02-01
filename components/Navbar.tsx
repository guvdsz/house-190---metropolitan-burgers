import React, { useState, useEffect } from 'react';
import { Menu, X, Star, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Ambiente', href: '#vibe' },
    { name: 'Unidades', href: '#locations' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll handling
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      // Small timeout to allow menu close animation to start/finish and body scroll to unlock
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Dynamic classes for navbar background
  // When menu is open, we want a solid dark background to match the overlay.
  // When scrolled, we want a blurred dark background.
  // At top, we want a gradient or transparent.
  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${mobileMenuOpen 
      ? 'bg-black border-white/10 py-8' 
      : isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-white/10 shadow-lg py-8' 
        : 'bg-gradient-to-b from-black/90 to-transparent border-transparent py-8'
    }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          
          {/* Logo Recreating the Reference Image */}
          <div className="flex flex-col items-center justify-center leading-none select-none group cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => { setMobileMenuOpen(false); window.scrollTo({top:0, behavior:'smooth'}); }}>
            {/* Red Stars */}
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#D62828" className="text-brand-red animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
              ))}
            </div>
            {/* Main Logo Text */}
            <div className="flex items-baseline relative">
               <span className="font-script text-3xl md:text-4xl text-white mr-1 -rotate-6 transform origin-bottom-right drop-shadow-lg">House</span>
               <span className="font-display font-bold text-2xl md:text-3xl text-white italic tracking-tighter drop-shadow-lg">190</span>
            </div>
            <span className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-1 font-sans">Hamburgueria</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-display uppercase tracking-widest text-gray-300 hover:text-brand-yellow transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
               href="https://beacons.ai/house190" 
               target="_blank" 
               rel="noreferrer" 
               className="px-6 py-2 border border-brand-yellow text-brand-yellow font-display text-sm uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-all font-bold"
            >
              Peça Já
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {mobileMenuOpen ? <X size={28} className="text-brand-yellow" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Increased z-index relative to content, but navbar stays on top */}
      <div className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
         
         {/* Background noise texture */}
         <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
         
         <div className="flex flex-col h-full pt-32 pb-10 px-8 relative overflow-y-auto">
           
           <div className="flex flex-col gap-8 items-center justify-center flex-grow">
             {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-3xl font-display uppercase font-bold tracking-widest text-white hover:text-brand-yellow w-full text-center py-4 border-b border-white/5 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
           </div>

           <div className={`w-full flex flex-col gap-6 mt-auto transition-all duration-700 delay-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a 
                 href="https://beacons.ai/house190" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="w-full py-5 bg-brand-yellow text-black flex items-center justify-center gap-2 font-display uppercase font-bold text-xl tracking-widest rounded-sm shadow-[0_4px_0_#b38b00] active:shadow-none active:translate-y-1 transition-all"
              >
                Fazer Pedido <ArrowRight size={20} />
              </a>
              
              <div className="text-center">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Cashback disponível no</p>
                <p className="text-white font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                  <Star size={12} fill="white" /> Clube Fidelidade <Star size={12} fill="white" />
                </p>
              </div>
           </div>

         </div>
      </div>
    </>
  );
};
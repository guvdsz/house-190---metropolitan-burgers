import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${noPadding ? '' : 'py-16 md:py-28'} border-b border-brand-steel/30 overflow-hidden ${className}`}
    >
      {/* Noise Overlay applied to every section for texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {children}
      </div>
    </section>
  );
};
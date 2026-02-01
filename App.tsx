import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuHighlight } from './components/MenuHighlight';
import { VibeSection } from './components/VibeSection';
import { HowToOrder } from './components/HowToOrder';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-200 selection:bg-brand-yellow selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About/Concept intro blended into transition */}
        <div className="bg-brand-dark py-20 px-6 text-center border-b border-white/5">
          <p className="font-display text-brand-yellow uppercase tracking-[0.2em] text-sm mb-4 animate-pulse">
            Bem-vindo à Experiência
          </p>
          <p className="font-sans text-xl md:text-2xl font-light max-w-2xl mx-auto text-gray-400">
            A House 190 traduz a energia pulsante da metrópole em sabores intensos. 
            Não servimos apenas hambúrgueres, servimos a noite.
          </p>
        </div>

        <MenuHighlight />
        
        <div id="vibe">
          <VibeSection />
        </div>
        
        <HowToOrder />
        <Locations />
      </main>

      <Footer />
    </div>
  );
}

export default App;
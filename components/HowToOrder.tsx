import React from 'react';
import { Section } from './ui/Section';
import { MousePointerClick, MessageSquare, UtensilsCrossed, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const HowToOrder: React.FC = () => {
  return (
    <Section className="bg-brand-gray relative overflow-hidden">
      {/* Background outline skyline simulation - Reduced opacity for mobile readability */}
      <div 
        className="absolute bottom-0 left-0 w-full h-40 md:h-64 bg-repeat-x opacity-5 md:opacity-10 pointer-events-none"
        style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/New_York_City_Skyline_Silhouette.svg/2560px-New_York_City_Skyline_Silhouette.svg.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'bottom'
        }}
      ></div>

      <div className="flex flex-col items-center text-center mb-12 md:mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-4">
          Como <span className="text-brand-yellow">Pedir?</span>
        </h2>
        <div className="w-16 h-1 bg-brand-yellow"></div>
        <p className="mt-6 text-gray-400 max-w-lg text-sm md:text-base px-6">
          É muito <strong className="text-white">FÁCIL PEDIR</strong> seu burger aqui <strong className="text-white">NA HOUSE 190</strong>
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 px-4 md:px-6">
        
        {/* Mobile Vertical Line */}
        <div className="absolute left-[2.25rem] top-4 bottom-10 w-0.5 bg-gradient-to-b from-brand-yellow via-brand-yellow/20 to-transparent md:hidden"></div>
        
        {/* Desktop Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-yellow/30 hidden md:block transform md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-8 md:gap-24 pb-12">
          
          {/* Step 01 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center">
            
            {/* Number Node */}
            <div className="absolute left-0 top-0 md:left-1/2 md:top-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-yellow bg-brand-dark flex items-center justify-center text-brand-yellow font-display text-2xl md:text-3xl font-bold shadow-[0_0_15px_rgba(255,200,0,0.2)] transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              01
            </div>
            
            {/* Left Side Content */}
            <div className="w-full md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-16 relative">
               {/* Desktop Connector Line */}
               <div className="hidden md:block absolute top-1/2 right-0 w-16 h-[1px] bg-brand-yellow/30 -translate-y-1/2"></div>
               <div className="hidden md:block absolute top-1/2 right-0 w-1 h-1 bg-brand-yellow rounded-full -translate-y-1/2"></div>

               <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group">
                  <div className="flex items-center gap-3 mb-2 md:mb-4 md:justify-end">
                    <MousePointerClick className="text-brand-yellow md:hidden" size={20} />
                    <h3 className="text-xl md:text-2xl font-display uppercase text-white group-hover:text-brand-yellow transition-colors">Link na Bio</h3>
                    <MousePointerClick className="text-brand-yellow hidden md:block" size={24} />
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Acesse nosso cardápio digital completo, promoções do dia e clube fidelidade.
                  </p>
                  <a href="https://beacons.ai/house190" target="_blank" rel="noreferrer" className="block md:inline-block">
                    <Button variant="outline" className="text-xs md:text-sm py-3 px-6 h-auto w-full md:w-auto flex items-center justify-center gap-2 group hover:bg-brand-yellow hover:text-black hover:border-brand-yellow">
                      Acessar Beacons <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </Button>
                  </a>
               </div>
            </div>
            
            {/* Right Side Spacer */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          {/* Step 02 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center">
             
             {/* Number Node */}
             <div className="absolute left-0 top-0 md:left-1/2 md:top-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-yellow bg-brand-dark flex items-center justify-center text-brand-yellow font-display text-2xl md:text-3xl font-bold shadow-[0_0_15px_rgba(255,200,0,0.2)] transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              02
            </div>

            {/* Left Side Spacer */}
            <div className="hidden md:block md:w-1/2"></div>
            
            {/* Right Side Content */}
            <div className="w-full md:w-1/2 md:text-left pl-20 md:pl-0 md:pl-16 relative">
               {/* Desktop Connector Line */}
               <div className="hidden md:block absolute top-1/2 left-0 w-16 h-[1px] bg-brand-yellow/30 -translate-y-1/2"></div>
               <div className="hidden md:block absolute top-1/2 left-0 w-1 h-1 bg-brand-yellow rounded-full -translate-y-1/2"></div>

               <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group">
                  <div className="flex items-center gap-3 mb-2 md:mb-4 md:justify-start">
                    <MessageSquare className="text-brand-yellow md:hidden" size={20} />
                    <MessageSquare className="text-brand-yellow hidden md:block" size={24} />
                    <h3 className="text-xl md:text-2xl font-display uppercase text-white group-hover:text-brand-yellow transition-colors">Whatsapp</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 md:hidden">
                    Atendimento personalizado em todas as unidades.
                  </p>
                  <ul className="text-gray-400 text-sm md:text-base space-y-2 font-sans mb-5 border-l-2 border-brand-yellow/20 pl-4 hidden md:block">
                    <li>(73) 99947-0290 - Teixeira de Freitas</li>
                    <li>(73) 98817-1354 - Eunápolis</li>
                    <li>(73) 99832-3630 - Porto Seguro</li>
                    <li>(73) 99105-4373 - Itamaraju</li>
                  </ul>
                  <Button variant="ghost" className="text-xs md:text-sm py-3 px-0 text-brand-yellow hover:text-white w-full md:w-auto flex items-center justify-center md:justify-start gap-2 border border-brand-yellow/20 md:border-none rounded md:rounded-none" onClick={() => document.getElementById('locations')?.scrollIntoView({behavior: 'smooth'})}>
                    Ver Telefones das Lojas <ArrowRight size={16} />
                  </Button>
               </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center">
             
             {/* Number Node */}
             <div className="absolute left-0 top-0 md:left-1/2 md:top-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-yellow bg-brand-dark flex items-center justify-center text-brand-yellow font-display text-2xl md:text-3xl font-bold shadow-[0_0_15px_rgba(255,200,0,0.2)] transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              03
            </div>

            {/* Left Side Content */}
            <div className="w-full md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-16 relative">
               {/* Desktop Connector Line */}
               <div className="hidden md:block absolute top-1/2 right-0 w-16 h-[1px] bg-brand-yellow/30 -translate-y-1/2"></div>
               <div className="hidden md:block absolute top-1/2 right-0 w-1 h-1 bg-brand-yellow rounded-full -translate-y-1/2"></div>

               <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group">
                  <div className="flex items-center gap-3 mb-2 md:mb-4 md:justify-end">
                    <UtensilsCrossed className="text-brand-yellow md:hidden" size={20} />
                    <h3 className="text-xl md:text-2xl font-display uppercase text-white group-hover:text-brand-yellow transition-colors">Pelo iFood</h3>
                    <UtensilsCrossed className="text-brand-yellow hidden md:block" size={24} />
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    A comodidade da entrega rápida direto no conforto da sua casa.
                  </p>
                  <div className="flex md:justify-end">
                    <span className="text-brand-yellow text-xs md:text-sm font-bold uppercase tracking-widest border border-brand-yellow/30 bg-brand-yellow/5 px-4 py-2 rounded w-full md:w-auto text-center hover:bg-brand-yellow hover:text-black transition-colors cursor-default">
                      Disponível no App
                    </span>
                  </div>
               </div>
            </div>
            
            {/* Right Side Spacer */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>

        </div>
      </div>
    </Section>
  );
};
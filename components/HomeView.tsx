import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

interface HomeViewProps {
  onSearch: (q: string) => void;
  onCategorySelect: (id: string) => void;
  onNavigateToListing: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onSearch, onCategorySelect, onNavigateToListing }) => {
  const [localSearch, setLocalSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) onSearch(localSearch);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-12 slide-up">
      {/* Hero Section */}
      <section className="text-center mb-20 md:mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-lavender/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <span className="inline-block px-4 py-1.5 md:px-5 md:py-1.5 rounded-full ios-glass text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-indigo-700 dark:text-lavender mb-8 md:mb-10 border border-lavender/30 shadow-sm">
          Martech OS di Prossima Generazione
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-black italic tracking-tighter leading-[1.1] md:leading-[0.95] mb-8 md:mb-10 text-slate-950 dark:text-white px-2">
          THE FUTURE OF<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-deepIndigo via-indigo-600 to-lavender dark:from-lavender dark:via-white dark:to-lavender/40">GROWTH STACKS</span>
        </h1>
        
        <p className="text-slate-700 dark:text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-12 md:mb-16 font-medium leading-relaxed px-4">
          Naviga nella complessità del marketing moderno con il nostro dossier tecnologico iper-selezionato. Ottimizzato per team ad alta velocità.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative group px-2">
          <input 
            type="text" 
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Cerca nel database..."
            className="w-full ios-glass rounded-full px-6 md:px-10 py-5 md:py-6 text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-lavender/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-500 font-medium"
          />
          <button 
            type="submit"
            className="absolute right-4 md:right-3 top-2.5 md:top-3 bottom-2.5 md:bottom-3 bg-indigo-600 dark:bg-lavender text-white dark:text-deepIndigo px-6 md:px-10 rounded-full font-black italic hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            VIA
          </button>
        </form>
      </section>

      {/* Categories */}
      <section className="mb-24 md:mb-32">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-black italic tracking-tight text-slate-950 dark:text-white uppercase">Categorie</h2>
          <div className="h-1.5 w-12 md:w-16 bg-lavender mt-3 rounded-full shadow-sm"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className="ios-glass p-6 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center gap-4 md:gap-6 group hover:shadow-2xl hover:shadow-lavender/20"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:bg-lavender group-hover:text-white transition-all shadow-inner">
                {cat.icon}
              </div>
              <span className="font-bold text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300 text-center">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Insight Card */}
      <section className="ios-glass rounded-[3rem] md:rounded-[4.5rem] p-8 md:p-20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-lavender/10 to-transparent"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6 md:mb-8 text-indigo-700 dark:text-lavender uppercase">Precisione<br className="hidden md:block"/>Analitica</h2>
            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
              Non elenchiamo solo strumenti; ne analizziamo l'architettura, i protocolli di conformità e la velocità di integrazione per garantire che il tuo stack rimanga fluido.
            </p>
            <div className="flex gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white">A++</div>
                <div className="text-[10px] md:text-[11px] uppercase text-slate-500 dark:text-slate-400 tracking-widest font-black mt-1">Rating Score</div>
              </div>
              <div className="w-px h-12 md:h-16 bg-slate-200 dark:bg-white/10"></div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white">2.4k</div>
                <div className="text-[10px] md:text-[11px] uppercase text-slate-500 dark:text-slate-400 tracking-widest font-black mt-1">Casi Studio</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square ios-glass rounded-[2.5rem] md:rounded-[4rem] overflow-hidden transform group-hover:rotate-2 transition-transform duration-1000">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60 dark:opacity-40 mix-blend-overlay group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Analisi Tech" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 ios-glass p-6 md:p-8 rounded-2xl md:rounded-3xl animate-bounce shadow-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-lavender rounded-xl flex items-center justify-center text-white">
                <span className="font-black italic text-xs md:text-sm">ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
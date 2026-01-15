import React, { useState } from 'react';
import { MartechTool, PriceFilter } from '../types';
import { CATEGORIES } from '../constants';

interface ListingViewProps {
  tools: MartechTool[];
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
  activePriceFilter: PriceFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectTool: (id: number) => void;
}

const PRICE_FILTERS: { id: PriceFilter; label: string; desc: string }[] = [
  { id: 'ALL', label: 'Tutti', desc: 'Senza filtri' },
  { id: 'FREE', label: 'Free', desc: 'Gratis/Freemium' },
  { id: 'ENTRY', label: 'Entry', desc: '<$100/mese' },
  { id: 'PRO', label: 'Pro', desc: '$100-$500/mese' },
  { id: 'ENTERPRISE', label: 'Enterprise', desc: 'Piani Custom' },
];

const ListingView: React.FC<ListingViewProps> = ({ 
  tools, activeCategory, onCategoryChange, activePriceFilter, onPriceFilterChange, searchQuery, onSearchChange, onSelectTool 
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-10">
      {/* Search Group */}
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-1">Ricerca Globale</label>
        <div className="relative">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cerca asset..."
            className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lavender/30 transition-all text-sm font-bold text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Categories Group */}
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-1">Categorie Stack</label>
        <div className="space-y-2">
          <div 
            onClick={() => onCategoryChange(null)}
            className={`cursor-pointer px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
              activeCategory === null 
              ? 'bg-lavender/10 border-lavender text-indigo-700 dark:text-lavender shadow-lg shadow-lavender/5' 
              : 'border-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'
            }`}
          >
            <span className="text-lg">🌐</span>
            <span className="text-xs font-black uppercase tracking-wider">Tutti i Settori</span>
          </div>
          {CATEGORIES.map(cat => (
            <div 
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`cursor-pointer px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
                activeCategory === cat.id 
                ? 'bg-lavender/10 border-lavender text-indigo-700 dark:text-lavender shadow-lg shadow-lavender/5' 
                : 'border-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-xs font-black uppercase tracking-wider">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Group */}
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-1">Fascia Economica</label>
        <div className="grid grid-cols-1 gap-2">
          {PRICE_FILTERS.map(filter => (
            <div 
              key={filter.id}
              onClick={() => onPriceFilterChange(filter.id)}
              className={`cursor-pointer px-4 py-3 rounded-xl border transition-all ${
                activePriceFilter === filter.id 
                ? 'bg-indigo-600 dark:bg-lavender text-white dark:text-deepIndigo shadow-xl' 
                : 'bg-white/50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:border-lavender/30'
              }`}
            >
              <div className="font-black text-[10px] uppercase tracking-widest">{filter.label}</div>
              <div className={`text-[9px] font-medium opacity-70 ${activePriceFilter === filter.id ? 'text-white/80 dark:text-deepIndigo/80' : ''}`}>{filter.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="pt-8 border-t border-slate-200 dark:border-white/10">
        <div className="ios-glass p-5 rounded-2xl text-center">
          <div className="text-2xl font-black italic text-slate-900 dark:text-white">{tools.length}</div>
          <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-1">Asset Selezionati</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-24 slide-up">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16">
        
        {/* Desktop Sidebar Filter */}
        <aside className="hidden md:block md:col-span-3 space-y-10">
          <div className="sticky top-32">
            <h2 className="text-2xl font-black italic tracking-tighter uppercase mb-8 text-slate-950 dark:text-white">Filtri Avanzati</h2>
            <FilterContent />
          </div>
        </aside>

        {/* Mobile Header & Trigger */}
        <div className="md:hidden space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2 text-slate-950 dark:text-white">The Repository</h1>
            <p className="text-slate-600 dark:text-slate-400 font-semibold text-xs tracking-tight">Intelligence tecnologica ad alte prestazioni.</p>
          </div>
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full ios-glass py-4 rounded-2xl flex items-center justify-center gap-3 border border-lavender/30 text-indigo-700 dark:text-lavender font-black italic tracking-tighter shadow-lg"
          >
            <span>⚙️</span> CONFIGURA FILTRI ({tools.length})
          </button>
        </div>

        {/* Tools Listing */}
        <div className="md:col-span-9">
          <div className="hidden md:flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-3 text-slate-950 dark:text-white">The Repository</h1>
              <p className="text-slate-700 dark:text-slate-400 font-semibold">Discovery database per decisioni tecnologiche critiche.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {tools.map(tool => (
              <div 
                key={tool.id}
                onClick={() => onSelectTool(tool.id)}
                className="ios-glass rounded-[2.5rem] p-8 md:p-10 cursor-pointer group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full shadow-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-lavender to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden ios-glass p-0.5 border-slate-200 dark:border-white/20 group-hover:scale-110 transition-transform">
                    <img src={tool.logo_url} alt={tool.name} className="w-full h-full object-cover rounded-[inherit]" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-indigo-600 dark:text-lavender font-black italic text-xl md:text-2xl tracking-tighter">{tool.pricing_starting_at}</span>
                    <span className="text-[9px] uppercase font-black text-slate-500 tracking-[0.2em]">Da</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black italic tracking-tighter mb-4 text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-lavender transition-colors">
                  {tool.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
                    {tool.category}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-indigo-700 dark:text-lavender/80 bg-lavender/10 dark:bg-lavender/5 px-3 py-1.5 rounded-full border border-lavender/20">
                    {tool.type}
                  </span>
                </div>

                <p className="text-slate-700 dark:text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2 mb-8 font-medium">{tool.short_pitch}</p>

                <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3">
                  {tool.integrations.slice(0, 2).map(int => (
                    <span key={int} className="text-[9px] uppercase font-black tracking-widest text-slate-500">
                      #{int}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {tools.length === 0 && (
              <div className="col-span-full py-24 md:py-40 text-center ios-glass rounded-[3rem] border border-dashed border-slate-300 dark:border-white/10">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-black italic text-slate-800 dark:text-slate-300">Dossier non trovato</h3>
                <p className="text-slate-600 dark:text-slate-500 mt-2 font-bold px-6">Modifica i filtri laterali per trovare nuove tecnologie.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xl" onClick={() => setIsMobileFilterOpen(false)}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-slate-50 dark:bg-[#0f172a] rounded-t-[3rem] p-8 max-h-[90vh] overflow-y-auto slide-up shadow-2xl border-t border-lavender/20">
            <div className="w-12 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full mx-auto mb-8"></div>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black italic uppercase text-slate-950 dark:text-white">Filtri Database</h2>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-10 h-10 rounded-full ios-glass flex items-center justify-center font-bold text-slate-500"
              >
                ✕
              </button>
            </div>
            <FilterContent />
            <div className="mt-12 sticky bottom-0 pt-4 bg-slate-50 dark:bg-[#0f172a]">
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-indigo-600 dark:bg-lavender text-white dark:text-deepIndigo py-5 rounded-2xl font-black italic shadow-xl"
              >
                APPLICA CONFIGURAZIONE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingView;

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
    <div className="max-w-7xl mx-auto px-6 py-12 slide-up">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e1b4b] text-[#97a1f8] text-xs font-black uppercase tracking-[0.2em] border border-[#97a1f8]/20 mb-6">
          Premium B2B Directory
        </span>
        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight mb-8">
          OPTIMIZE YOUR<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#97a1f8] to-[#1e1b4b]">GROWTH OPS</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Discover the technology dossier that powers high-velocity marketing teams. Curated, analyzed, and ready for deployment.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative group">
          <input 
            type="text" 
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search tools (e.g. SEO, AI, CRM)..."
            className="w-full bg-[#1e1b4b]/50 border-2 border-slate-800 rounded-full px-8 py-5 text-lg focus:outline-none focus:border-[#97a1f8] transition-all glass neon-shadow-hover"
          />
          <button 
            type="submit"
            className="absolute right-3 top-3 bottom-3 bg-[#97a1f8] text-[#0f172a] px-8 rounded-full font-black italic hover:scale-105 transition-transform"
          >
            SEARCH
          </button>
        </form>
      </section>

      {/* Category Grid */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black italic tracking-tight">EXPLORE CATEGORIES</h2>
            <p className="text-slate-500 mt-1">Deep dives into essential martech pillars.</p>
          </div>
          <button 
            onClick={onNavigateToListing}
            className="text-[#97a1f8] font-bold text-sm uppercase tracking-widest hover:underline"
          >
            View All Tools →
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className="glass p-8 rounded-[3rem] cursor-pointer hover:bg-[#1e1b4b] transition-all duration-500 flex flex-col items-center justify-center gap-4 group neon-shadow-hover border border-transparent hover:border-[#97a1f8]/30"
            >
              <span className="text-4xl group-hover:scale-125 transition-transform">{cat.icon}</span>
              <span className="font-bold text-sm uppercase tracking-tighter text-slate-300 text-center">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Insight / Trust Banner */}
      <section className="glass rounded-[4rem] p-12 flex flex-col md:flex-row items-center gap-12 border border-[#97a1f8]/10 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#97a1f8]/5 rounded-full blur-[80px]"></div>
        <div className="flex-1 relative z-10">
          <h2 className="text-4xl font-black italic tracking-tight mb-4 text-[#97a1f8]">ENTERPRISE READY</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every tool in the Hub is vetted for data security, integration capacity, and ROI potential. We provide the technical analysis so you can focus on scale.
          </p>
          <div className="mt-8 flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-black text-white">500+</div>
              <div className="text-xs uppercase text-slate-500 tracking-widest">Analyzed Tools</div>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">40k</div>
              <div className="text-xs uppercase text-slate-500 tracking-widest">Active Ops</div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full relative h-64 md:h-80 overflow-hidden rounded-[3rem]">
          <img src="https://picsum.photos/seed/martech/800/600" className="object-cover w-full h-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Tech context" />
        </div>
      </section>
    </div>
  );
};

export default HomeView;

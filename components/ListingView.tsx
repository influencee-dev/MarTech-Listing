
import React from 'react';
import { MartechTool, Category } from '../types';
import { CATEGORIES } from '../constants';

interface ListingViewProps {
  tools: MartechTool[];
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectTool: (id: number) => void;
}

const ListingView: React.FC<ListingViewProps> = ({ 
  tools, activeCategory, onCategoryChange, searchQuery, onSearchChange, onSelectTool 
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Technological Dossier</h1>
          <p className="text-slate-500 mt-2">Found {tools.length} elite tools matching your criteria.</p>
        </div>
        <div className="flex-1 max-w-md w-full">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Filter by name..."
            className="w-full bg-[#1e1b4b]/30 border border-slate-800 rounded-2xl px-6 py-3 focus:outline-none focus:border-[#97a1f8] glass"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        <button 
          onClick={() => onCategoryChange(null)}
          className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
            activeCategory === null 
            ? 'bg-[#97a1f8] text-[#0f172a]' 
            : 'glass text-slate-400 hover:text-[#97a1f8]'
          }`}
        >
          All Tools
        </button>
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
              activeCategory === cat.id 
              ? 'bg-[#97a1f8] text-[#0f172a]' 
              : 'glass text-slate-400 hover:text-[#97a1f8]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map(tool => (
          <div 
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className="glass rounded-[3.5rem] p-8 cursor-pointer group hover:-translate-y-2 transition-all duration-500 neon-shadow-hover relative overflow-hidden"
          >
            {/* Tool Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-[1.5rem] overflow-hidden bg-slate-800 border-2 border-slate-700 group-hover:border-[#97a1f8] transition-colors">
                <img src={tool.logo_url} alt={tool.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[#97a1f8] font-black italic text-xl">{tool.pricing_starting_at}</span>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-black italic tracking-tighter mb-2 group-hover:text-[#97a1f8] transition-colors">
              {tool.name}
            </h3>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800 mb-4 inline-block">
              {tool.category} • {tool.type}
            </span>
            <p className="text-slate-400 line-clamp-2 mb-8">{tool.short_pitch}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tool.integrations.slice(0, 3).map(int => (
                <span key={int} className="text-[10px] uppercase font-black tracking-widest text-[#97a1f8]/60 bg-[#97a1f8]/5 px-2 py-1 rounded-md border border-[#97a1f8]/10">
                  {int}
                </span>
              ))}
              {tool.integrations.length > 3 && (
                <span className="text-[10px] uppercase font-bold text-slate-600">+{tool.integrations.length - 3}</span>
              )}
            </div>

            {/* Hover Decorator */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-[#97a1f8]/0 to-[#97a1f8]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-full"></div>
          </div>
        ))}

        {tools.length === 0 && (
          <div className="col-span-full py-24 text-center glass rounded-[3rem]">
            <span className="text-6xl mb-6 block">🔎</span>
            <h3 className="text-2xl font-black italic text-slate-300">No tools found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingView;

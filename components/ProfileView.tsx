import React from 'react';
import { MartechTool } from '../types';

interface ProfileViewProps {
  tool: MartechTool;
  onBack: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ tool, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 slide-up">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-indigo-600 dark:hover:text-lavender transition-all mb-8 md:mb-12 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Torna al Dossier
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          {/* Header Card */}
          <div className="relative ios-glass rounded-[2.5rem] md:rounded-[4.5rem] overflow-hidden">
            <div className="h-48 md:h-72 overflow-hidden relative">
              <img src={tool.cover_url} className="w-full h-full object-cover opacity-80 dark:opacity-60" alt="Cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0f172a] to-transparent"></div>
            </div>
            <div className="px-6 md:px-12 pb-10 md:pb-14 -mt-12 md:-mt-20 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 text-center md:text-left">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 border-4 border-white/20 dark:border-[#1e1b4b] shadow-2xl">
                    <img src={tool.logo_url} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase text-slate-950 dark:text-white leading-none">
                      {tool.name}
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-3 md:gap-5 mt-3 md:mt-4">
                      <span className="text-indigo-600 dark:text-lavender font-black text-[10px] md:text-xs uppercase tracking-widest">{tool.category}</span>
                      <span className="text-slate-300 dark:text-slate-700 font-black">|</span>
                      <span className="text-slate-600 dark:text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest">{tool.type}</span>
                    </div>
                  </div>
                </div>
                <div className="ios-glass px-6 py-3 md:px-8 md:py-4 rounded-2xl md:rounded-3xl border border-lavender/30 text-center md:text-left">
                  <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] block mb-1">Prezzo d'Ingresso</span>
                  <span className="text-indigo-600 dark:text-lavender text-2xl md:text-3xl font-black italic tracking-tighter">{tool.pricing_starting_at}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Software Analysis */}
          <section className="ios-glass rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-black italic tracking-tighter mb-6 md:mb-8 uppercase text-slate-950 dark:text-white flex items-center gap-4">
              Analisi del Dossier
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
            </h2>
            <p className="text-slate-800 dark:text-slate-200 text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap">
              {tool.software_description}
            </p>
          </section>

          {/* Features Grid */}
          <section>
            <h2 className="text-xl md:text-2xl font-black italic tracking-tighter mb-6 md:mb-10 uppercase text-slate-950 dark:text-white px-2">Caratteristiche Tecniche</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {tool.features.map((feature, idx) => (
                <div key={idx} className="ios-glass p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] flex items-start gap-4 md:gap-6 group hover:shadow-xl transition-all">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-indigo-600/10 dark:bg-lavender/10 flex items-center justify-center text-indigo-600 dark:text-lavender font-black group-hover:scale-110 transition-transform text-sm md:text-base">✓</div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight text-xs md:text-sm leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 md:space-y-8">
          {/* Action Card */}
          <div className="ios-glass rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 lg:sticky lg:top-32">
            <h3 className="text-lg md:text-xl font-black italic tracking-tight mb-6 md:mb-8 text-center uppercase text-slate-950 dark:text-white">Implementazione</h3>
            <div className="space-y-4 md:space-y-5">
              <a 
                href={tool.website_url} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-indigo-600 dark:bg-lavender text-white dark:text-deepIndigo font-black italic py-4 md:py-5 rounded-xl md:rounded-2xl hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-indigo-200 dark:shadow-none text-sm md:text-base"
              >
                APRI SITO WEB
              </a>
              <a 
                href={`mailto:${tool.contact_email}`}
                className="block w-full text-center bg-white/5 border-2 border-slate-200 dark:border-lavender/30 text-slate-700 dark:text-lavender font-black italic py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-lavender hover:text-deepIndigo dark:hover:bg-lavender dark:hover:text-deepIndigo transition-all text-sm md:text-base"
              >
                CONTATTA VENDITE
              </a>
            </div>

            <div className="mt-8 pt-8 md:mt-10 md:pt-10 border-t border-slate-200 dark:border-white/10 space-y-4 md:space-y-6">
              <div className="flex justify-between items-center gap-2">
                <span className="text-slate-500 dark:text-slate-500 uppercase font-black tracking-widest text-[9px] md:text-[10px]">Modello Commerciale</span>
                <span className="text-slate-900 dark:text-white font-black text-xs md:text-sm text-right">{tool.pricing_model}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-slate-500 dark:text-slate-500 uppercase font-black tracking-widest text-[9px] md:text-[10px]">Sede Centrale</span>
                <span className="text-slate-900 dark:text-white font-black text-xs md:text-sm text-right">{tool.location}</span>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <h4 className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 dark:text-slate-600 mb-4 md:mb-6 text-center">Compatibilità Stack</h4>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {tool.integrations.map(int => (
                  <span key={int} className="px-3 py-1.5 md:px-4 md:py-2 ios-glass border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                    {int}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
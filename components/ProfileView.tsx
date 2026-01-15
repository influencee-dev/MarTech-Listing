
import React from 'react';
import { MartechTool } from '../types';

interface ProfileViewProps {
  tool: MartechTool;
  onBack: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ tool, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 slide-up">
      <button 
        onClick={onBack}
        className="text-slate-500 font-bold text-sm uppercase tracking-widest hover:text-[#97a1f8] transition-colors mb-8"
      >
        ← Back to Listing
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header Card */}
          <div className="relative glass rounded-[4rem] overflow-hidden border border-[#97a1f8]/20">
            <div className="h-64 overflow-hidden relative">
              <img src={tool.cover_url} className="w-full h-full object-cover opacity-60" alt="Cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
            </div>
            <div className="px-10 pb-12 -mt-16 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-[2rem] overflow-hidden bg-slate-900 border-4 border-[#1e1b4b] shadow-2xl">
                    <img src={tool.logo_url} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">{tool.name}</h1>
                    <div className="flex gap-4 mt-2">
                      <span className="text-[#97a1f8] font-bold text-sm uppercase tracking-widest">{tool.category}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">{tool.type}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1e1b4b] px-6 py-3 rounded-full border border-[#97a1f8]/20">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] block">Starting at</span>
                  <span className="text-[#97a1f8] text-2xl font-black italic">{tool.pricing_starting_at}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Software Analysis */}
          <section className="glass rounded-[3rem] p-10">
            <h2 className="text-2xl font-black italic tracking-tighter mb-6 uppercase border-b border-slate-800 pb-4">Software Analysis</h2>
            <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap">
              {tool.software_description}
            </p>
          </section>

          {/* Features Grid */}
          <section>
            <h2 className="text-2xl font-black italic tracking-tighter mb-8 uppercase px-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.features.map((feature, idx) => (
                <div key={idx} className="glass p-8 rounded-[2rem] flex items-start gap-4 group hover:bg-[#1e1b4b] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#97a1f8]/20 flex items-center justify-center text-[#97a1f8] font-black group-hover:scale-110 transition-transform">✓</div>
                  <span className="font-bold text-slate-300 uppercase tracking-tight text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Action Card */}
          <div className="glass rounded-[3rem] p-8 border border-[#97a1f8]/10 sticky top-28">
            <h3 className="text-xl font-black italic tracking-tight mb-6 text-center uppercase">Engagement</h3>
            <div className="space-y-4">
              <a 
                href={tool.website_url} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-[#97a1f8] text-[#0f172a] font-black italic py-4 rounded-2xl hover:scale-[1.02] transition-transform shadow-lg shadow-[#97a1f8]/10"
              >
                LAUNCH WEBSITE
              </a>
              <a 
                href={`mailto:${tool.contact_email}`}
                className="block w-full text-center bg-[#1e1b4b] text-[#97a1f8] border border-[#97a1f8]/30 font-black italic py-4 rounded-2xl hover:bg-[#97a1f8] hover:text-[#0f172a] transition-all"
              >
                CONTACT SALES
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 uppercase font-bold tracking-widest">Model</span>
                <span className="text-white font-bold">{tool.pricing_model}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 uppercase font-bold tracking-widest">Location</span>
                <span className="text-white font-bold">{tool.location}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xs uppercase font-black tracking-[0.3em] text-slate-600 mb-4 text-center">Native Integrations</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {tool.integrations.map(int => (
                  <span key={int} className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg text-xs font-bold uppercase tracking-widest">
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

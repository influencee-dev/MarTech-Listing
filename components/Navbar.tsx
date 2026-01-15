
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 h-20 flex items-center justify-between">
      <div 
        className="cursor-pointer flex items-center gap-2 group"
        onClick={() => onNavigate('HOME')}
      >
        <div className="w-10 h-10 bg-[#97a1f8] rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-[#97a1f8]/20">
          <span className="text-slate-900 font-black italic">MH</span>
        </div>
        <h1 className="text-xl font-black italic tracking-tighter text-[#97a1f8]">MARTECH HUB</h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
        <button 
          onClick={() => onNavigate('HOME')}
          className={`hover:text-[#97a1f8] transition-colors ${currentView === 'HOME' ? 'text-[#97a1f8]' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('LISTING')}
          className={`hover:text-[#97a1f8] transition-colors ${currentView === 'LISTING' ? 'text-[#97a1f8]' : ''}`}
        >
          Tools
        </button>
      </div>

      <button 
        onClick={() => onNavigate('SUBMIT')}
        className="bg-[#1e1b4b] border border-[#97a1f8]/30 text-[#97a1f8] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#97a1f8] hover:text-[#1e1b4b] transition-all duration-300 neon-shadow"
      >
        Submit Tool
      </button>
    </nav>
  );
};

export default Navbar;

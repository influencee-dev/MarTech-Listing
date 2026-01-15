import React, { useState } from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isDarkMode, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNavigate = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
        <nav className="w-full max-w-5xl ios-glass rounded-full md:rounded-[2.5rem] px-6 md:px-8 h-14 md:h-16 flex items-center justify-between transition-all duration-500">
          <div 
            className="cursor-pointer flex items-center gap-2 md:gap-3 group"
            onClick={() => handleMobileNavigate('HOME')}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-lavender to-deepIndigo rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-black italic text-xs">M</span>
            </div>
            <h1 className="text-base md:text-lg font-black italic tracking-tighter text-slate-800 dark:text-white">
              MARTECH <span className="text-lavender">HUB</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <button 
              onClick={() => onNavigate('HOME')}
              className={`hover:text-lavender transition-colors relative py-1 ${currentView === 'HOME' ? 'text-lavender after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-lavender after:rounded-full' : ''}`}
            >
              Intelligence
            </button>
            <button 
              onClick={() => onNavigate('LISTING')}
              className={`hover:text-lavender transition-colors relative py-1 ${currentView === 'LISTING' ? 'text-lavender after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-lavender after:rounded-full' : ''}`}
            >
              Directory
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={onToggleTheme}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all border border-white/5"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>

            <button 
              onClick={() => onNavigate('SUBMIT')}
              className="hidden md:block bg-white/10 dark:bg-white/10 hover:bg-lavender hover:text-deepIndigo border border-white/20 text-lavender px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300"
            >
              Invia Asset
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            >
              <div className={`w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-3xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center gap-12 px-6">
          <button 
            onClick={() => handleMobileNavigate('HOME')}
            className={`text-4xl font-black italic tracking-tighter ${currentView === 'HOME' ? 'text-lavender' : 'text-slate-800 dark:text-white'}`}
          >
            INTELLIGENCE
          </button>
          <button 
            onClick={() => handleMobileNavigate('LISTING')}
            className={`text-4xl font-black italic tracking-tighter ${currentView === 'LISTING' ? 'text-lavender' : 'text-slate-800 dark:text-white'}`}
          >
            DIRECTORY
          </button>
          <button 
            onClick={() => handleMobileNavigate('SUBMIT')}
            className={`text-4xl font-black italic tracking-tighter ${currentView === 'SUBMIT' ? 'text-lavender' : 'text-slate-800 dark:text-white'}`}
          >
            INVIA ASSET
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="mt-12 w-16 h-16 rounded-full ios-glass flex items-center justify-center text-xl"
          >
            ✕
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
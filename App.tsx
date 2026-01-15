import React, { useState, useMemo, useEffect } from 'react';
import { View, MartechTool, PriceFilter } from './types';
import { martechService } from './services/api';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ListingView from './components/ListingView';
import ProfileView from './components/ProfileView';
import SubmitForm from './components/SubmitForm';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');
  const [tools, setTools] = useState<MartechTool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedToolId, setSelectedToolId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activePriceFilter, setActivePriceFilter] = useState<PriceFilter>('ALL');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const loadTools = async () => {
      try {
        setIsLoading(true);
        const data = await martechService.getAllTools();
        setTools(data);
      } catch (error) {
        console.error("Errore nel caricamento dei tool:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTools();
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.short_pitch.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory ? tool.category === activeCategory : true;
      
      let matchesPrice = true;
      const price = tool.price_numeric || 0;
      
      if (activePriceFilter === 'FREE') matchesPrice = tool.pricing_model === 'Free' || tool.pricing_model === 'Freemium';
      else if (activePriceFilter === 'ENTRY') matchesPrice = price > 0 && price <= 99;
      else if (activePriceFilter === 'PRO') matchesPrice = price > 99 && price < 500;
      else if (activePriceFilter === 'ENTERPRISE') matchesPrice = price >= 500 || tool.pricing_model === 'Custom';

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, activeCategory, activePriceFilter, tools]);

  const selectedTool = useMemo(() => {
    if (selectedToolId === null) return null;
    return tools.find(t => t.id === selectedToolId) || null;
  }, [selectedToolId, tools]);

  const handleNavigate = (view: View, toolId?: number) => {
    setCurrentView(view);
    if (toolId !== undefined) {
      setSelectedToolId(toolId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setCurrentView('LISTING');
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setCurrentView('LISTING');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <main className="flex-grow">
        {isLoading && currentView !== 'HOME' ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="w-12 h-12 border-4 border-[#97a1f8]/20 border-t-[#97a1f8] rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {currentView === 'HOME' && (
              <HomeView 
                onSearch={handleSearch} 
                onCategorySelect={handleCategorySelect} 
                onNavigateToListing={() => handleNavigate('LISTING')}
              />
            )}
            
            {currentView === 'LISTING' && (
              <ListingView 
                tools={filteredTools} 
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                activePriceFilter={activePriceFilter}
                onPriceFilterChange={setActivePriceFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onSelectTool={(id) => handleNavigate('PROFILE', id)}
              />
            )}
            
            {currentView === 'PROFILE' && selectedTool && (
              <ProfileView 
                tool={selectedTool} 
                onBack={() => handleNavigate('LISTING')}
              />
            )}

            {currentView === 'SUBMIT' && (
              <SubmitForm onCancel={() => handleNavigate('HOME')} />
            )}
          </>
        )}
      </main>

      <footer className="bg-slate-100 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 py-12 px-6 mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter text-[#97a1f8]">MARTECH HUB</h2>
            <p className="text-slate-500 mt-2 text-sm uppercase font-bold tracking-widest">Growth Ops Intelligence</p>
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-[#97a1f8] transition-colors">Network</a>
            <a href="#" className="hover:text-[#97a1f8] transition-colors">Contatti</a>
            <a href="#" className="hover:text-[#97a1f8] transition-colors">API Docs</a>
          </div>
          <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold">© 2025 MARTECH HUB. BUILT FOR SCALE.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
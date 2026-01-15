
import React, { useState, useMemo, useEffect } from 'react';
import { View, MartechTool } from './types';
import { CATEGORIES } from './constants';
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

  // Load tools on mount
  useEffect(() => {
    const loadTools = async () => {
      try {
        setIsLoading(true);
        const data = await martechService.getAllTools();
        setTools(data);
      } catch (error) {
        console.error("Failed to load tools from Neon:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTools();
  }, []);

  const selectedTool = useMemo(() => {
    if (selectedToolId === null) return null;
    return tools.find(t => t.id === selectedToolId) || null;
  }, [selectedToolId, tools]);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.short_pitch.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory ? tool.category === activeCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, tools]);

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
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow pt-20">
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

      <footer className="bg-[#0f172a] border-t border-slate-800 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter text-[#97a1f8]">MARTECH HUB</h2>
            <p className="text-slate-500 mt-2 text-sm uppercase font-bold tracking-widest">Growth Ops Intelligence</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-[#97a1f8] transition-colors uppercase">Network</a>
            <a href="#" className="hover:text-[#97a1f8] transition-colors uppercase">Submit</a>
            <a href="#" className="hover:text-[#97a1f8] transition-colors uppercase">API Docs</a>
          </div>
          <p className="text-slate-600 text-xs">© 2025 MARTECH HUB. BUILT FOR SCALE.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

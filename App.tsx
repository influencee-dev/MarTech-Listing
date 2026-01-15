
import React, { useState, useMemo } from 'react';
import { View, MartechTool } from './types';
import { MOCK_TOOLS, CATEGORIES } from './constants';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ListingView from './components/ListingView';
import ProfileView from './components/ProfileView';
import SubmitForm from './components/SubmitForm';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');
  const [selectedToolId, setSelectedToolId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Derived state for the selected tool
  const selectedTool = useMemo(() => {
    if (selectedToolId === null) return null;
    return MOCK_TOOLS.find(t => t.id === selectedToolId) || null;
  }, [selectedToolId]);

  // Derived state for filtered tools
  const filteredTools = useMemo(() => {
    return MOCK_TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.short_pitch.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory ? tool.category === activeCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

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
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
      />
      
      <main className="flex-grow pt-20">
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
      </main>

      <footer className="bg-[#0f172a] border-t border-slate-800 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter text-[#97a1f8]">MARTECH HUB</h2>
            <p className="text-slate-500 mt-2">The elite directory for growth operations.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-[#97a1f8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#97a1f8] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#97a1f8] transition-colors">Contact</a>
          </div>
          <p className="text-slate-600 text-xs">© 2025 Martech Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

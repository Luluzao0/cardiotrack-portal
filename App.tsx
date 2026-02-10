import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import DashboardV1 from './screens/DashboardV1';
import DashboardV2 from './screens/DashboardV2';
import DataGridScreen from './screens/DataGridScreen';
import { ScreenType } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onNavigate={handleNavigate} />;
      case 'dashboard-v1':
        return <DashboardV1 onNavigate={handleNavigate} />;
      case 'dashboard-v2':
        return <DashboardV2 onNavigate={handleNavigate} />;
      case 'datagrid':
        return <DataGridScreen onNavigate={handleNavigate} />;
      default:
        return <LoginScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {renderScreen()}
      
      {/* Dev Navigation Tool (Hidden in production usually, but kept for demo purposes) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 print:hidden">
        {isMenuOpen && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-2 mb-2 w-48 animate-fade-in-up">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Navegação Rápida</div>
            <button 
              onClick={() => { handleNavigate('login'); setIsMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${currentScreen === 'login' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              Portal Login
            </button>
            <button 
              onClick={() => { handleNavigate('dashboard-v1'); setIsMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${currentScreen === 'dashboard-v1' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              Visão Geral
            </button>
            <button 
              onClick={() => { handleNavigate('dashboard-v2'); setIsMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${currentScreen === 'dashboard-v2' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              Monitoramento
            </button>
            <button 
              onClick={() => { handleNavigate('datagrid'); setIsMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${currentScreen === 'datagrid' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              Base de Dados
            </button>
          </div>
        )}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          title="Menu de Demonstração"
        >
          <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'layers'}</span>
        </button>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import { Presentation } from './components/Presentation';
import { slides } from './slides';
import { AppRouterProvider } from './providers/AppRouterProvider';

function App() {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <AppRouterProvider>
      <Presentation slides={slides} />
      <button
        onClick={toggleFullScreen}
        className="fixed bottom-4 right-4 z-50 p-3 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm"
        title="Toggle Full Screen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      </button>
    </AppRouterProvider>
  );
}

export default App;

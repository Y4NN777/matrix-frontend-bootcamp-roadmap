import React, { useState } from 'react';
import { roadmapData } from './data/roadmap';
import { ExternalLink } from 'lucide-react';
import RoadmapContent from './components/RoadmapContent';
import { motion } from 'framer-motion';

function App() {
  const [sessions, setSessions] = useState(roadmapData);

  const toggleSession = (sessionId: number) => {
    setSessions(
      sessions.map(session => ({
        ...session,
        active: session.id === sessionId ? !session.active : session.active
      }))
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzBmMGYwZiIvPjwvc3ZnPg==')] opacity-10" />
      
      <header className="bg-black/90 border-b border-[#222222] py-6 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-10 w-10">
              <img 
                src="src\assets\matrix-logo.jpg"
                alt="Matrix Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-[#c1ff00]">Frontend</span> Bootcamp
            </h1>
          </motion.div>
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-[#1a1a1a] hover:bg-[#252525] transition-colors px-4 py-2 rounded-md text-[#c1ff00] font-medium"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Source <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Welcome to the Matrix Front-end Development Bootcamp</h3>
            <p className="text-gray-400 mb-10">
               Get in board and work to master the art of frontend development using this roadmap
            </p>
          </motion.div>
          
          <div className="space-y-6">
            <RoadmapContent 
              sessions={sessions} 
              toggleSession={toggleSession}
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-black/90 border-t border-[#222222] py-8 mt-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400 text-sm">
          <p>© 2025 Matrix. The only myth is limitation.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PullString from './components/PullString';
import ResumeOverlay from './components/ResumeOverlay';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Background from './components/Background';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[var(--font-main)]">

      {/* Interactive Background */}
      <Background />

      {/* Innovative Resume Trigger */}
      <PullString
        isOpen={isResumeOpen}
        onToggle={() => setIsResumeOpen(prev => !prev)}
      />

      {/* Main Content */}
      <main className={`transition-all duration-500 ${isResumeOpen ? 'scale-90 opacity-50 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
        <Hero />
        <Projects />

        {/* Simple Footer */}
        <footer className="py-10 text-center text-gray-600 text-sm">
          <p>Patel Datt Hemantkumar</p>
        </footer>
      </main>

      {/* Resume Overlay */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeOverlay isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>

      {/* Custom Cursor Dot (Optional Visual Flair) */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-accent-glow rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{ x: 0, y: 0 }} // We would need a custom hook to track mouse for this
        // Using simplified css cursor instead for now in index.css or just omitting complex cursor logic to avoid perf issues without listener
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default App;

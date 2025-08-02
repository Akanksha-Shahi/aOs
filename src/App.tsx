import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';

const AppContent: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const { user } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dashboard' && user) {
        setCurrentView('dashboard');
      } else {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [user]);

  const handleAuthClick = () => {
    if (user) {
      setCurrentView('dashboard');
      window.location.hash = '#dashboard';
    } else {
      setShowAuthModal(true);
    }
  };

  const handleGetStarted = () => {
    if (user) {
      setCurrentView('dashboard');
      window.location.hash = '#dashboard';
    } else {
      setShowAuthModal(true);
    }
  };

  if (currentView === 'dashboard' && user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar onAuthClick={handleAuthClick} />
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onAuthClick={handleAuthClick} />
      <main className="pt-16 lg:pt-20">
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
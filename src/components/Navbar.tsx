import React, { useState, useEffect } from 'react';
import { Waves, Menu, X, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.navbar-container')) {
        setIsMenuOpen(false);
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
        : 'bg-white/90 backdrop-blur-sm border-b border-blue-100'
    }`}>
      <div className="container-responsive-xl">
        <div className="flex-responsive-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-responsive-center space-x-2 lg:space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 lg:p-3 rounded-lg">
              <Waves className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <span className="text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              BlueGuard
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Contact
            </a>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex-responsive-center space-x-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all duration-200 btn-touch-friendly"
                >
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium text-sm xl:text-base hidden xl:block">
                    {user.name}
                  </span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    {user.tokens} tokens
                  </span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in-up">
                    <button
                      onClick={() => {
                        window.location.hash = '#dashboard';
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 flex items-center space-x-2 transition-colors duration-200"
                    >
                      <Shield className="h-4 w-4" />
                      <span>Dashboard</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center space-x-2 transition-colors duration-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 btn-touch-friendly text-sm lg:text-base font-medium"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 btn-touch-friendly"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-4 border-t border-gray-200 space-responsive-sm">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-2"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-2"
              >
                About
              </a>
              <a 
                href="#features" 
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-2"
              >
                Features
              </a>
              <a 
                href="#contact" 
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-2"
              >
                Contact
              </a>
              
              {user ? (
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <div className="flex-responsive-center space-x-3">
                    <User className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700 font-medium text-base">
                      {user.name}
                    </span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {user.tokens} tokens
                    </span>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        window.location.hash = '#dashboard';
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left py-3 px-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onAuthClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-medium text-base"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
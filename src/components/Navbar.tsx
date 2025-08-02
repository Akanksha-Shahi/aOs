import React, { useState } from 'react';
import { Waves, Menu, X, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              BlueGuard
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Features
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </a>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">{user.name}</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    {user.tokens} tokens
                  </span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <button
                      onClick={() => window.location.hash = '#dashboard'}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <Shield className="h-4 w-4" />
                      <span>Dashboard</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center space-x-2"
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
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Features
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Contact
              </a>
              {user ? (
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">{user.name}</span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      {user.tokens} tokens
                    </span>
                  </div>
                  <button
                    onClick={() => window.location.hash = '#dashboard'}
                    className="w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-2 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onAuthClick}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
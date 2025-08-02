import React from 'react';
import { Waves, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">BlueGuard</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Protecting our waters through community-driven monitoring and blockchain-powered incentives.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 p-2 rounded-lg transition-colors duration-200">
                <Phone className="h-5 w-5" />
              </button>
              <button className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors duration-200">
                <MapPin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Report Pollution</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Track Cleanups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Token Marketplace</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BlueGuard. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ for our planet's waters
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Waves, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive-xl py-12 lg:py-16">
        <div className="grid-responsive gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-responsive-sm">
            <div className="flex-responsive-center space-x-2 lg:space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 lg:p-3 rounded-lg">
                <Waves className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <span className="text-lg lg:text-xl font-bold">BlueGuard</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Protecting our waters through community-driven monitoring and blockchain-powered incentives.
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 lg:p-3 rounded-lg transition-colors duration-200 btn-touch-friendly">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 p-2 lg:p-3 rounded-lg transition-colors duration-200 btn-touch-friendly">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <button className="bg-green-600 hover:bg-green-700 p-2 lg:p-3 rounded-lg transition-colors duration-200 btn-touch-friendly">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Report Pollution</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Track Cleanups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Token Marketplace</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 flex-responsive-between items-center">
          <p className="text-gray-400 text-xs lg:text-sm text-center lg:text-left">
            © 2024 BlueGuard. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs lg:text-sm text-center lg:text-right mt-2 lg:mt-0">
            Made with ❤️ for our planet's waters
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
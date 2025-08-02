import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-responsive-xl py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16 space-responsive-md">
          <h1 className="text-responsive-3xl lg:text-responsive-4xl xl:text-responsive-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
            Protect Our Waters,
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block mt-2 lg:mt-4">
              Earn Rewards
            </span>
          </h1>
          <p className="text-responsive-base lg:text-responsive-lg text-gray-600 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Join the global movement to track water pollution and earn BlueGuard tokens 
            for verified cleanup activities. Together, we can make our oceans cleaner.
          </p>
          <div className="flex-responsive gap-4 lg:gap-6 justify-center items-center px-4 sm:px-0">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-responsive-base lg:text-responsive-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-touch-friendly"
            >
              Start Protecting Waters
            </button>
            <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-responsive-base lg:text-responsive-lg font-semibold hover:bg-blue-50 transition-all duration-300 btn-touch-friendly">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid-responsive gap-4 lg:gap-6 mb-12 lg:mb-16 px-4 sm:px-0">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="bg-blue-100 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">2,847</div>
            <div className="text-gray-600 text-sm lg:text-base">Reports Verified</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-teal-100 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <Award className="h-5 w-5 lg:h-6 lg:w-6 text-teal-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">150K</div>
            <div className="text-gray-600 text-sm lg:text-base">Tokens Earned</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-green-100 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <Users className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">12.5K</div>
            <div className="text-gray-600 text-sm lg:text-base">Active Guardians</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-purple-100 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">89%</div>
            <div className="text-gray-600 text-sm lg:text-base">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
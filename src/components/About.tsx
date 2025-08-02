import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Environmental Protection',
      description: 'Our primary mission is to protect water bodies from pollution through community-driven monitoring and cleanup efforts.'
    },
    {
      icon: Target,
      title: 'Precision Tracking',
      description: 'We use advanced technology to accurately track pollution sources and measure the effectiveness of cleanup activities.'
    },
    {
      icon: Users,
      title: 'Community Power',
      description: 'By connecting environmental guardians worldwide, we create a powerful network dedicated to water conservation.'
    },
    {
      icon: Award,
      title: 'Incentive System',
      description: 'Our token-based reward system encourages active participation and recognizes environmental contributions.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container-responsive-xl">
        <div className="text-center mb-12 lg:mb-16 space-responsive-md">
          <h2 className="text-responsive-2xl lg:text-responsive-3xl xl:text-responsive-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            About
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block mt-2 lg:mt-4">
              BlueGuard
            </span>
          </h2>
          <p className="text-responsive-base lg:text-responsive-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            BlueGuard is a revolutionary platform that combines environmental monitoring with blockchain 
            technology to create a sustainable ecosystem for water pollution tracking and cleanup incentives.
          </p>
        </div>

        <div className="grid-responsive-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16 px-4 sm:px-0">
          <div className="space-responsive-md">
            <h3 className="text-responsive-xl lg:text-responsive-2xl xl:text-responsive-3xl font-bold text-gray-900 mb-4 lg:mb-6">
              Transforming Environmental Action
            </h3>
            <div className="space-responsive-sm">
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Our platform empowers individuals and organizations to make a real difference in water 
                conservation. By providing tools for pollution reporting, cleanup coordination, and 
                reward distribution, we're building a global network of environmental guardians.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Every report submitted, every cleanup completed, and every token earned contributes to 
                a larger mission: creating cleaner, healthier water bodies for future generations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg mt-6 lg:mt-8">
              <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Our Impact So Far</h4>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-1">2,847</div>
                  <div className="text-xs lg:text-sm text-gray-600">Pollution Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-teal-600 mb-1">1,523</div>
                  <div className="text-xs lg:text-sm text-gray-600">Cleanups Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-green-600 mb-1">12.5K</div>
                  <div className="text-xs lg:text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-purple-600 mb-1">150K</div>
                  <div className="text-xs lg:text-sm text-gray-600">Tokens Distributed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <img 
              src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Clean water environment" 
              className="rounded-2xl shadow-2xl w-full h-64 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid-responsive gap-6 lg:gap-8 px-4 sm:px-0">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                <value.icon className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
              </div>
              <h4 className="text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
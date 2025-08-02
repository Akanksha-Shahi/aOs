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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> BlueGuard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BlueGuard is a revolutionary platform that combines environmental monitoring with blockchain 
            technology to create a sustainable ecosystem for water pollution tracking and cleanup incentives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transforming Environmental Action
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our platform empowers individuals and organizations to make a real difference in water 
              conservation. By providing tools for pollution reporting, cleanup coordination, and 
              reward distribution, we're building a global network of environmental guardians.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every report submitted, every cleanup completed, and every token earned contributes to 
              a larger mission: creating cleaner, healthier water bodies for future generations.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Impact So Far</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2,847</div>
                  <div className="text-sm text-gray-600">Pollution Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">1,523</div>
                  <div className="text-sm text-gray-600">Cleanups Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">12.5K</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">150K</div>
                  <div className="text-sm text-gray-600">Tokens Distributed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Clean water environment" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
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
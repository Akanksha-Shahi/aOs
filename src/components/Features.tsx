import React from 'react';
import { MapPin, Camera, Coins, BarChart3, Users, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MapPin, 
      title: 'Site Registration',
      description: 'Register monitoring sites with company details, IoT sensors, and precise GPS coordinates.',
      color: 'blue'
    },
    {
      icon: Coins,
      title: 'Token Marketplace',
      description: 'Buy and sell BlueGuard tokens with other users in our secure marketplace ecosystem.',
      color: 'teal'
    },
    {
      icon: Camera,
      title: 'Token Rewards',
      description: 'Earn BlueGuard tokens for verified pollution reports and successful cleanup activities.',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your impact with detailed analytics and environmental improvement metrics.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with environmental guardians worldwide and coordinate cleanup efforts.',
      color: 'orange'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Unlock badges and achievements as you contribute to water conservation efforts.',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      teal: 'bg-teal-100 text-teal-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Environmental Protection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools you need to report pollution, 
            coordinate cleanups, and earn rewards for protecting our water resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
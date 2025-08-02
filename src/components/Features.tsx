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
    <section id="features" className="py-16 lg:py-20 bg-white">
      <div className="container-responsive-xl">
        <div className="text-center mb-12 lg:mb-16 space-responsive-md">
          <h2 className="text-responsive-2xl lg:text-responsive-3xl xl:text-responsive-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block mt-2 lg:mt-4">
              Environmental Protection
            </span>
          </h2>
          <p className="text-responsive-base lg:text-responsive-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Our comprehensive platform provides all the tools you need to report pollution, 
            coordinate cleanups, and earn rewards for protecting our water resources.
          </p>
        </div>

        <div className="grid-responsive gap-6 lg:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 lg:w-16 lg:h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-4 lg:mb-6`}>
                <feature.icon className="h-6 w-6 lg:h-8 lg:w-8" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
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
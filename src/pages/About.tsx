import React from 'react';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We\'re committed to providing the tools and support you need.'
  },
  {
    icon: Award,
    title: 'Expert Knowledge',
    description: 'Our team brings years of experience in credit repair and financial education.'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Our methods have helped thousands improve their credit scores and financial health.'
  },
  {
    icon: Shield,
    title: 'Trusted Process',
    description: 'We follow all legal guidelines and use proven strategies for credit improvement.'
  }
];

const About = () => {
  return (
    <div className="bg-brand-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            About CrediBully
          </h2>
          <p className="mt-4 text-xl text-brand-gray">
            Empowering individuals and businesses to take control of their credit future.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-brand-primary rounded-lg px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-secondary rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-brand-primary rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-white">
            At CrediBully, we believe everyone deserves a second chance at financial success. 
            Our mission is to empower individuals and businesses with the knowledge and tools 
            they need to repair, build, and maintain strong credit profiles. Through education, 
            innovative solutions, and dedicated support, we help our clients achieve their 
            financial goals and secure better opportunities for their future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
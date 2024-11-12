import React from 'react';
import { BookOpen, FileText, Users, Star } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'DIY Credit Repair Course',
    description: 'Learn proven strategies to repair and build your credit on your own terms.',
    price: '$197'
  },
  {
    icon: FileText,
    title: 'Business Credit Building Toolkit',
    description: 'Everything you need to establish and build strong business credit.',
    price: '$297'
  },
  {
    icon: Users,
    title: 'DIY Business Credit Course',
    description: 'Step-by-step guidance to build your business credit from scratch.',
    price: '$397'
  }
];

const Coaching = () => {
  return (
    <div className="bg-brand-cream min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Credit Education Products
          </h1>
          <p className="mt-4 text-xl text-white">
            Take control of your credit journey with our comprehensive educational resources
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-center">
                <feature.icon className="h-12 w-12 text-brand-primary mx-auto" />
                <h3 className="mt-6 text-xl font-semibold text-brand-gray">{feature.title}</h3>
                <p className="mt-4 text-gray-500">{feature.description}</p>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-brand-gray">{feature.price}</span>
                </div>
                <button className="mt-8 w-full bg-brand-primary text-white rounded-md px-4 py-2 hover:bg-brand-blue-dark transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-gray">Why Choose Our Products?</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Star,
                  title: 'Expert Knowledge',
                  description: 'Learn from industry experts with proven success'
                },
                {
                  icon: Users,
                  title: 'Community Support',
                  description: 'Join our community of successful credit builders'
                },
                {
                  icon: BookOpen,
                  title: 'Comprehensive Content',
                  description: 'Get everything you need to succeed'
                },
                {
                  icon: FileText,
                  title: 'Practical Resources',
                  description: 'Access templates, worksheets, and tools'
                }
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon className="h-8 w-8 text-brand-primary mx-auto" />
                  <h3 className="mt-4 text-lg font-semibold text-brand-gray">{item.title}</h3>
                  <p className="mt-2 text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
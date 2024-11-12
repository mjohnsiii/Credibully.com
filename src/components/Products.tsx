import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      title: '72-Hour Inquiry Removal Guide',
      description: 'Learn how to remove unauthorized hard inquiries quickly.',
      path: '/free-guide'
    },
    {
      title: 'DIY Credit Repair Course',
      description: 'Complete system for repairing your credit on your own.',
      path: '/products'
    },
    {
      title: 'Credit Coaching',
      description: 'One-on-one guidance for your credit journey.',
      path: '/coaching'
    }
  ];

  return (
    <div id="products" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            Transform Your Credit Journey
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to take control of your credit score
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              to={product.path}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-brand-gray mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-brand-primary flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-secondary hover:bg-red-600 transition-all duration-300"
          >
            View All Products <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
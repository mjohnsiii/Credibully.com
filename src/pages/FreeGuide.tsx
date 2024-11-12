import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FreeGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    'Step-by-step dispute letter templates',
    'Timeline tracking spreadsheet',
    'Credit bureau contact information',
    'Sample success stories',
    'Bonus: Quick Credit Score Boost Tips'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-brand-gray mb-4">Thank You!</h2>
          <p className="text-xl text-brand-gray mb-8">
            Check your email for your free 72-Hour Inquiry Removal Guide.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-gray mb-4">
              While you wait, check out our premium products:
            </h3>
            <div className="space-y-4">
              <a
                href="/products"
                className="block w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                View All Products
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-brand-gray mb-6">
              Remove Inquiries From Your Credit Report in Just 72 Hours!!
            </h1>
            <p className="text-xl text-brand-gray mb-8">
              Get our step-by-step guide to removing unauthorized inquiries and boost your credit score fast!
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-brand-gray mb-4">
                What's Included:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-brand-gray mb-6">
              Get Your Free Guide Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-all duration-300"
              >
                <span>Get Your Free Guide</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuide;
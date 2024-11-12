import React, { useState } from 'react';
import { CheckCircle, Download, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFormSubmit } from '../hooks/useFormSubmit';

export default function SalesFunnel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, isSubmitting, error } = useFormSubmit();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await handleSubmit({
      ...formData,
      formType: 'free-guide'
    });

    if (success) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Rest of the component remains the same until the form
  return (
    <div id="free-guide" className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h1 className="text-4xl font-extrabold mb-6">
              Get Your Free 72-Hour Inquiry Removal Guide
            </h1>
            <p className="text-xl text-brand-cream mb-8">
              Learn the exact process our experts use to remove unauthorized hard inquiries from your credit report in as little as 72 hours.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Step-by-step inquiry audit process',
                'Ready-to-use dispute letter templates',
                'Credit bureau direct contact information',
                'Follow-up tracking system',
                'Bonus: Inquiry prevention strategies'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-brand-secondary mr-2" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm text-brand-cream">
              <Lock className="h-4 w-4" />
              <span>Your information is secure and will never be shared</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-gray text-center mb-8">
                  Download Your Free Guide
                </h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
                  />
                </div>

                {error && (
                  <div className="text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-secondary hover:bg-red-600 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <Download className="h-5 w-5 mr-2" />
                      Get Instant Access
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-gray mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Check your email for your free 72-Hour Inquiry Removal Guide.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-secondary hover:bg-red-600 transition-all duration-300"
                >
                  Explore Our Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
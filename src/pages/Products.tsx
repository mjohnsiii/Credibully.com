import React from 'react';
import { BookOpen, FileText, Building2 } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: '72-Hour Inquiry Removal Guide',
      description: 'Learn how to remove unauthorized hard inquiries from your credit report quickly and effectively.',
      price: '$47',
      features: [
        'Step-by-step dispute process',
        'Template letters',
        'Video tutorials',
        'Success tracking sheets'
      ],
      icon: FileText,
      link: '/free-guide'
    },
    {
      title: 'DIY Business Credit Course',
      description: 'Build your business credit from scratch with our comprehensive course.',
      price: '$297',
      features: [
        'Business credit building strategies',
        'Vendor list and applications',
        'Credit bureau insights',
        'Funding opportunities guide'
      ],
      icon: Building2,
      link: '/business-credit'
    },
    {
      title: 'Business Credit Building Toolkit',
      description: 'Everything you need to establish and build your business credit profile.',
      price: '$197',
      features: [
        'Business credit templates',
        'Application checklists',
        'Credit monitoring guide',
        'Vendor credit strategies'
      ],
      icon: BookOpen,
      link: '/toolkit'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg-light pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-gray mb-4">Our Products</h1>
          <p className="text-xl text-brand-gray">
            Professional tools and resources to help you achieve your credit goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.title}
                className="bg-brand-primary rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-white mb-6">
                    {product.price}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-white">
                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.link}
                    className="block w-full bg-brand-secondary text-white text-center py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
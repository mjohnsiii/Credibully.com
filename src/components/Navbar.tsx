import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/free-guide', label: 'Free Guide' },
  ];

  return (
    <nav className="bg-brand-gray text-brand-cream fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">CrediBully</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(path)
                      ? 'bg-brand-brown text-white'
                      : 'text-white hover:bg-brand-brown'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/get-started"
                className="text-white bg-brand-secondary hover:bg-red-600 px-4 py-2 rounded-md transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive(path)
                    ? 'bg-brand-brown text-white'
                    : 'text-white hover:bg-brand-brown'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="block text-center text-white bg-brand-secondary hover:bg-red-600 px-4 py-2 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
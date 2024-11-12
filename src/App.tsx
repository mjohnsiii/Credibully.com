import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import SalesFunnel from './components/SalesFunnel';
import Testimonials from './components/Testimonials';
import ProductsPage from './pages/Products';
import FAQ from './pages/FAQ';
import Coaching from './pages/Coaching';
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import FreeGuide from './pages/FreeGuide';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-brand-gray-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-gray">Quick Links</h3>
              <p className="text-brand-primary">
                Empowering individuals with the knowledge and tools to take control of their credit journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-gray">Quick Links</h3>
              <ul className="space-y-2 text-brand-primary">
                <li><a href="/products" className="hover:text-white">Products</a></li>
                <li><a href="/coaching" className="hover:text-white">Coaching</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-gray">Contact</h3>
              <ul className="space-y-2 text-brand-primary">
                <li>support@credibully.com</li>
                <li>1-800-CREDIT</li>
                <li>Mon-Fri: 9am-5pm EST</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-gray">Newsletter</h3>
              <p className="text-brand-primary mb-4">
                Subscribe for credit tips and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="bg-brand-secondary hover:bg-red-600 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-brown text-center text-brand-primary">
            <p>&copy; {new Date().getFullYear()} CrediBully. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <SalesFunnel />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
        <Route path="/coaching" element={<Layout><Coaching /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/get-started" element={<Layout><GetStarted /></Layout>} />
        <Route path="/free-guide" element={<Layout><FreeGuide /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
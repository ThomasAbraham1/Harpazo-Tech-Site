import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    // { name: 'About Us', href: '#' },
    // { name: 'Resources', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-0">
          <img src="/logo.png" alt="Harpazo Tech Logo" className="w-8 h-8 object-contain" />
          <div className={`font-heading font-bold text-2xl tracking-tight transition-colors ${isScrolled ? 'text-primary-blue' : 'text-white'}`}>
            arpazo Tech
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-body text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`transition-colors hover:text-accent-orange ${isScrolled ? 'text-primary-blue/80' : 'text-white/90'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block w-px h-6 bg-gray-300"></div>
          <div className="hidden lg:flex gap-3">
            <a href="#contact">
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 focus:outline-none transition-colors ${isScrolled ? 'text-primary-blue' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-elevated border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4 font-body text-lg">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-primary-blue hover:text-secondary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="h-px w-full bg-gray-100 my-2"></div>
              <div className="flex flex-col gap-3">
                <a href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" fullWidth>Contact Us</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

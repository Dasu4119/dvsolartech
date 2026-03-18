import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/', highlight: false },
    { name: 'About', href: '/about', highlight: false },
    { name: 'Services', href: '/services', highlight: false },
    { name: 'Products', href: '/products', highlight: false },
    { name: 'Projects', href: '/projects', highlight: false },
    { name: 'Calculator', href: '/calculator', highlight: false },
    { name: '⭐ Subsidy', href: '/surya-ghar', highlight: true },
    { name: 'Blog', href: '/blog', highlight: false },
    { name: 'Contact', href: '/contact', highlight: false },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${scrolled
        ? 'bg-white/85 backdrop-blur-2xl shadow-soft border-b border-gray-100/50'
        : 'bg-white/60 backdrop-blur-xl'
        }`}
    >
      {/* Top Info Bar */}
      <div className="bg-navy-800 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-navy-300 font-medium text-xs tracking-wide">
            ☀️ Andhra Pradesh's Trusted Solar Partner
          </span>
          <div className="flex items-center space-x-5">
            <a
              href="tel:+919182928154"
              className="flex items-center text-navy-300 hover:text-accent-400 transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              +91 91829 28154
            </a>
            <span className="text-navy-600">•</span>
            <span className="text-navy-400 text-xs">Mon – Sat: 9 AM – 7 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="DV" className="h-14 w-14 object-contain rounded-xl" />
            <div className="flex flex-col">
              <span className="text-navy-800 font-extrabold text-[15px] leading-tight tracking-tight">DV SOLAR TECH</span>
              <span className="text-brand-500 text-[10px] font-semibold uppercase tracking-widest leading-none">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  item.highlight
                    ? isActive(item.href)
                      ? 'text-accent-600 bg-accent-100 ring-1 ring-accent-300'
                      : 'text-accent-600 bg-accent-50 hover:bg-accent-100 ring-1 ring-accent-200'
                    : isActive(item.href)
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-navy-600 hover:text-brand-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/919182928154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-500 hover:text-[#25D366] transition-colors p-2"
              title="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <Link to="/contact">
              <Button variant="primary" size="sm">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-700 hover:text-brand-500 focus:outline-none p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-gray-100 px-4 pt-3 pb-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-all duration-200 ${
                item.highlight
                  ? isActive(item.href)
                    ? 'bg-accent-50 text-accent-600'
                    : 'text-accent-600 bg-accent-50/60 hover:bg-accent-100'
                  : isActive(item.href)
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-navy-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
              <ChevronRight className="w-4 h-4 text-navy-300" />
            </Link>
          ))}
          <div className="pt-4 space-y-3 border-t border-gray-100 mt-3">
            <Button
              variant="primary"
              fullWidth
              leftIcon={<Phone className="w-4 h-4" />}
              onClick={() =>
                (window.location.href = 'tel:+919182928154')
              }
            >
              Call Now
            </Button>
            <Button
              variant="secondary"
              fullWidth
              leftIcon={<MessageCircle className="w-4 h-4" />}
              onClick={() =>
                window.open('https://wa.me/919182928154', '_blank')
              }
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
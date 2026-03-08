import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="DV" className="h-14 w-14 object-contain rounded-xl" />
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-[15px] leading-tight tracking-tight">DV SOLAR TECH</span>
                <span className="text-brand-400 text-[10px] font-semibold uppercase tracking-widest leading-none">Solutions</span>
              </div>
            </Link>
            <p className="text-navy-400 mb-7 leading-relaxed text-sm">
              Andhra Pradesh's trusted partner for premium solar panel and
              inverter installations. Clean, renewable energy at your doorstep.
            </p>
            <div className="flex space-x-2">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-navy-500 hover:text-accent-400 transition-all duration-300 p-2.5 rounded-xl hover:bg-white/5"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Our Products', href: '/products' },
                { name: 'Our Projects', href: '/projects' },
                { name: 'Solar Calculator', href: '/calculator' },
                { name: 'Blog & Guides', href: '/blog' },
                { name: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-navy-400 hover:text-accent-400 transition-colors text-sm flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300 mb-6">
              Our Brands
            </h3>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-3">
                  Solar Panels
                </p>
                <ul className="space-y-2">
                  {['Waaree', 'Adani', 'Tata Power', 'Reone'].map((brand) => (
                    <li key={brand} className="text-navy-400 text-sm">{brand}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-3">
                  Inverters
                </p>
                <ul className="space-y-2">
                  {['Havells', 'Polycab', 'Sungrow', 'GoodWe'].map((brand) => (
                    <li key={brand} className="text-navy-400 text-sm">{brand}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded-lg mr-3 mt-0.5 group-hover:bg-brand-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-brand-400" />
                </div>
                <a
                  href="tel:+919182928154"
                  className="text-navy-400 hover:text-accent-400 transition-colors text-sm pt-0.5"
                >
                  +91 91829 28154
                </a>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded-lg mr-3 mt-0.5 group-hover:bg-brand-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-brand-400" />
                </div>
                <a
                  href="https://wa.me/919182928154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-accent-400 transition-colors text-sm pt-0.5"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded-lg mr-3 mt-0.5 group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-400" />
                </div>
                <a
                  href="mailto:info@dvsolartech.com"
                  className="text-navy-400 hover:text-accent-400 transition-colors text-sm pt-0.5"
                >
                  info@dvsolartech.com
                </a>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded-lg mr-3 mt-0.5 group-hover:bg-brand-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-brand-400" />
                </div>
                <span className="text-navy-400 text-sm pt-0.5">
                  4-6 Near Old Police Station, Edalapadu, Palnadu (D),
                  Andhra Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {new Date().getFullYear()} DV Solar Tech. All rights reserved.
          </p>
          <p className="text-navy-600 text-xs">
            Powering a greener tomorrow ☀️
          </p>
        </div>
      </div>
    </footer>
  );
}
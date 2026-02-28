import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function ContactCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919182928154"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-soft-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-navy-800 text-white text-xs font-medium px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-soft">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15"></span>
      </a>

      {/* Phone Floating Button (Mobile Only) */}
      <a
        href="tel:+919182928154"
        className="flex md:hidden items-center justify-center w-14 h-14 bg-brand-500 text-white rounded-full shadow-soft-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
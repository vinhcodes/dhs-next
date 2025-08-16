import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <Image 
                  src="/images/logo_06.png" 
                  alt="DHS Services Logo" 
                  width={120} 
                  height={120} 
                  className="w-auto h-auto"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-100 mb-3 leading-tight">
                Tampa Bay's Premier Painting Experts
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Professional interior and exterior painting services with over 10 years of experience serving Tampa, St. Petersburg, Clearwater, and Pinellas Park.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <a 
                href="https://tiktok.com/@dhsservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.01z"/>
                </svg>
              </a>

              <a 
                href="https://facebook.com/dhsservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>

              <a 
                href="https://instagram.com/diverse_home_solution_llc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-100 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Interior Painting', href: '/interior-painting' },
                { name: 'Exterior Painting', href: '/exterior-painting' },
                { name: 'Cabinet Makeover', href: '/cabinet-makeover' },
                { name: 'Pressure Washing', href: '/pressure-washing' },
                { name: 'Window Washing', href: '/window-washing' },
                { name: 'Gutter Cleaning', href: '/gutters-cleaning' }
              ].map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-100 mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="tel:7272564467"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  (727) 256-4467
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm">
                  Serving Tampa Bay Area
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="mailto:info@dhsservices.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@dhsservices.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="tel:7272564467"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 DHS Services. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="/terms-of-use" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
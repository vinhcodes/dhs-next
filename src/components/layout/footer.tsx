import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Company Logo */}
          <div className="flex items-center justify-center bg-white p-2 rounded-lg">
            {/* logo */}
            <Image src="/images/logo_06.png" alt="logo" width={220} height={220} />
           
          </div>

          {/* Company Tagline */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-semibold text-gray-100 leading-relaxed">
              <strong>Tampa Bay's Experts for Interior and Exterior House Painting</strong>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            
            {/* TikTok */}
            <a 
              href="https://tiktok.com/@dhsservices" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.01z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/dhsservices" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/dhsservices" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright - Left Side */}
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 DHS Services. All rights reserved.</p>
            </div>

            {/* Legal Links - Right Side */}
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
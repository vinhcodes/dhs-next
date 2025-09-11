import React, { useState } from 'react';
import { ArrowRight, Phone, Users, Award, Paintbrush, Shield, Play } from 'lucide-react';
import Link from 'next/link';
import VideoDialog from '@/components/ui/video-dialog';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features: Feature[] = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Quality Paint Jobs, On Schedule",
      description: "Tampa Bay painters — no third parties, just quality paint jobs delivered on schedule. We treat your home like it's our own, with the craftsmanship and reliability you'd expect from family."
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Hustle-Free Workmanship Warranty",
      description: "We don't cut corners, rush jobs, or leave you with callbacks. We do it right the first time — with pride, precision, and care you can count on."
    },
    {
      id: 3,
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      title: "Fast Estimate",
      description: "We offer quick, no-pressure estimates — no hidden fees, no sales tricks. Just honest pricing, clear answers, and guidance from a team who cares."
    },
    {
      id: 4,
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "7+ Years of Professional Experience",
      description: "Over a decade of hands-on work in Florida's unique climate, I've honed the skills and knowledge to deliver lasting results."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Wave Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blue wave on the left */}
        <svg
          className="absolute -left-32 top-0 w-[500px] h-full"
          viewBox="0 0 500 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100C50 80 100 90 150 120C200 150 250 200 280 260C310 320 320 380 300 440C280 500 240 550 200 580C160 610 120 620 80 640C40 660 20 690 10 720C5 740 8 760 15 780C25 795 40 800 60 800C100 800 150 790 200 780C250 770 300 760 350 750C400 740 450 730 500 720L500 0C400 20 300 40 200 60C150 70 100 80 50 90C25 95 12.5 97.5 0 100Z"
            fill="url(#gradient1)"
            opacity="0.12"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Medium blue wave on the right */}
        <svg
          className="absolute -right-24 top-16 w-[400px] h-[600px]"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 50C380 70 360 90 330 120C300 150 260 190 240 240C220 290 230 340 250 380C270 420 300 450 330 470C360 490 390 500 400 510C400 520 395 530 385 540C370 555 350 565 325 570C300 575 270 575 240 570C210 565 180 555 160 540C140 525 130 505 135 485C140 465 160 445 185 430C210 415 240 405 270 400C300 395 330 395 360 400C380 403 395 407 400 410L400 50Z"
            fill="url(#gradient2)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Small organic blob in the center */}
        <svg
          className="absolute left-1/3 top-1/4 w-80 h-80 transform -translate-x-1/2"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 50C190 60 220 90 240 130C260 170 270 220 250 260C230 300 190 320 150 310C110 300 80 270 60 230C40 190 50 140 80 110C110 80 130 70 150 50Z"
            fill="url(#gradient3)"
            opacity="0.06"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Flowing bottom wave */}
        <svg
          className="absolute left-0 bottom-0 w-full h-40"
          viewBox="0 0 1200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 160C50 150 100 140 150 130C250 115 350 105 450 110C550 115 650 135 750 140C850 145 950 135 1050 125C1100 120 1150 115 1200 110L1200 160L0 160Z"
            fill="url(#gradient4)"
            opacity="0.08"
          />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional organic shape on top right */}
        <svg
          className="absolute right-0 top-0 w-72 h-72"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 0C280 20 260 45 245 75C230 105 220 140 225 175C230 210 250 240 275 260C290 275 300 285 300 300L300 0Z"
            fill="url(#gradient5)"
            opacity="0.05"
          />
          <defs>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Diverse Home Solution
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Why Tampa FL Homeowners Choose Us
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine local expertise, premium craftsmanship, and customer-first service to deliver a painting experience Tampa FL 
            homeowners can trust — backed by the top house painters in Tampa FL
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Video Thumbnail */}
          <div className="order-2 lg:order-1">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setIsVideoOpen(true)}
            >
              <img
                src="/videos/dhs-intro-thumb.png"
                alt="Click to watch our painting process video"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </div>
              </div>
              
              {/* "Watch Video" Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Watch Video</span>
              </div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Quote Button */}
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg flex-1 sm:flex-none">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Phone Button */}
              <Link href='tel:7276145087' className="group bg-white hover:bg-gray-50 text-gray-800 font-medium px-8 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg flex-1 sm:flex-none">
                <Phone className="w-4 h-4 text-gray-600" />
                <span>(727) 614-5087</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Video Dialog */}
      <VideoDialog
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videos={[{
          id: '1',
          src: '/videos/dhs-intro-video.mp4',
          title: 'Our Professional Painting Process',
          poster: '/videos/dhs-intro-thumb.png'
        }]}
        currentVideoIndex={0}
      />
    </section>
  );
};

export default WhyChooseUsSection;
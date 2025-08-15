"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  cta?: string;
  onCtaClick?: () => void;
}

interface CarouselSliderProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  height?: string;
  overlayOpacity?: number;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showIndicators = true,
  height = 'h-screen',
  overlayOpacity = 0.4,
  textAlign = 'center',
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || !slides || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, slides?.length]);

  const nextSlide = () => {
    if (!slides || slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (!slides || slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCtaClick = (slide: CarouselSlide) => {
    if (slide.onCtaClick) {
      slide.onCtaClick();
    } else {
      // Default action
      console.log(`CTA clicked for slide: ${slide.title}`);
    }
  };

  const getTextAlignClass = () => {
    switch (textAlign) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      default:
        return 'text-center';
    }
  };

  if (!slides || slides.length === 0) {
    return (
      <div className={`${height} bg-gray-200 flex items-center justify-center ${className}`}>
        <p className="text-gray-500 text-lg">No slides to display</p>
      </div>
    );
  }

  const heroSlides = [
  {
    id: 1,
    title: "Transform Your Space",
    subtitle: "Professional Interior & Exterior Painting",
    description: "Bring your vision to life with our expert painting services. Quality craftsmanship, premium materials, and stunning results guaranteed.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=800&fit=crop",
    cta: "Get Free Quote",
    onCtaClick: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  {
    id: 2,
    title: "Residential Excellence",
    subtitle: "Your Home Deserves the Best",
    description: "From single rooms to whole house makeovers, we deliver flawless finishes that enhance your home's beauty and value.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop",
    cta: "View Portfolio",
    onCtaClick: () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  {
    id: 3,
    title: "Commercial Solutions",
    subtitle: "Professional Results for Business",
    description: "Enhance your business environment with our commercial painting expertise. Minimal disruption, maximum impact.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop",
    cta: "Commercial Services",
    onCtaClick: () => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
];


  return (
    <div className={`relative ${height} overflow-hidden ${className}`}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-gray-900"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black"
              style={{ opacity: overlayOpacity }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className={`text-white max-w-4xl ${getTextAlignClass()}`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="text-xl md:text-2xl mb-6 text-orange-400">
                    {slide.subtitle}
                  </h2>
                )}
                {slide.description && (
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                )}
                {slide.cta && (
                  <button 
                    onClick={() => handleCtaClick(slide)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    {slide.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter (Optional) */}
      {slides.length > 1 && (
        <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      )}
    </div>
  );
};

export default CarouselSlider;
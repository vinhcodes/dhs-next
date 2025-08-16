"use client"

import React, { useState, useEffect, useRef } from 'react';
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
  height = 'h-[85vh]',
  overlayOpacity = 0.4,
  textAlign = 'center',
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
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
      <div className={`${height} bg-gray-100 flex items-center justify-center ${className}`}>
        <p className="text-gray-500 text-lg">No slides to display</p>
      </div>
    );
  }

  return (
    <div 
      className={`relative ${height} overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0 opacity-100' : 
            index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-gray-900 relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
              <div className={`text-white max-w-4xl ${getTextAlignClass()} ${isLoaded ? 'animate-fade-in' : ''}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 text-blue-200">
                    {slide.subtitle}
                  </h2>
                )}
                {slide.description && (
                  <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-100">
                    {slide.description}
                  </p>
                )}
                {slide.cta && (
                  <button 
                    onClick={() => handleCtaClick(slide)}
                    className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-base lg:text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
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
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {slides.length > 1 && (
        <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CarouselSlider;